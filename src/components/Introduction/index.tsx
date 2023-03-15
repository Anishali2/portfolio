import React from 'react'
import Link from 'next/link'
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const Web2Introduction = () => {
  const images = [
    {
      id: 2,
      imageSrc: '/profile2.jpg',
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false
    }
  ]
  return (
    <div className="my-12">
      <div className=" max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
          <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-1 lg:grid-rows-1 lg:gap-8">
              {images.map((image) => (
                <img
                  key={image.id}
                  src={image.imageSrc}
                  alt={image.imageAlt}
                  className={classNames(
                    image.primary
                      ? 'lg:col-span-1 lg:row-span-1'
                      : 'hidden lg:block',
                    'rounded-lg'
                  )}
                />
              ))}
            </div>
          </div>
          <div className="lg:col-start-8 lg:col-span-12">
            <div className="text-primary text-2xl">
              I’m Anish, currently I live in Pakistan working as a senior MERN
              Stack developer at Netixsol. My projects include React js, Redux,
              Data Fetching, TypeScript, Next js, Web 3 integration and much
              more. If you’re interested in the tools and software I use check
              out my{' '}
              <Link
                target="_blank"
                rel="noreferrer"
                href={'https://www.github.com/anishali2'}
                className="underline cursor-pointer"
              >
                Github Profile.
              </Link>
              <br />
              <br />
              <span className="bg-primary text-background">
                In my spare time I like to watch Animes, play video games, and
                learn about space. I’m always down for hearing about new
                projects, so feel free to drop me a line.
              </span>
              <br />
              <br />
              <Link
                href={'/contact-us'}
                className="bg-primary rounded-tr-2xl cursor-pointer hover:animate-pulse text-background p-1"
              >
                Send me a Message now {`#>`}
              </Link>
              {/* <div className="flex mt-2">
                <div className="h-5 w-5 rounded-full mt-1.5 bg-primary"></div>r
              </div>
              Gmail me at :{' '}
              <span className="bg-primary text-background">
                ansihali1221@gmail.com
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Web2Introduction
