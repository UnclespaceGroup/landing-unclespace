import React, { useState } from 'react'
import s from './MiniBlocks.module.scss'
import im1 from '../../static/icons/vk-black.svg'
import im2 from '../../static/icons/gmail-logo.svg'
import im3 from '../../static/icons/instagram.svg'
import { Link } from 'react-router-dom'

const icons = [
  {
    href: 'https://vk.com/unclespace',
    icon: im1
  },
  {
    href: 'https://vk.com/unclespace',
    icon: im2
  },
  {
    href: 'https://vk.com/unclespace',
    icon: im3
  }
]
export const IconLine = () => {
  return (
    <div className={s.icons}>
      {
        icons.map(({href, icon}, key) =>
          <a href={href} key={key} target='__blank' style={{backgroundImage: `url(${icon})`}} className={s.icons__item} > </a>
        )
      }
    </div>
  )
}

export const Line = ({ color, width }) => {
  return (
    <div className={s.line} style={{ borderColor: color, borderWidth: width }} />
  )
}
export const Button = ({ children, to, color = 'default', ...input }) => {
  return to
    ? <Link to={to} className={s[color]} >{children}</Link>
    : <div className={s[color]} {...input} >{children}</div>
}

export const WithTimeout = ({ children, timeout = 500 }) => {
  const [ active, setActive ] = useState(false)
  setTimeout(() => {
    setActive(true)
  }, timeout)
  return <div className={active ? s.withTimeout__active : s.withTimeout }>{children}</div>
}
