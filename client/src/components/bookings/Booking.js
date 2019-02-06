import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import Request from '../../helpers/requestHelper.js';
import BookingAddItemForm from './BookingAddItemForm.js';

export default class Booking extends Component {

  constructor(props){
    super(props);

    this.state = {
      id: this.props.match.params.id,
      booking: [],
      customer: []
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(){
    let request = new Request();
    const url = `${this.state.id}`;
    request.delete(url).then(() => {
      window.location = '/bookings';
    })
  }

  handleOrderedItemPost(orderedItem){
    console.log(orderedItem);
    let request = new Request();
    request.post('/orderedItems', orderedItem).then(() => {
    })
  }

  componentDidMount(){
    let request = new Request()
    const url = `${this.props.match.params.id}` + "?projection=embedCustomer";
    request.get(url).then(data => {
      this.setState({booking: data, customer: data.customer});
    })
  }

  render(){
  return (
    <Fragment>
    <ul>
      <li>Customer: {this.state.customer.firstName} {this.state.customer.lastName}</li>
      <li>Date: {this.state.booking.date}</li>
      <li>Time: {this.state.booking.time}</li>
      <li>Number Of People: {this.state.booking.headCount}</li>
      <button onClick={this.handleDelete}>Delete Booking</button>
    </ul>
    <BookingAddItemForm booking={this.state.booking} handleOrderedItemPost={this.handleOrderedItemPost} />
    </Fragment>
  );
}
}
