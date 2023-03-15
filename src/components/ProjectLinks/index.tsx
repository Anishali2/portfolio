import Link from 'next/link'
import React from 'react'
const posts = [
  {
    title: 'Rosemary School of Excellence',
    href: 'http://rosemaryschools.org/',
    category: { name: 'School Project', href: '#' },
    date: 'Sep 19, 2022',
    technology: [
      {
        name: 'Next js',
        icon: '/next-js.svg'
      },
      {
        name: 'TypeScript',
        icon: '/typescript-icon.svg'
      },
      {
        name: 'Tailwind css',
        icon: '/tailwind-css.svg'
      }
    ],
    datetime: '2020-03-16',
    imageUrl: '/school.png',
    readingTime: '4 min'
  },
  {
    title: 'Koinzo UI',
    href: 'https://koinzo-ani.netlify.app/',
    category: { name: 'Article', href: '#' },
    date: 'Sep 7, 2022',
    datetime: '2020-03-10',
    imageUrl: '/koinzo.png',
    readingTime: '3 min',
    author: {
      name: 'Anish Ali',
      href: '#',
      imageUrl:
        '	https://miro.medium.com/v2/resize:fill:176:176/1*OvZu4RTe5vXgkS0odoZufA.png'
    }
  }
]
const ProjectLinks = () => {
  const data = 'Projects'
  return (
    <div className="relative bg-background mb-2">
      <div className="relative py-16 px-4 sm:pb-24 sm:pt-8 sm:px-6 ">
        <div className="lg:pr-8">
          <div className="sm:max-w-md mx-auto md:max-w-5xl lg:max-w-7xl ">
            <div className="relative bg-background my-2">
              <div className="">
                <div className="flex justify-center mb-5">
                  <div className="max-w-7xl mx-auto text-primary ">
                    <div className="text-4xl flex">
                      {data.split('').map((v) => {
                        const random = Math.random() * 3

                        const r = Number(random.toFixed(0))
                        return (
                          <p
                            key={v}
                            className={`char${r + 1} text-primary text-4xl`}
                          >
                            {v == '*' ? <span className="ml-5"> </span> : v}
                          </p>
                        )
                      })}
                    </div>
                    <div className="flex space-x-2">
                      {Array.from(Array(7).keys()).map((v) => {
                        const random = Math.random() * 3
                        const r = Number(random.toFixed(0))
                        return (
                          <div
                            key={v}
                            className={` char${r + 1} h-3 w-3 bg-primary`}
                          ></div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-4 max-w-none mx-auto grid gap-5 md:grid-cols-1 lg:grid-cols-2 lg:max-w-none">
                  {posts.map((post) => (
                    <div
                      key={post.title}
                      className="flex flex-col rounded-lg border border-border shadow-lg overflow-hidden"
                    >
                      <div className="flex-shrink-0">
                        <img
                          className="h-48 w-full object-cover"
                          src={post.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="flex-1 bg-background p-6 flex flex-col justify-between">
                        <div className="flex-1">
                          <div className="text-sm flex justify-between font-medium text-primary">
                            <a
                              href={post.category.href}
                              className="hover:underline"
                            >
                              {post.category.name}
                            </a>
                            <Link
                              href={post.href}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-main bottom-0 bg-primary text-background px-2"
                            >
                              Live
                            </Link>
                          </div>
                          <a href={post.href} className="block mt-2">
                            <p className="text-xl font-semibold text-primary">
                              {post.title}
                            </p>

                            {/* <div className="grid grid-cols-1 grid-rows-4">
                              {post.technology?.map((v, i) => (
                                <div className="flex">
                                  <Image
                                    alt="next-js"
                                    src={v.icon}
                                    width={15}
                                    height={15}
                                    className="ml-0.5 mr-1 bg-white"
                                  />
                                  <p className="text-primary-light mt-0.5 ">
                                    {v.name}
                                  </p>
                                </div>
                              ))}5Obe9mq5lAAqHJSYivGBiok2
                            </div> */}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectLinks
