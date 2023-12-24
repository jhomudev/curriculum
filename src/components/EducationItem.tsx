type Props = {
  university: string,
  carreer: string,
  date: string,
  actions: string[]
}
function EducationItem ({university, date , carreer, actions}: Props) {
  return (
    <article>
      <header className="flex flex-col md:flex-row md:items-center justify-between">
        <h3 className="text-lg font-semibold leading-5">{university} | {carreer}</h3>
        <span className="text-primary font-saira text-nowrap">{date}</span>
      </header>
      <ul className="flex flex-col gap-1 list-disc ml-5">
        {
          actions.map((action, i) => <li key={i} className="text-justify">{action}</li>)
        }
      </ul>
    </article>
  )
}
export default EducationItem