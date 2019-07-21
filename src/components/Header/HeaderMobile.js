import React from 'react'
import s from './HeaderMobile.module.scss'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className={s.container}>
      <div className={s.flex}>
        <Link to={'/'} className={s.logo}>UncleSpace</Link>
        {/*{ false && <div>*/}
        {/*  <div className={s.flex}>*/}
        {/*    <div className={s.item}>Наши услуги</div>*/}
        {/*    <div className={s.item}>Заполнить бриф</div>*/}
        {/*    <div className={s.item}><b>8(904) 237-02-67</b></div>*/}
        {/*  </div>*/}
        {/*</div>}*/}
      </div>
    </div>
  )
}
export default Header
