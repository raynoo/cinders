import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';

export default class TalkDetail extends React.Component {

  render() {
    const talk = this.props.talk;

    return (
      <View style={styles.talkContainer}>
        <Text style={styles.h2}>{talk.title}</Text>
        {talk.description && <Text style={styles.p}>{talk.description}</Text>}
        <Text style={styles.p}>by {talk.speaker}</Text>
      </View>
    );
  }
}

TalkDetail.PropTypes = {
  talk: PropTypes.object.isRequired
}
