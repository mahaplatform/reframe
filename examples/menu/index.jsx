import React from 'react'
import ReactDOM from 'react-dom'
import Menu from 'menu'
import Logger from 'utils/logger'

export default class FormExamples extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Menu</h1>
       <Menu menu={this.getMenu()}/>
      </div>
    )
  }

  getMenu() {
    return {
      search: false,
      left: [
        {
          image: 'http://lorempixel.com/24/24',
          route: '/system/dashboard'
        },
        {
          label: 'Menu I',
          items: [
            { label: 'Item IA', route: '/1A' },
            { label: 'Item IB', route: '/IB' },
            { label: 'Item IC', route: '/IC' }
          ]
        },
        {
          label: 'Menu II',
          items: [
            { label: 'Item IIA', route: '/IIA' },
            { label: 'Item IIB', route: '/IIB' },
            { label: 'Item IIC', route: '/IIC' }
          ]
        }
      ],
      right: [
        {
          label: 'John Doe',
          image: 'http://lorempixel.com/24/24',
          items: [
            { label: 'Signout', route: '/system/signout' },
          ]
        }
      ]
    }
  }

}
