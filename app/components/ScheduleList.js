import React, {Component, PropTypes} from 'react';
import {ListView, Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles';
import moment from 'moment';

const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const dateFormat = 'MMM DD, hh:mm a';

export default class ScheduleList extends Component {

  render() {
    const schedule = dataSource.cloneWithRows(this.props.schedule);

    return (
      <ListView
        dataSource={schedule}
        renderRow={(talksForDay) => {
          const talkDate = moment(talksForDay.date);
          const talkDateFormatted = talkDate.format(dateFormat);
          const talkDateClasses = [styles.dayScheduleContainer];
          if (moment().diff(talkDate) > 0) {
            talkDateClasses.push(styles.past);
          }

          return (
            <View style={talkDateClasses}>
              <Text style={[styles.h1, styles.bottomBorderDark]}>{talkDateFormatted}</Text>
              {
                talksForDay.talks.map((talk, index) => { return (
                  <View key={index} style={styles.talkContainer}>
                    <TouchableOpacity onPress={() => this.props.handleSchedulePress(talk, talkDateFormatted)}>
                      <Text style={styles.h2}>{talk.title}</Text>
                      <Text style={styles.p}>by {talk.speaker}</Text>
                    </TouchableOpacity>
                  </View>
                )})
              }
            </View>
          )
        }}
      />
    );
  }
}

ScheduleList.PropTypes = {
  handleSchedulePress: PropTypes.func.isRequired,
  schedule: PropTypes.array.isRequired
}
