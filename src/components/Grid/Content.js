import React from 'react'
import s from './Grid.module.scss'

const Content = ({children, width}) => {
  return (
    <div className={s.content} style={{ width: `${width}%` }}>
      {children}
    </div>
  )
}
export default Content
