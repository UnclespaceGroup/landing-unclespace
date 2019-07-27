import React from 'react'
import CatalogItem from '../../../../components/CatalogItem/CatalogItemMobile'
import Padding from '../../../../components/Grid/Padding'
import { items } from './data'

const Catalog = () => {
  return (
    <div>
      {
        items.map((item, key) => <div key={key}>
          <CatalogItem {...item} />
          <Padding mobile={100} />
        </div>)
      }
    </div>
  )
}
export default Catalog
