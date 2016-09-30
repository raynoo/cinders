import React, {Component, PropTypes} from 'react';
import {Linking, View, Text} from 'react-native';
import styles from '../styles';
// import YouTube from 'YouTube';

export default class TalkDetail extends React.Component {

  render() {
    const talk = this.props.talk;

    return (
      <View style={[styles.talkContainer, styles.withTopMargin]}>
        <Text style={styles.h2}>{talk.title}</Text>
        {/*talk.description && <Text style={styles.p}>{talk.description}</Text>*/}
        <Text style={styles.p}>by {talk.speaker}</Text>

        {talk.resources && talk.resources.youtube &&
          <Text
            style={[styles.p, styles.withTopMargin]}
            onPress={() => Linking.openURL(talk.resources.youtube)}
          >
            Watch on YouTube »
          </Text>
        }

        {talk.resources && talk.resources.ppt &&
          <Text
            style={[styles.p, styles.withTopMargin]}
            onPress={() => Linking.openURL(talk.resources.ppt)}
          >
            View the slides »
          </Text>
        }
      </View>
    );
  }
}

TalkDetail.PropTypes = {
  talk: PropTypes.object.isRequired
}
