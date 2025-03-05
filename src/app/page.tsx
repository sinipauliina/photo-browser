import Hero from '@components/hero'
import SectionPhotos from './_section-photos'

export default function Home() {
  return (
    <main className="flex flex-col items-start flex-1">
      <Hero title={'We have some really awesome photos here.'} subtitle={'Wanna see? Scroll down!'} size={'lg'} />

      <SectionPhotos />
    </main>
  )
}
