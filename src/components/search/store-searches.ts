import { AutocompleteItem } from './autocomplete-modal'

function isLocalStorageSupported() {
    const key = '__TEST_KEY__'

    try {
        window.localStorage.setItem(key, '')
        window.localStorage.removeItem(key)
        return true
    } catch (error) {
        return false
    }
}

function createStorage<TItem>(key: string) {
    if (isLocalStorageSupported() === false) {
        return {
            setItem() {},
            getItem() {
                return []
            }
        }
    }

    return {
        setItem(item: TItem[]) {
            return window.localStorage.setItem(key, JSON.stringify(item))
        },
        getItem(): TItem[] {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : []
        }
    }
}

type CreateStoredSearchesOptions = {
    key: string
    limit?: number
}

export type StoredSearchPlugin<TItem> = {
    add: (item: TItem) => void
    remove: (item: TItem) => void
    getAll: () => TItem[]
}

export function createStoredSearches<TItem extends AutocompleteItem>({
    key,
    limit = 5
}: CreateStoredSearchesOptions): StoredSearchPlugin<TItem> {
    const storage = createStorage<TItem>(key)
    let items = storage.getItem().slice(0, limit)

    return {
        add(item: TItem) {
            const isQueryAlreadySaved = items.findIndex(
                (x) => x.objectID === item.objectID
            )

            if (isQueryAlreadySaved > -1) {
                items.splice(isQueryAlreadySaved, 1)
            }

            items.unshift(item)
            items = items.slice(0, limit)

            storage.setItem(items)
        },
        remove(item: TItem) {
            items = items.filter((x) => x.objectID !== item.objectID)

            storage.setItem(items)
        },
        getAll() {
            return items
        }
    }
}
