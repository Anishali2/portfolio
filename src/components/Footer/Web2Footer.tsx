import React from 'react'
import ThemeDropdown from '../Dropdown/Theme'
import WebDropdown from '../Dropdown/Web'
import styles from '@/styles/Home.module.css'

const Web2Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className="space-x-7 flex">
          <div className="w-fit">
            <ThemeDropdown />
          </div>
          <div className=" w-fit">
            <WebDropdown />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Web2Footer
