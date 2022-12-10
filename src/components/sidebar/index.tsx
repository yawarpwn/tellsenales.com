import manifest from '../../config/manifest.json'

function Category({ title, children }) {
    return (
        <div>
            Category
            {children}
        </div>
    )
}

export default function Sidebar({ routes }) {
    return <div>Sidebar</div>
}
