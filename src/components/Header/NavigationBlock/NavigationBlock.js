import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationBlock.css'

const items = [
  { name: 'Проектный офис', to: '/' },
  { name: 'Курсы', to: '/courses' },
]

const NavigationBlock = ({ actionMenu, color }) => (
  <nav className="nav">
    <ul>
      {items.map(item => (
        <li key={item.name}>
          <NavigationItem to={item.to} name={item.name} actionMenu={actionMenu} color={color} />
        </li>
      ))}
    </ul>
  </nav>
)

export default NavigationBlock
