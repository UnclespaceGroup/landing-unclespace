import React from 'react'
import s from './Page404Mobile.module.scss'
import Layout from '../../components/Grid/LayoutMobile'
import Header from '../../components/Header/HeaderMobile'

const Page404 = () => {
  return (
    <div className={s.container}>
      <Header />
      <Layout>
        <div className={s.title}>Упс</div>
        <div className={s.text}>
          <p>Пока такой страницы не существует</p>
          <p>Но скоро она появиться :))</p>
        </div>
      </Layout>
    </div>
  )
}
export default Page404
