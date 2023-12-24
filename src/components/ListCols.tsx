type Props = {
  title: string
  items: string[]
}
function ListCols({ items, title}: Props) {
  return (
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 list-disc ml-5`}>
        {
          items.map((action, i) => <li key={i}>{action}</li>)
        }
      </ul>
    </div>
  )
}
export default ListCols