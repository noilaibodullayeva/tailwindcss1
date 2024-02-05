import React from 'react'
import { styles } from './util/style'
import { Navbar } from './components'

export default function App() {
  return (
    <div className='bg-primary overflow-hidden w-full'>
      <div className={` ${styles.paddingX}  ${styles.flexCenter}`}>
        <div className={` ${styles.container}`}>
          <Navbar/>
        </div>
      </div>
    </div>
  )
}
