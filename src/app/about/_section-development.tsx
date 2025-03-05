export default function SectionDevelopment() {
  return (
    <section className='flex flex-col w-full'>
      <div className="flex flex-col max-w-7xl ml-auto mr-auto pt-24 pr-16 pb-24 pl-16 gap-8">
        <h2 className="flex flex-col w-auto items-start">Development</h2>

        <div className="flex flex-col md:flex-row w-full  gap-16">
          <div className="flex flex-col w-full md:w-1/2">
            <p>One day, I was given a challenge to develop a simple photo browser as a single-page application. I had been wanting to try out Next.js for quite a while, so I chose it for this project to improve my skills during the assignment. I know — Next.js is a hybrid framework, not a traditional SPA framework like vanilla React. But for this project, I have been deliberately avoiding server-side rendering and other cool features Next.js offers. XD</p>

            <p>So far, Next.js has been a pleasure to work with, and I think I would choose it again in the future. This was also my first time using TailWind CSS, and I have to admit — I have not become a fan. XD It is easy to learn and use, and it could be useful in the long run since it reduces the need for extensive stylesheet editing during further development. But I really do not like how cluttered the TSX files look with all those Tailwind classes. :D</p>
          </div>

          <div className="flex flex-col md:flex-col items-start w-full md:w-1/2">
            <h3>Ideas for the future</h3>
          
            <ul className="list-disc list-inside">
              <li><a href="https://nextjs.org/docs/app/api-reference/file-conventions/loading" target="_blank">Loading UI</a> (as a Client Component)</li>
              <li><a href="https://nextjs.org/docs/app/api-reference/file-conventions/not-found" target="_blank">Not Found UI</a></li>
              <li><a href="https://nextjs.org/docs/app/building-your-application/routing/error-handling" target="_blank">Error UI</a></li>
              <li><a href="https://nextjs.org/docs/app/building-your-application/routing/error-handling#handling-global-errors" target="_blank">Global Error UI</a></li>
              <li>Some tests?</li>
              <li>User list page (with sorting and pagination)</li>
              <li>Single user page (with details and photo gallery)</li>
              <li>Light theme</li>
              <li>Cross-browser support (Edge, Firefox, Safari, Opera)</li>
              <li>Improved accessibility (e.g. better screen reader support)</li>
              <li>Mobile menu/header</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
