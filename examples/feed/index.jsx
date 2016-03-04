import React from 'react'
import ReactDOM from 'react-dom'
import Feed from 'feed'
import moment from 'moment'

export default class FormExamples extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      records: [
        { created_at: moment().subtract(21, 'minutes').format("YYYY-MM-DDTHH:mm:ss"), subject: { link: '/admin/users/1234', full_name: 'Greg Kops' }, story: "added {object1} to {object2}", object1: { link: '/admin/recipe/1234', description: 'the recipe', text: 'Roasted Root Vegetables'}, object2: { link: '/admin/menu/1234', description: 'the menu', text: 'March 7, 2016 - March 14, 2016'} },
        { created_at: moment().subtract(22, 'minutes').format("YYYY-MM-DDTHH:mm:ss"), subject: { link: '/admin/users/1234', full_name: 'Greg Kops' }, story: "added {object1} to {object2}", object1: { link: '/admin/ingredients/1234', description: 'the ingredient', text: 'Carrot'}, object2: { link: '/admin/recipe/1234', description: 'the recipe', text: 'Roasted Root Vegetables'} },
        { created_at: moment().subtract(23, 'minutes').format("YYYY-MM-DDTHH:mm:ss"), subject: { link: '/admin/users/1234', full_name: 'Greg Kops' }, story: "added {object1} to {object2}", object1: { link: '/admin/ingredients/1234', description: 'the ingredient', text: 'Beet'}, object2: { link: '/admin/recipe/1234', description: 'the recipe', text: 'Roasted Root Vegetables'} },
        { created_at: moment().subtract(24, 'minutes').format("YYYY-MM-DDTHH:mm:ss"), subject: { link: '/admin/users/1234', full_name: 'Greg Kops' }, story: "added {object1} to {object2}", object1: { link: '/admin/ingredients/1234', description: 'the ingredient', text: 'Potato'}, object2: { link: '/admin/recipe/1234', description: 'the recipe', text: 'Roasted Root Vegetables'} },
        { created_at: moment().subtract(25, 'minutes').format("YYYY-MM-DDTHH:mm:ss"), subject: { link: '/admin/users/1234', full_name: 'Greg Kops' }, story: "created {object1}", object1: { link: '/admin/recipe/1234', description: 'the recipe', text: 'Roasted Root Vegetables'} },
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
