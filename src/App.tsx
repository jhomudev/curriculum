import { ButtonDownloadCV, EducationItem, ExperienceItem, ListCols } from "./components"
import SectionSheet from "./components/SectionSheet"
import experience from './mocks/experience.json'
import education from './mocks/education.json'
import info from './mocks/info.json'

function App() {
  const { languages, softSkills, tecnologies} = info
  return (
    <>
      <div className="bg-gray-50 min-h-screen py-10 grid place-items-center font-ptsans">
        <div className="w-[min(100%,25cm)] bg-white shadow-xl p-5 sm:p-14 text-default tracking-tight leading-[1.15rem]">
          <header>
            <h1 className='font-saira uppercase font-bold text-2xl text-center'><span className='text-primary'>Jhonan </span>Muñoz</h1>
            <strong className='block font-saira font-bold text-primary text-xl text-center mb-1'>Junior Web Developer – Junior Software Engineer</strong>
            <div className="flex flex-wrap justify-center divide-x-2 font-medium">
              <a className="px-2" href="https://linkedin.com/in/jhonancalebmc" target="_blank">linkedin/jhonancalebmc</a>
              <a className="px-2" href="mailto:jhonanmc2003@gmail.com" target="_blank">jhonanmc2003@gmail.com</a>
              <a className="px-2" href="https://jhonanmc.com" target="_blank">jhonanmc.com</a>
              <a className="px-2"target="_blank">+51 971541688</a>
            </div>
          </header>
          <p className="text-justify my-3">
            Desarrollador con excelentes aptitudes de gestión y mantenimiento de proyectos. Orientado a la acción con gran capacidad para
            comunicarse de forma eficaz con el público del sector tecnológico, administrativo y empresarial, con capacidad de adaptación a 
            todo tipo de entornos. En busca de una oportunidades laborales que me permitan aplicar y ampliar mis habilidades como 
            profesional.
          </p>
          <main className="flex flex-col gap-3">
            <SectionSheet title="Experiencia">
              {
                experience.map((experience, i) => <ExperienceItem key={i} {...experience} />)
              }
            </SectionSheet>
            <SectionSheet title="Educación">
              {
                education.map((item, i) => <EducationItem key={i} {...item} />)
              }
            </SectionSheet>
            <SectionSheet title="Información adicional">
              <ListCols title="Lenguajes de programación" items={languages} />
              <ListCols title="Tecnologías y otros" items={tecnologies} />
              <ListCols title="Habilidades blandas" items={softSkills} />
            </SectionSheet>
          </main>
        </div>
        <ButtonDownloadCV />
      </div>
    </>
  )
}

export default App
