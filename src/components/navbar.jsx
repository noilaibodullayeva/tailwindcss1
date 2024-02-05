import { styles } from '../util/style'
import { navigationLinks } from '../util/constantas'
import { logo } from '../assets'
import "./navbar.css"

export default function Navbar() {
  return (
    <div className={`w-full  py-6 ${styles.flexBetween}`}>
      <img src={logo} alt="logo" className='w-[130px] h-[35px] logo' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1 list'>
        {navigationLinks.map((nav, idx) => (
          <li
            key={nav.id}
            className=
            {`font-montseratt font-normal cursor-pointer text-[16px] text-white 
          ${idx === navigationLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          >
            {nav.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
