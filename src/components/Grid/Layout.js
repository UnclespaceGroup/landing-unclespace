import React from 'react'
import s from './Grid.module.scss'

const Layout = ({ children }) => {
    return (
        <div className={s.layout}>
            {children}
        </div>
    )
}
export default Layout
