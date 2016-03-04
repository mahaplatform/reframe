import React from 'react'
import ReactDOM from 'react-dom'
import Feed from 'feed'
import moment from 'moment'

export default class FormExamples extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      records: [
        { created_at: moment().subtract(21, 'minutes').format("YYYY-MM-DDTHH:mm:ss"), subject: { photo: 'http://lorempixel.com/35/35/people/5', link: '/admin/users/1234', text: 'Greg Kops' }, story: "added {object1} to {object2}", object1: { link: '/admin/recipe/1234', entity: 'recipe', text: 'Roasted Root Vegetables'}, object2: { link: '/admin/menu/1234', entity: 'menu', text: 'March 7, 2016 - March 14, 2016'} },
        { created_at: moment().subtract(22, 'minutes').format("YYYY-MM-DDTHH:mm:ss"), subject: { photo: 'http://lorempixel.com/35/35/people/5', link: '/admin/users/1234', text: 'Greg Kops' }, story: "added {object1} to {object2}", object1: { link: '/admin/ingredients/1234', entity: 'ingredient', text: 'Carrot'}, object2: { link: '/admin/recipe/1234', entity: 'recipe', text: 'Roasted Root Vegetables'} },
        { created_at: moment().subtract(23, 'minutes').format("YYYY-MM-DDTHH:mm:ss"), subject: { photo: 'http://lorempixel.com/35/35/people/5', link: '/admin/users/1234', text: 'Greg Kops' }, story: "added {object1} to {object2}", object1: { link: '/admin/ingredients/1234', entity: 'ingredient', text: 'Beet'}, object2: { link: '/admin/recipe/1234', entity: 'recipe', text: 'Roasted Root Vegetables'} },
        { created_at: moment().subtract(24, 'minutes').format("YYYY-MM-DDTHH:mm:ss"), subject: { photo: 'http://lorempixel.com/35/35/people/5', link: '/admin/users/1234', text: 'Greg Kops' }, story: "added {object1} to {object2}", object1: { link: '/admin/ingredients/1234', entity: 'ingredient', text: 'Potato'}, object2: { link: '/admin/recipe/1234', entity: 'recipe', text: 'Roasted Root Vegetables'} },
        { created_at: moment().subtract(25, 'minutes').format("YYYY-MM-DDTHH:mm:ss"), subject: { photo: 'http://lorempixel.com/35/35/people/5', link: '/admin/users/1234', text: 'Greg Kops' }, story: "created {object1}", object1: { link: '/admin/recipe/1234', entity: 'recipe', text: 'Roasted Root Vegetables'} },
        { created_at: moment().subtract(30, 'minutes').format("YYYY-MM-DDTHH:mm:ss"), subject: { photo: 'http://lorempixel.com/35/35/people/6', link: '/admin/users/1234', text: 'Armand Zerilli' }, story: "deleted {object1}", object1: { link: null, entity: 'recipe', text: 'Lasagna'} },
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Feed</h1>
        <Feed records={this.state.records} />
      </div>
    )
  }

}
