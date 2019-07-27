import React from 'react'
import s from './MainBannerMobile.module.scss'
import { IconLine } from '../../../../components/MiniBlocks/MiniBlocks'
import Layout from '../../../../components/Grid/LayoutMobile'

const MainBanner = (props) => {
  return (
    <div className={s.container}>
      <Layout>
        <div className={s.title}>Поможем сделать бизнес в интернете</div>
      </Layout>
      <div className={s.social}><IconLine /></div>
    </div>
  )
}
export default MainBanner
