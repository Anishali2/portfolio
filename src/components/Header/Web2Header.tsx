import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Web2Header = () => {
  const path = useRouter().asPath
  const links = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Blogs',
      path: '/blogs'
    },
    {
      name: 'Work',
      path: '/projects'
    },
    {
      name: 'Contact',
      path: '/contact-us'
    }
  ]
  return (
    <div className="max-w-7xl mx-auto bg-background w-fit border border-t-0 border-border rounded-b-2xl">
      <ul className="flex space-x-3 p-5 text-primary ">
        {links.map((v) => {
          return (
            <li
              key={v.name}
              className={
                path == v.path ? 'bg-primary text-background underline' : ''
              }
            >
              <Link href={v.path}>{v.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Web2Header
