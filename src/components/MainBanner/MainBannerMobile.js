import React from 'react'
import s from './MainBanner.module.scss'
import Layout from '../Grid/LayoutMobile';
import { IconLine } from '../MiniBlocks/MiniBlocks'

const MainBanner = (props) => {
    return (
        <div className={s.container}>
          <Layout>
            <div className={s.title}>Поможем сделать бизнес в интернете</div>
            <div className={s.social}><IconLine /></div>
          </Layout>
        </div>
    )
}
export default MainBanner
