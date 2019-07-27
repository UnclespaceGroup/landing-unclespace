import React, { useState } from 'react'
import s from './ServiceText.module.scss'
import { Waypoint } from 'react-waypoint'
import { Button } from '../MiniBlocks/MiniBlocks'

const ServiceText = ({title, items, theme, to}) => {
  const [active, setActive] = useState(false)
  return (
    <Waypoint
      onEnter={() => {setActive(true) }}
      onLeave={() => {setActive(false)}}
    >
      <div className={active ? s.wrapper__active : s.wrapper}>
        <div className={s[theme]}>
          <div className={s.title}>{title}</div>
          <ul>
            {
              items && items.map((item, key) => {
                return (
                  <li key={key}>{item}</li>
                )
              })
            }
          </ul>
        </div>
        {to && <Button to={to} >Перейти</Button>}
      </div>
    </Waypoint>
  )
}
ServiceText.defaultProps = {
  theme: 'black'
}
export default React.memo(ServiceText)
