import React, { Component } from 'react';
import './App.css';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'moment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
    };
  };

  render() {
    return (
      <div className="App">
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />
        <Result 
          startDate={this.state.startDate} 
          endDate={this.state.endDate}
        />
        <Fact
          startDate={this.state.endDate != null && this.state.startDate}
        />
      </div>
    );
  }
}

class Result extends Component {

  render(){
    const startDate = this.props.startDate
    const endDate = this.props.endDate

    // Calculate amount of days between the chosen dates
    if (startDate == null || endDate == null) {
      return null
    }
    let numOfDays = endDate.diff(startDate, 'days')

    let startYear = startDate.isLeapYear()
    let endYear = endDate.isLeapYear()

    // Show if the chosen start/end dates belong to the leap year
    let leap = ""
    if (startYear && endYear) {
      leap = "Start and End dates are"
    } else if (startYear) {
      leap = "Start date is"
    } else if (endYear) {
      leap = "End date is"
    }

    // Calculate the number of Mondays between two chosen dates
    const isoWeekday = 1
    var daysToAdd = ((7 + isoWeekday) - startDate.isoWeekday()) % 7
    var nextMonday = startDate.clone().add(daysToAdd, 'days')
    if (nextMonday.isAfter(endDate)) {
      return null
    }
    var weeksBetween = endDate.diff(nextMonday, 'weeks');

    return(
      <div className="Result">
        <h3>The number of days between the chosen date range is {numOfDays}</h3>
        {leap !== "" &&
          <h3>{leap} part of leap year</h3>
        }
        <h3> The number of Mondays between the chosen dates is {weeksBetween + 1} </h3>
      </div>
    )
  }
}

class Fact extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" }
  }

  componentDidUpdate(prevProps) {
    const startDate = this.props.startDate
    if (prevProps.startDate === startDate) {
      return
    }

    if (startDate == null) {
      this.setState({text: ""})
      return
    }
    var factDate = startDate.format("MM/DD")

    fetch(`https://numbersapi.com/${factDate}/date`)
    .then (results => {
      return results.text()
    }).then (factText => {
      this.setState({text: factText})
    })
  }

  render() {
    return (
      <div className="Fact">
        <h3>{this.state.text}</h3>
      </div>
    )
  }
}

export default App;
