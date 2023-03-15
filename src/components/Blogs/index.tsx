import Link from 'next/link'
import React from 'react'
const posts = [
  {
    title: 'Why you should use Vim?',
    href: 'https://medium.com/@anish_ali/why-you-should-use-vim-4cfef3dad5ed',
    category: { name: 'Article', href: '#' },
    description:
      'According to the official docs of Vim .Vim is highly configurable text editor build to make creating and changing any kind of text very efficient. It is included as “vi” with most UNIX systems and...',
    date: 'Sep 19, 2022',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Anish Ali',
      href: '#',
      imageUrl:
        '	https://miro.medium.com/v2/resize:fill:176:176/1*OvZu4RTe5vXgkS0odoZufA.png'
    }
  },
  {
    title: 'Ultimate React Formik Guide',
    href: 'https://medium.com/@anish_ali/ultimate-react-formik-guide-503225cfffd3',
    category: { name: 'Article', href: '#' },
    description:
      'Formik is the most popular open source library for form-handling for React & React Native Formik have many features that makes this...',
    date: 'Sep 7, 2022',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '3 min',
    author: {
      name: 'Anish Ali',
      href: '#',
      imageUrl:
        '	https://miro.medium.com/v2/resize:fill:176:176/1*OvZu4RTe5vXgkS0odoZufA.png'
    }
  },
  {
    title: 'Bun Js vs. Node JS',
    href: 'https://medium.com/@anish_ali/bun-js-vs-node-js-23558c7aebb8',
    category: { name: 'Article', href: '#' },
    description:
      'Bun According to the official docs of bun .The bun is modern JavaScript runtime environment like node or deno. It mainly focus on 3 main...',
    date: 'Aug 29, 2022',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '2 min',
    author: {
      name: 'Anish Ali',
      href: '#',
      imageUrl:
        '	https://miro.medium.com/v2/resize:fill:176:176/1*OvZu4RTe5vXgkS0odoZufA.png'
    }
  },
  {
    title: 'How to Configure Redux Store with Redux-toolkit',
    href: 'https://medium.com/@anish_ali/how-to-configure-redux-store-with-redux-toolkit-73bc4bbf4105',
    category: { name: 'Article', href: '#' },
    description:
      'Redux is popular library used to avoid the props drilling concept in web Applications .Redux is used in many popular web applications as...',
    date: 'Aug 21, 2022',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '2 min',
    author: {
      name: 'Anish Ali',
      href: '#',
      imageUrl:
        '	https://miro.medium.com/v2/resize:fill:176:176/1*OvZu4RTe5vXgkS0odoZufA.png'
    }
  }
]
const Blogs = () => {
  const data = 'Blogs'
  return (
    <>
      <div className="relative bg-background mb-2">
        <div className="relative py-16 px-4 sm:pb-24 sm:pt-10 sm:px-6 ">
          <div className="lg:pr-8">
            <div className="sm:max-w-md mx-auto md:max-w-5xl lg:max-w-7xl ">
              <div className="relative bg-background mb-2">
                <div className="">
                  <div className="flex justify-center mb-5">
                    <div className="max-w-7xl mx-auto text-primary ">
                      <div className="text-4xl flex">
                        {data.split('').map((v) => {
                          const random = Math.random() * 3

                          const r = Number(random.toFixed(0))
                          return (
                            <div
                              key={v}
                              className={`char${r + 1} text-primary text-4xl`}
                            >
                              {v == '*' ? <span className="ml-5"> </span> : v}
                            </div>
                          )
                        })}
                      </div>
                      <div className="flex space-x-2">
                        {Array.from(Array(5).keys()).map((v) => {
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
                  <Link
                    href={'https://medium.com/@anish_ali'}
                    className="flex justify-center items-center text-2xl text-primary hover:underline "
                  >
                    https://medium.com/@anish_ali
                  </Link>

                  <div className="mt-12 p-4 max-w-none mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:max-w-none">
                    {posts.map((post) => (
                      <div
                        key={post.title}
                        className="flex flex-col rounded-lg border border-border shadow-lg overflow-hidden"
                      >
                        <div className="flex-1 bg-background p-6 flex flex-col justify-between">
                          <div className="flex-1">
                            <div className="text-sm font-medium text-primary">
                              <a
                                href={post.category.href}
                                className="hover:underline"
                              >
                                {post.category.name}
                              </a>
                            </div>
                            <a href={post.href} className="block mt-2">
                              <p className="text-xl font-semibold text-primary">
                                {post.title}
                              </p>
                              <p className="mt-3 text-base text-primary-light">
                                {post.description}
                              </p>
                            </a>
                          </div>
                          <div className="mt-6 flex items-center">
                            <div className="flex-shrink-0">
                              <a href={post.author.href}>
                                <span className="sr-only">
                                  {post.author.name}
                                </span>
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={post.author.imageUrl}
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-primary-light">
                                <a
                                  href={post.author.href}
                                  className="text-primary hover:underline"
                                >
                                  {post.author.name}
                                </a>
                              </p>
                              <div className="flex space-x-1 text-sm text-primary-light">
                                <time dateTime={post.datetime}>
                                  {post.date}
                                </time>
                                <span aria-hidden="true">&middot;</span>
                                <span>{post.readingTime} read</span>
                              </div>
                            </div>
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
    </>
  )
}

export default Blogs
