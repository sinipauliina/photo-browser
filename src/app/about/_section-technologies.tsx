import Image from 'next/image'

export default function SectionTechnologies() {
  return (
    <section className='flex flex-col w-full custom-background-secondary-color'>
      <div className="flex flex-col w-full max-w-7xl items-start md:items-center ml-auto mr-auto pt-24 pr-16 pb-24 pl-16 gap-16">
        <h2 className="flex flex-col w-auto items-center">Technologies used in this project</h2>

        <ul className="flex flex-col sm:flex-row md:w-full flex-wrap md:flex-nowrap content-start md:content-center items-center sm:justify-between md:justify-around gap-16">
          <li className="flex flex-col items-center justify-center">
            <a href="https://nextjs.org/" target="_blank" className="custom-link-image h-full">
              <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js"
                width={180}
                height={38}
              />
            </a>
          </li>
        
          <li className="flex flex-col items-center justify-center">
            <a href="https://tailwindcss.com/" target="_blank" className="custom-link-image h-full">
              <Image
                className=""
                src="/tailwindcss.svg"
                alt="Tailwind CSS"
                width={180}
                height={38}
              />
            </a>
          </li>
        
          <li className="flex flex-col items-center justify-center">
            <a href="https://www.typescriptlang.org/" target="_blank" className="custom-link-image h-full">
              <Image
                className=""
                src="/typescript.svg"
                alt="TypeScript"
                width={180}
                height={38}
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
