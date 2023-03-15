import { Disclosure, Transition } from '@headlessui/react'

export default function Lists() {
  return (
    <div className="w-full pt-17">
      <div className="mx-auto w-full transition-all ease-in-out border border-border rounded-2xl durat  p-1">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="text-primary text-2xl">
                E-commerce Application
              </Disclosure.Button>

              <Transition
                show={!open}
                enter={`transition duration-100 ease-out`}
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave={`transition duration-100 ease-out`}
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                {/*
Don't forget to add `static` to your `Disclosure.Panel`!
*/}
                <Disclosure.Panel className="text-primary-light flex justify-between">
                  <p>Text</p>
                  <p>Img</p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
