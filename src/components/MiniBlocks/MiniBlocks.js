import React from 'react'
import s from './MiniBlocks.module.scss'
import im1 from '../../static/icons/vk-black.svg'
import im2 from '../../static/icons/gmail-logo.svg'
import im3 from '../../static/icons/instagram.svg'

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
