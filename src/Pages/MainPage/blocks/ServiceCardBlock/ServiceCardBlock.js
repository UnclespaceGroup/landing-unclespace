import React from 'react'
import s from './ServiceCardBlock.module.scss'
import ServiceCard from '../../../../components/ServiceCard/ServiceCard'
import cn from 'classnames'
import { Waypoint} from 'react-waypoint'
import ServiceTextBlock from '../../../../components/ServiceText/ServiceText';
import { items } from './data'
import Padding from '../../../../components/Grid/Padding'
import { CATALOG } from '../../../URLs'


class ServiceCardBlock extends React.PureComponent {
  state = {
    position: 0
  }
  render () {
    const { position } = this.state
    const { theme } = this.props
    return (
      <>
        <Padding desktop={80} />
        <h2>Предлагаем следующие <span>услуги</span></h2>
      <div className={s.container}>
        <div className={s.sticky}>
          <div className={cn(s.cards, s['location_' + position])}>
            <div className={s.card_1} >
              <ServiceCard {...items[0]} />
            </div>
            <div className={s.card_2} >
              <ServiceCard {...items[1]} />
            </div>
            <div className={s.card_3} >
              <ServiceCard {...items[2]} />
            </div>
          </div>

        </div>
        <div className={s.area}>
        <div className={s.area_item} />
          {
            items.map(({title, items}, key) => {
              const first = key === 1
              const last = key === items.length
              // const active = position === null
              //   ? first || last // show first and last block if has
              //   : key === position
              return (
                <Waypoint
                  topOffset='60%'
                  bottomOffset='20%'
                  key={key}
                  onLeave={this.handelOnLeave(key + 1, first, last)}
                  onEnter={this.handleOnEnter(key + 1)} >
                  <div className={s.area_item} >
                    <ServiceTextBlock {...{ title, items, theme, to: CATALOG }} />
                  </div>
                </Waypoint>
              )
            })
          }
        </div>
      </div>
        <Padding desktop={80} mobile={56} />
      </>
    )
  }
  handleOnEnter = (i) => () => {
    const { position } = this.state

    if (position !== i) this.setState({ position: i })
  }
  handelOnLeave = (i, first, last) => ({ currentPosition }) => {
    switch (currentPosition) {
      case Waypoint.above:
        if (!last) this.setState({ position: i + 1 }) // keep last block stay active when scroll down
        break
      case Waypoint.below:
        if (!first) this.setState({ position: i - 1 }) // keep first block stay active when scroll up
        break
      default:
        break
    }
  }
}
export default ServiceCardBlock
