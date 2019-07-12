import React from 'react'
import s from './MainPage.module.scss'
import Layout from '../../components/Grid/Layout';
import MainBanner from '../../components/MainBanner/MainBanner';

const MainPage = () => {
  return (
    <div className={s.container}>
      <MainBanner />
      <Layout >
        
      </Layout>
    </div>
  )
}
export default MainPage
