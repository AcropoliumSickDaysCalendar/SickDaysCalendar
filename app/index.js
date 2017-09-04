
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Calendar from 'react-native-calendar-datepicker';
import Moment from 'moment';


export default class SickDayApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Acropolium Sick Days Application!
        </Text>
        <Calendar
    //onChange={(date) => this.setState({date})}
    //selected={this.state.date}
    // We use Moment.js to give the minimum and maximum dates.
    minDate={Moment().startOf('day')}
    maxDate={Moment().add(10, 'years').startOf('day')}
    />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
