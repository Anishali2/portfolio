import { Fragment, useEffect, useMemo, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function LanguageDropdown({
  items,
  small = false
}: {
  items: any[]
  small?: boolean
}) {
  const rout = useRouter()

  const check = items
  const queryParams = rout.query
  const selectedObj =
    check &&
    check.find(
      (v) => v.value.toString() == queryParams[items[0].params]?.toString()
    )

  const name = useMemo(() => {
    return selectedObj ? selectedObj?.name : check[0]?.name
  }, [selectedObj, check])
  const [selected, setSelected] = useState(
    selectedObj?.name ? selectedObj?.name : check[0].name
  )
  useEffect(() => {
    setSelected(name)
  }, [name])

  return (
    <Menu as="div" className="relative inline-block w-full text-left ">
      <div>
        <Menu.Button
          className={`inline-flex  justify-between border border-secondary rounded-main  ${
            small ? 'px-2 py-2.5 text-xs' : 'px-6 py-3 text-sm'
          }   font-medium w-full text-white shadow-sm focus:outline-none focus:ring-1 focus:ring-transparent focus:ring-offset-1 focus:ring-offset-transparent`}
        >
          {selected}

          <ChevronDownIcon
            className={`${
              small ? '-mr-1 ml-2 mt-1 h-2 w-3' : '-mr-1 mt-0.5 ml-2 h-4 w-4'
            }`}
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute max-h-[163px] overflow-y-auto right-0 z-50 mt-2 w-56 bg-[#212428] backdrop-blur-lg origin-top-right border border-secondary rounded-main text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {check &&
              check.map((item: any) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <div
                      onClick={() => {
                        setSelected(item.name)
                      }}
                      className={classNames(
                        active ? ' text-white bg-secondary' : 'text-white',
                        'flex px-4 py-2 text-sm  justify-between cursor-pointer'
                      )}
                    >
                      {item.name}
                      {item.name === selected && (
                        <CheckIcon className={`h-4 w-5`} />
                      )}
                    </div>
                  )}
                </Menu.Item>
              ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
