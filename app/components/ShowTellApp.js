import React, {Component, PropTypes} from 'react';
import {
  ListView,
  Navigator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ScheduleList from './ScheduleList';
import TalkDetail from './TalkDetail';
import NavBackButton from './NavBackButton';
import styles from '../styles';
import schedule from '../schedule';

export default class ShowTellApp extends Component {

  render() {
    const navigationBar = (
      <Navigator.NavigationBar
        routeMapper={{
          LeftButton: (route, navigator, index, navState) =>
          {
            if (route.index === 0) {
              return null;
            } else {
              return (
                <TouchableOpacity style={styles.navBackContainer} onPress={() => navigator.pop()}>
                  <NavBackButton style={styles.navBackButton} />
                </TouchableOpacity>
              );
            }
          },
          RightButton: (route, navigator, index, navState) =>
            { return (<Text></Text>); },
          Title: (route, navigator, index, navState) =>
            { return (<Text style={styles.navText}>Show and Tell</Text>); },
        }}
        style={styles.nav}
      />
    );

    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        navigationBar={navigationBar}
        renderScene={(route, navigator) =>
          <View style={styles.container}>
            <Text style={styles.welcome}>  </Text>
            {
              route.index === 0 ?
                (<ScheduleList
                  handleSchedulePress={(talk) => {
                    if (route.index === 0) {
                      navigator.push({index: 1, schedule: talk});
                    }
                  }}
                  navigator={navigator}
                  schedule={schedule}
                />)
                :
                (<TalkDetail talk={route.schedule} />)
            }
          </View>
        }
      />
    );
  }
}

const routes = [
  {schedule: schedule, index: 0},
];
