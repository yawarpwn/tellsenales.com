import { Highlight } from './highlight'
export function Results(props) {
  return (
    <section className='DocSearch-Hits'>
      <div className='DocSearch-Hit-source'>Seguridad</div>
      <ul className='' {...props.getListProps()}>
        {props.collection.items.map((item, index) => {
          return (
            <Result item={item} key={item.objectID} {...props} />
          )
        })}
      </ul>
    </section>
  )

}

function Result({ item, getItemProps }) {
  return (
    <li
      className="DocSearch-Hit"
      {...getItemProps({ item })}
    >
      <a href={`/seguridad/${item.slug}/`} >
        <div class='DocSearch-Hit-Container'>
            <img src={item.img1.url} alt={item.name} width={60} height={60} className='object-contain' />
            <div class='DocSearch-Hit-content-wrapper'>
              <span class='DocSearch-Hit-title'>
              <Highlight hit={item} attribute='name' />
            </span>
              <span class='DocSearch-Hit-path'>{item.category}</span>
            </div>
          <div className="DocSearch-Hit-action">
            <svg class="DocSearch-Hit-Select-Icon" width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg>
          </div>
        </div>
      </a>
    </li>
  )

}
