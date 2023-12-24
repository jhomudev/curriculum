type Props = {
  title: string,
  children: React.ReactNode
}
function SectionSheet({title, children}: Props) {
  return (
    <section className="">
      <h2 className="uppercase font-saira font-semibold text-xl text-primary border-b-2 border-primary mb-1">{title}</h2>
      <div className="flex flex-col gap-1">
        {children}
      </div>
    </section>
  )
}
export default SectionSheet