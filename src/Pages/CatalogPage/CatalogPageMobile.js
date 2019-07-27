import React from 'react'
import s from './CatalogPageMobile.module.scss'
import FeedbackBlock from '../MainPage/blocks/FeedbackBlock/FeedbackBlockMobile'
import Layout from '../../components/Grid/LayoutMobile'
import Catalog from './blocks/Catalog/CatalogMobile'
import Padding from '../../components/Grid/Padding'

class CatalogPage extends React.Component {
  render () {
    return (
      <div className={s.container}>
        <Layout>
          <Padding mobile={70} />
          <h1>Каталог услуг <span>и продуктов</span></h1>
          <Padding mobile={50} />
          <Catalog />
        </Layout>
        <Padding mobile={50} />
        <FeedbackBlock />
      </div>
    )
  }
}

export default CatalogPage
