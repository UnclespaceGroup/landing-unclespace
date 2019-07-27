import React from 'react'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'
import { ABOUT, CATALOG, MAIN_PAGE } from '../../Pages/URLs'

const Header = (props) => {
  return (
    <div className={s.container}>
      <div className={s.flex}>
        <Link to={MAIN_PAGE} className={s.logo}>UncleSpace</Link>
        <div>
          <div className={s.flex}>
            <Link to={CATALOG} className={s.item}>Каталог услуг</Link>
            <Link to={'/some'} className={s.item}>Заполнить бриф</Link>
            <Link to={ABOUT} className={s.item}>О нас</Link>
            <a href={'tel:89042370267'} className={s.item}><b>8(904) 237-02-67</b></a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
