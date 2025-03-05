import ImagePolaroid from '@components/image-polaroid'

export default function SectionAuthor() {
  return (
    <section className='flex flex-col w-full'>
      <div className="flex flex-col md:flex-row max-w-7xl ml-auto mr-auto pt-24 pr-16 pb-24 pl-16 gap-16">
        <div className="flex flex-col w-auto md:w-1/2">
          <h2 className="mb-8">The author</h2>

          <p className="mb-8">Hello there! :3 My name is Simba, and I am a frontend-oriented software developer. I enjoy coffee drinks (especially cappuccinos!), reading cozy books, and lifting weights.</p>

          <span className="text-xl mb-4">More facts about me</span>

          <ul className="list-disc list-inside mb-8">
            <li>I have a Bachelor&apos;s degree in Business Administration (BBA).</li>
            <li>I have been in the software industry for over 7 years.</li>
            <li>My greatest skills are React, WordPress, and user-centered design.</li>
            <li>I speak Finnish and English — and a bit of Swedish and Spanish.</li>
            <li>I live in Tampere, Finland.</li>
          </ul>

          <p className="text-xl mb-4">Wanna know more? Send me a message!</p>

          <address>
          Sini Pauliina Kolehmainen<br />
            <a href="mailto:kolehmainen.sini@outlook.com">kolehmainen.sini@outlook.com</a><br />
            <a href="https://www.sinipauliina.com/" target="_blank">My portfolio</a><br />
            <a href="https://fi.linkedin.com/in/sinipauliina" target="_blank">My LinkedIn profile</a>
          </address>
        </div>

        <div className="flex flex-row md:flex-col items-end w-auto md:w-1/2">
          <ImagePolaroid 
            src={'https://placedog.net/500/333?id=226'} 
            text={'The author of this project is pretty cute! :3'} 
          />
        </div>
      </div>
    </section>
  )
}
