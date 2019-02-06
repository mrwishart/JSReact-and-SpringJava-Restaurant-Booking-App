import React, { Component, Fragment } from 'react';
import BookingsList from '../components/bookings/BookingsList.js';
import BookingTableHeader from '../components/bookings/BookingTableHeader.js';
import BookingTable from '../components/bookings/BookingTable.js';
import BookingDatePicker from '../components/bookings/BookingDatePicker.js'
import Request from '../helpers/requestHelper.js';


class BookingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tables: [],
      date: null
    }

    this.dateHandler = this.dateHandler.bind(this);
  }

  componentDidMount() {
    let request = new Request()
    request.get('tables').then(data => {
      this.setState({ tables: data._embedded.tables, date: this.createDateString() });
    })
  }

  createDateString() {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    return (yyyy + '-' + mm + '-' + dd);
  }

  dateHandler(selectedDate) {
    if (selectedDate !== "") {
      this.setState({ date: selectedDate });
    } else {
    this.setState({ date: this.state.date})
    }
  }


  render() {
    return (
      <Fragment>
        <h1>Bookings</h1>
        <BookingDatePicker updateContainer={this.dateHandler} dateDisplay={this.state.date}/>
        <table>
          <BookingTableHeader />
          <BookingTable tables={this.state.tables} date={this.state.date} />
        </table>
      </Fragment>
    );
  }
}

export default BookingsContainer;
