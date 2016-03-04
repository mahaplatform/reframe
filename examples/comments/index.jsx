import React from 'react'
import ReactDOM from 'react-dom'
import Comments from 'comments'
import Logger from 'utils/logger'
import moment from 'moment'

export default class CommentsExamples extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      records: [
        { user: { photo: 'http://lorempixel.com/35/35/people/4', full_name: 'Greg Kops' }, created_at: moment().subtract(16, 'minutes').format("YYYY-MM-DDTHH:mm:ss"), body: 'Food truck yuccie direct trade, before they sold out cold-pressed small batch humblebrag hashtag. Chambray etsy keffiyeh photo booth, iPhone chicharrones aesthetic narwhal gochujang kogi ugh street art bespoke cliche 8-bit. Flexitarian direct trade salvia kinfolk, selfies pop-up single-origin coffee.'},
        { user: { photo: 'http://lorempixel.com/35/35/people/5', full_name: 'Pat Haggerty' }, created_at: moment().subtract(22, 'minutes').format("YYYY-MM-DDTHH:mm:ss"), body: 'Food truck yuccie direct trade, before they sold out cold-pressed small batch humblebrag hashtag. Chambray etsy keffiyeh photo booth, iPhone chicharrones aesthetic narwhal gochujang kogi ugh street art bespoke cliche 8-bit. Flexitarian direct trade salvia kinfolk, selfies pop-up single-origin coffee.'},
        { user: { photo: 'http://lorempixel.com/35/35/people/4', full_name: 'Greg Kops' }, created_at: moment().subtract(25, 'minutes').format("YYYY-MM-DDTHH:mm:ss"), body: 'Food truck yuccie direct trade, before they sold out cold-pressed small batch humblebrag hashtag. Chambray etsy keffiyeh photo booth, iPhone chicharrones aesthetic narwhal gochujang kogi ugh street art bespoke cliche 8-bit. Flexitarian direct trade salvia kinfolk, selfies pop-up single-origin coffee.'},
        { user: { photo: 'http://lorempixel.com/35/35/people/6', full_name: 'Armand Zerilli' }, created_at: moment().subtract(30, 'minutes').format("YYYY-MM-DDTHH:mm:ss"), body: 'Food truck yuccie direct trade, before they sold out cold-pressed small batch humblebrag hashtag. Chambray etsy keffiyeh photo booth, iPhone chicharrones aesthetic narwhal gochujang kogi ugh street art bespoke cliche 8-bit. Flexitarian direct trade salvia kinfolk, selfies pop-up single-origin coffee.'},
        { user: { photo: 'http://lorempixel.com/35/35/people/7', full_name: 'Kath Tibbetts' }, created_at: moment().subtract(48, 'minutes').format("YYYY-MM-DDTHH:mm:ss"), body: 'Food truck yuccie direct trade, before they sold out cold-pressed small batch humblebrag hashtag. Chambray etsy keffiyeh photo booth, iPhone chicharrones aesthetic narwhal gochujang kogi ugh street art bespoke cliche 8-bit. Flexitarian direct trade salvia kinfolk, selfies pop-up single-origin coffee.'},
        { user: { photo: 'http://lorempixel.com/35/35/people/4', full_name: 'Greg Kops' }, created_at: moment().subtract(50, 'minutes').format("YYYY-MM-DDTHH:mm:ss"), body: 'Food truck yuccie direct trade, before they sold out cold-pressed small batch humblebrag hashtag. Chambray etsy keffiyeh photo booth, iPhone chicharrones aesthetic narwhal gochujang kogi ugh street art bespoke cliche 8-bit. Flexitarian direct trade salvia kinfolk, selfies pop-up single-origin coffee.'},
        { user: { photo: 'http://lorempixel.com/35/35/people/5', full_name: 'Pat Haggerty' }, created_at: moment().subtract(60, 'minutes').format("YYYY-MM-DDTHH:mm:ss"), body: 'Food truck yuccie direct trade, before they sold out cold-pressed small batch humblebrag hashtag. Chambray etsy keffiyeh photo booth, iPhone chicharrones aesthetic narwhal gochujang kogi ugh street art bespoke cliche 8-bit. Flexitarian direct trade salvia kinfolk, selfies pop-up single-origin coffee.'},
      ]
    }
  }

  render() {
    console.log(this.state.records)
    return (
      <div>
        <h1>Comments</h1>
        <div className="ui top attached segment">
          <Comments records={this.state.records} />
        </div>
      </div>
    )
  }

}
