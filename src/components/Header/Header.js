import React from 'react'
import Logo from '../Logo/Logo'
import NavigationBlock from './NavigationBlock/NavigationBlock'
import './Header.css'

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container header_con">
          <div className="header_logo">
            <Logo />
          </div>
          <div className="header_nav">
            <NavigationBlock />
          </div>
          <div className="header_contacts">
            <a href="#feedback">Заказать обратный звонок</a>
            <a href={`tel:${+996500000000}`}>+996 (500) 000 000</a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
