import React from 'react'
import styles from './button.module.css'

const Button = ({onClick, children}) => {
  return (
    <button className={`${styles.myText} btn-primary`} onClick={onClick}>{children}</button>
  )
}

export default Button