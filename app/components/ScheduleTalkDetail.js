import React, {Component, PropTypes} from 'react';
import {Linking, Text, TouchableOpacity, View, WebView} from 'react-native';
import styles from '../styles';

export default class ScheduleTalkDetail extends Component {

  render() {
    const talk = this.props.talk;

    return (
      <View style={[styles.talkContainer, styles.withTopMargin]}>
        <View style={{flex: 3}}>
          <Text style={styles.h1}>{talk.title}</Text>
          <Text style={styles.p}>by {talk.speaker}</Text>
        </View>
        <View style={[styles.withTopMargin, {flex: 1}]}>
          {talk.resources && talk.resources.youtube &&
            <TouchableOpacity>
              <Text
                style={[styles.p, styles.withTopMargin, styles.resources]}
                onPress={() => Linking.openURL(talk.resources.youtube)}
              >
                Watch on YouTube »
              </Text>
            </TouchableOpacity>
          }

          {talk.resources && talk.resources.ppt &&
            <TouchableOpacity>
              <Text
                style={[styles.p, styles.withTopMargin, styles.resources]}
                onPress={() => Linking.openURL(talk.resources.ppt)}
              >
                View the slides »
              </Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    );
  }
}

ScheduleTalkDetail.PropTypes = {
  talk: PropTypes.object.isRequired
};
