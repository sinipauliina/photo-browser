import Hero from '@components/hero'
import SectionAuthor from './_section-author'
import SectionTechnologies from './_section-technologies'
import SectionDevelopment from './_section-development'

export default function About() {
  return (
    <main className="flex flex-col items-start flex-1">
      <Hero title={'About this project'} subtitle={'Who developed this app and why?'} />
      <SectionAuthor />
      <SectionTechnologies />
      <SectionDevelopment />
    </main>
  )
}
