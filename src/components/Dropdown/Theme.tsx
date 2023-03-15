import { Fragment, useEffect, useMemo, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
  ChevronDownIcon,
  CheckIcon,
  LightBulbIcon,
  MoonIcon
} from '@heroicons/react/24/solid'
import Text from '../twin/Text'
import { useDispatch, useSelector } from 'react-redux'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ThemeDropdown() {
  const items = [
    {
      name: 'Light',
      value: 'light',
      icon: LightBulbIcon
    },
    {
      name: 'Dark',
      value: 'dark',
      icon: MoonIcon
    },
    {
      name: 'CyberPunk',
      value: 'cyberpunk',
      icon: MoonIcon
    }
  ]

  const check = items
  const themeCheck = useSelector((state: any) => state.theme)
  const selectedObj = check && check.find((v) => v.value == themeCheck)

  const name = useMemo(() => {
    return selectedObj ? selectedObj?.name : 'Light'
  }, [selectedObj, check])
  const [selected, setSelected] = useState(
    selectedObj?.name ? selectedObj?.name : 'light'
  )
  useEffect(() => {
    setSelected(name)
  }, [name])
  const Icon = selected == 'Light' ? LightBulbIcon : MoonIcon
  const dispatch = useDispatch()
  const webVersion = useSelector((state: any) => state.web)
  const convertTheme = (value: string) => {
    console.log('checking_value ', value == 'light' ? 'light' : 'dark')
    dispatch({
      type: 'CHANGE_THEME',
      payload: {
        theme: value
      }
    })
  }
  return (
    <Menu as="div" className="relative inline-block w-full text-left ">
      <div>
        <Menu.Button className="inline-flex border border-border px-3 py-2 rounded-md">
          <Icon className="mt-1 text-primary mr-2 h-4 w-4" />
          <Text>{selected}</Text>
          <ChevronDownIcon
            className={`-mr-1 text-primary mt-0.5 ml-2 h-4 w-4`}
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
        <Menu.Items
          className={` ${
            webVersion == 2 ? '-top-32' : ''
          } absolute bg-background max-h-[163px] overflow-y-auto  right-0 z-50 mt-2 w-56  backdrop-blur-lg origin-top-right border border-border rounded-main text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <div className="py-1">
            {check &&
              check.map((item: any) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <div
                      onClick={() => {
                        convertTheme(item.value)
                        setSelected(item.name)
                      }}
                      className={classNames(
                        active ? 'text-white ' : 'text-white',
                        'flex px-4 py-2 text-sm bg-background  justify-between cursor-pointer'
                      )}
                    >
                      <Text>{item.name}</Text>
                      {item.name === selected && (
                        <CheckIcon className={` text-primary h-4 w-5`} />
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
