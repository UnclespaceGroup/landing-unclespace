import React from 'react'
import s from './MainBanner.module.scss'
import Layout from '../Grid/Layout';

const MainBanner = (props) => {
    return (
        <div className={s.container}>
          <Layout>
            <div className={s.title}>Поможем сделать бизнес в интернете</div>
          </Layout>
        </div>
    )
}
export default MainBanner
