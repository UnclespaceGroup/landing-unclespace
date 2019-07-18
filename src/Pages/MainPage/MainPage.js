import React from 'react'
import s from './MainPage.module.scss'
import Layout from '../../components/Grid/Layout';
import MainBanner from '../../components/MainBanner/MainBanner';
import ServiceCardBlock from '../../components/ServiceCardBlock/ServiceCardBlock';

const MainPage = () => {
  return (
    <div className={s.container}>
      <MainBanner />
      <Layout >
        <ServiceCardBlock />
      </Layout>
    </div>
  )
}
export default MainPage
