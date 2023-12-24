type Props = {
  company: string,
  role: string,
  date: string,
  description: string,
  actions: string[]
}
function ExperienceItem ({company, date ,role, description, actions}: Props) {
  return (
    <article>
      <header className="flex flex-col md:flex-row md:items-center justify-between">
        <h3 className="text-lg font-semibold leading-5">{company} | {role}</h3>
        <span className="text-primary font-saira text-nowrap">{date}</span>
      </header>
      <p className="text-justify mb-1">{ description }</p>
      <ul className="flex flex-col gap-1 list-disc ml-5">
        {
          actions.map((action, i) => <li key={i} className="text-justify">{action}</li>)
        }
      </ul>
    </article>
  )
}
export default ExperienceItem