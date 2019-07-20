import React from 'react'
import s from './RectanglesMobile.module.scss'

const Rectangles = ({items, children}) => {
  return (
    <div className={s.container}>
    {
      items && items.map(({posX, posY}, key) => {
        return <div key={key} className={s.item} style={{ left: `${posX}%`, top: `${posY}%` }} />
      })
    }
      {children}
    </div>
  )
}
export default Rectangles
