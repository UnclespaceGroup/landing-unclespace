import React, { Component } from 'react'
import s from './MainPageMobile.module.scss'
import Layout from '../../components/Grid/LayoutMobile'
import MainBanner from '../../components/MainBanner/MainBannerMobile'
import ServiceCardBlock from '../../components/ServiceCardBlock/ServiceCardBlockMobile'
import AdvantagesBlock from '../../components/AdvantagesBlock/AdvantagesBlockMobile'
import { Waypoint } from 'react-waypoint'
import FeedbackBlock from '../../components/FeedbackBlock/FeedbackBlockMobile'
import Rectangles from '../../components/Rectangles/RectanglesMobile'
import Header from '../../components/Header/HeaderMobile'

const items = [
  {posX: 5, posY: 10}, {posX: 20, posY: 30}, {posX: 40, posY: 50}, {posX: 95, posY: 55}, {
    posX: -10,
    posY: 60
  }, {posX: 65, posY: 20}, {posX: 65, posY: 90}
]

class MainPage extends Component {
  state = {
    whiteBackground: true
  }

  render () {
    const {whiteBackground} = this.state
    return (
      <div className={whiteBackground ? s.container__white : s.container}>
        <Header />
        <MainBanner />
        <Rectangles {...{items}}>
          <ServiceCardBlock />
          <Layout>
            <Waypoint
              scrollableAncestor={window}
              topOffset='60%'
              bottomOffset='60%'
              onEnter={(this.changeBackground(false))}
              onLeave={this.changeBackground(true)}
            >
              <div>
                <AdvantagesBlock />
              </div>
            </Waypoint>
          </Layout>
          <FeedbackBlock />
        </Rectangles>
      </div>
    )
  }

  changeBackground = current => () => {
    this.setState({whiteBackground: !!current})
  }
}

export default MainPage
