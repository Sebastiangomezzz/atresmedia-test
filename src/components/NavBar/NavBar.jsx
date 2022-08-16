import React from 'react'
import style from './NavBar.module.css';

export const NavBar = ({children}) => {
  return (
      <div className={style.container}>           
          {children}
          
      </div>
  )
}
