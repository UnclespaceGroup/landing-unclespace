import React from 'react'
import s from './CatalogPage.module.scss'
import Header from '../../components/Header/Header'
import FeedbackBlock from '../MainPage/blocks/FeedbackBlock/FeedbackBlock'
import Layout from '../../components/Grid/Layout'
import Catalog from './blocks/Catalog/Catalog'
import Padding from '../../components/Grid/Padding'
import Row from '../../components/Grid/Row'
import Content from '../../components/Grid/Content'

class CatalogPage extends React.Component {
  render () {
    return (
      <div className={s.container}>
        <Header />
        <Layout>
          <Padding desktop={100} />
          <h1>Каталог услуг <span>и продуктов</span></h1>
          <Padding desktop={70} />
          <Row>
            <Content width={20} />
            <Content width={80}>
              <Catalog />
            </Content>
          </Row>
        </Layout>
        <Padding desktop={100} />
        <FeedbackBlock />
      </div>
    )
  }
}

export default CatalogPage
