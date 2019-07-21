import React from 'react'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className={s.container}>
      <div className={s.flex}>
        <Link to={'/'} className={s.logo}>UncleSpace</Link>
        <div>
          <div className={s.flex}>
            <Link to={'/some'} className={s.item}>Наши услуги</Link>
            <Link to={'/some'} className={s.item}>Заполнить бриф</Link>
            <a href={'tel:89042370267'} className={s.item}><b>8(904) 237-02-67</b></a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
