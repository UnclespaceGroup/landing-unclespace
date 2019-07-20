import React, { useState } from 'react'
import s from './ServiceTextBlock.module.scss'
import { Waypoint } from 'react-waypoint'

const ServiceTextBlock = ({title, items, theme}) => {
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
      </div>
    </Waypoint>
  )
}
ServiceTextBlock.defaultProps = {
  theme: 'black'
}
export default React.memo(ServiceTextBlock)
