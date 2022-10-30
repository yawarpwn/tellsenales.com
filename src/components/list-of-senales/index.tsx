import { useState, useEffect, useRef } from 'preact/compat'
import { FunctionComponent } from 'preact/compat'
import type { Senal } from '@types'

interface SenalCardProps {
  senal: Senal
}

interface Props {
  senales: Senal[]
  categories: string[]
}

const ProductCard: FunctionComponent<SenalCardProps> = ({ senal }) => {
  const { name, img, code } = senal
  return (

    <div>
      <div className="product-card shadow-md rounded-md transition-all">
        <div className="relative h-0 w-full pb-[100%]">
          <img
            className="absolute inset-0 max-h-[155px] m-auto max-w-[85%]"
            alt={name}
            src={img.url}
          />
        </div>
        <div className="product-card__body p-2">
          <span className="text-xs font-bold uppercase">Código: {code}</span>
          <div className="min-h-[60px] mt-2">
            <p className="text-xs md:text-sm">{name}</p>
          </div>
        </div>
      </div>
    </div>

  )

}

const ListOfSenales: FunctionComponent<Props> = ({ senales, categories }) => {
  const buttonRef = useRef()
  const [categoriesFiltered, setCategoriesFiltered] = useState<Senal[]>(categories)
  const onCategory = (e) => {
    const category = e.target.innerText
    const filtered: Senal[] = senales.filter(senal => senal.category === category)
    setCategoriesFiltered(filtered)
  }

  useEffect(() => {
  }, [])


  return (
    <>
      <div className='flex gap-4'>
        {categoriesFiltered.map(category => {
          return (
            <div ref={buttonRef} onClick={onCategory} className='bg-gray-500 p-4'>{category}</div>
          )
        })}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 px-4 md:px-0 gap-2">
        {senales.map((senal: Senal) => <ProductCard senal={senal} />)}
      </div>
    </>

  )

}

export default ListOfSenales
