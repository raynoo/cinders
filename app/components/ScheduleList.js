import React, {Component, PropTypes} from 'react';
import {ListView, Text, TouchableOpacity, View} from 'react-native';
import styles from '../styles';

const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class ScheduleList extends Component {

  render() {
    const schedule = dataSource.cloneWithRows(this.props.schedule);

    return (
      <ListView
        dataSource={schedule}
        renderRow={(talksForDay) => {
          return (
            <View>
              <Text style={styles.h1}>{talksForDay.date}</Text>
              {
                talksForDay.talks.map((talk, index) => { return (
                  <View key={index} style={styles.talkContainer}>
                    <TouchableOpacity onPress={() => this.props.handleSchedulePress(talk)}>
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