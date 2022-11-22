import data from '../database/data.json'
import Link from 'next/link'
import { useState } from 'react'

const Header = ({ ...props }) => {
  const [toggle, setToggle] = useState(false)
  const { navbar } = data.header

  const handleToggle = () => setToggle(val => !val)

  console.log('toggle', toggle)

  return (
    <header {...props} className="text-gray-600 body-font">
      <div className="xxl:container xl:container xs:justify-between sm:justify-between md:justify-between lg:container md:mx-1 mx-auto flex flex-wrap p-5 flex-row md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">{navbar.logo}</span>
        </a>
        <nav className="xs:hidden sm:hidden md:hidden block lg:mr-auto xl:mr-auto xxl:mr-auto 3xl:mr-auto ml-4 md:ml-4 md:py-1 pl-4 md:pl-4 lg:border-l 3xl:border-l xl:border-l xxl:border-l  xl:border-gray-400 xxl:border-gray-400 md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          {
            navbar.links.map((link, index) => <Link href="" key={index} className="mr-5 hover:text-gray-900">{link}</Link>)
          }
        </nav>
        <button className="xs:hidden sm:hidden md:hidden inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 mt-0 md:mt-0">
          <Link className='inline-flex items-center' href='/contact'>
            Contact
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </button>
        <div className='relative'>
          <button onClick={handleToggle} className='hidden xs:block sm:block md:block w-10 h-10 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      {toggle ? <div className="fixed bg-gray-100 left-0 top-0 z-50 h-screen w-screen">
        <div className="h-full z-50 overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="xxl:container xl:container xs:justify-end sm:justify-end md:justify-end lg:container mx-6 sm:mx-2 xs:mx-1 flex flex-wrap p-5 flex-row md:flex-row items-center">
            <button onClick={handleToggle} className='w-10 h-10 rounded-full inline-flex items-center justify-center bg-indigo-500 text-gray-400'>
              <i className="text-white fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div> : null}
    </header>
  )
}

export default Header