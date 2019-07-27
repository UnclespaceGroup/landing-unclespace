import React from 'react'
import s from './Grid.module.scss'

const Row = ({ children }) => {
    return (
        <div className={s.row}>
            {children}
        </div>
    )
}
export default Row
