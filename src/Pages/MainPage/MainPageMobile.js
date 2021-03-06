import React, { Component } from 'react'
import s from './MainPageMobile.module.scss'
import Layout from '../../components/Grid/LayoutMobile'
import MainBanner from './blocks/MainBanner/MainBannerMobile'
import ServiceCardBlock from './blocks/ServiceCardBlock/ServiceCardBlockMobile'
import AdvantagesBlock from './blocks/AdvantagesBlock/AdvantagesBlockMobile'
import { Waypoint } from 'react-waypoint'
import FeedbackBlock from './blocks/FeedbackBlock/FeedbackBlockMobile'
import Rectangles from '../../components/Rectangles/RectanglesMobile'

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
        <MainBanner />
        <Rectangles {...{items}}>
          <ServiceCardBlock theme={whiteBackground ? 'black' : 'white'} />
          <Layout>
            <Waypoint
              scrollableAncestor={window}
              topOffset='60%'
              bottomOffset='60%'
              onEnter={(this.changeBackground(false))}
              onLeave={this.changeBackground(true)}
            >
              <div>
                <AdvantagesBlock theme={whiteBackground ? 'black' : 'white'} />
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
