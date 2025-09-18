import { v4 as uuidv4 } from 'uuid'
import { useTextLinkContext } from 'components/TextLinkProvider'
import Work from 'components/works/Work'

export default function Highlights() {
  const textLinkColors = useTextLinkContext()

  return (
    <div className='flex flex-col gap-y-8 text-lg'>
      <div className='flex flex-col gap-y-2'>
        <h1 className='mb-2 text-3xl font-bold md:text-4xl'>Works</h1>

        <div className='flex flex-col space-y-2'>
          <h2 id='personal-works' className='text-2xl font-bold sm:text-3xl'>
            Personal Works
          </h2>
          <div className='flex flex-col gap-y-1.5'>
            <Work addClassNames='from-blue-500 via-purple-500 to-pink-500'>
              <h3 className='text-xl font-bold sm:text-2xl'>StoryLens</h3>
              <p>{`In my ongoing project, StoryLens, I’m architecting a Next.js/React + Node/Prisma stack with standardized data flows and AI-driven personalization features, giving me hands-on experience designing adaptive, user-focused systems.`}</p>
              <ul className='ml-3 list-inside list-disc'>
                <li>{`Architected full-stack workflows with Next.js/React, Zustand, Prisma, and PostgreSQL.`}</li>
                <li>{`Translated product goals into efficient data models, APIs, and scalable UI.`}</li>
                <li>{`Built reusable component and API libraries to enable rapid expansion.`}</li>
                <li>{`Prototyped AI-driven onboarding and recall workflows with user-friendly interfaces.`}</li>
              </ul>
            </Work>
            <p className='pt-3'>
              For more personal works, take a look at my{' '}
              <a
                href='https://github.com/evwalt'
                className={textLinkColors}
                target='_blank'
                rel='noreferrer noopener'
              >
                GitHub
              </a>{' '}
              for my most up-to-date projects.
            </p>
          </div>

          <h2 id='ghostbed' className='pt-2 text-2xl font-bold sm:text-3xl'>
            GhostBed Highlights
          </h2>
          {[
            {
              url: 'https://quiz-preview.vercel.app/',
              title: 'Sales Funnel with Next.js, React, and TypeScript',
              linkText: 'Sales Funnel (Preview)',
              body: (
                <p>
                  {`I created this Sales Funnel App with Next.js, React, and TypeScript. I wrote the full implementation with completely new code along with some updates to the business logic. We hope to go live with the new code I wrote after we complete our migration efforts to a headless web application. Feel free to check out the `}
                  <a
                    href='https://www.ghostbed.com/pages/mattress-quiz'
                    className={textLinkColors}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    live version
                  </a>{' '}
                  built with Vue.js.
                </p>
              ),
            },
          ].map(({ url, title, linkText, body }) => (
            <div
              key={uuidv4()}
              className='flex flex-col gap-y-1.5 rounded-lg border-2 border-[#5FA405] px-5 py-4'
            >
              <h3 className='text-xl font-bold sm:text-2xl'>{title}</h3>
              <p>
                Link:{' '}
                <a
                  href={url}
                  className={textLinkColors}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  {linkText}
                </a>
              </p>
              {body}
            </div>
          ))}
        </div>
      </div>

      {/* <Features /> */}

      <div className='flex flex-col gap-y-2'>
        <h2 className='text-2xl font-bold sm:text-3xl'>Other Personal Works</h2>
        <p>
          Check out more of my open-source projects on{' '}
          <a
            href='https://www.github.com/evwalt/'
            className={textLinkColors}
            target='_blank'
            rel='noreferrer noopener'
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  )
}
