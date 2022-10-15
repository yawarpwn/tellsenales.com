export default function ProductItem ({hit, components}) {
  console.log(hit, components)
  const { name, img1, slug} = hit
  return (
  <a className="flex items center gap-4" href={`/seguridad/${slug}`}>
      <img className="object-cover" width={20} height={20} src={img1.url} />
      {name}
    </a>
  )
}
