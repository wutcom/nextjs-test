import { Fragment } from 'react'
//import { Disclosure } from '@headlessui/react'
//import { Disclosure } from '@headlessui/react'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Expense', href: '/expense', current: false },
  { name: 'Users', href: '/users', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

export default function Navbar() {
  return (
        <>
        <header>
        <nav  className="bg-gray-800 ">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  
                  <p className={'text-white px-5 text-sm font-medium'}>BiscPortal</p>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >test
                  <span className="sr-only">View notifications</span>
                </button>
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >Sign in
                  <span className="sr-only">View notifications</span>
                </button>
                
              </div>
            </div>
          </div>

         </nav>     
        </header>         

        </>
   
  )
}
