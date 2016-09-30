import React, {Component, PropTypes} from 'react';
import {
  BackAndroid,
  ListView,
  Navigator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ScheduleList from './ScheduleList';
import ScheduleTalkDetail from './ScheduleTalkDetail';
import NavBackButton from './NavBackButton';
import styles from '../styles';
import schedule from '../schedule';

const pageTitle = 'Show and Tell';
const routes = [{schedule: schedule, index: 0}];
const initialState = {viewTitle: pageTitle, routeIndex: 0};

export default class ShowTellApp extends Component {

  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleBackPress = this.handleBackPress.bind(this);
    this.handleSchedulePress = this.handleSchedulePress.bind(this);
  }

  componentDidMount() {
    this.setState({navigator: this.refs.navigator});

    BackAndroid.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress() {
    this.state.navigator.pop();
    this.setState(initialState);
  }

  handleSchedulePress(talk, title) {
    if (this.state.routeIndex === 0) {
      this.state.navigator.push({index: 1, schedule: talk});
    }

    this.setState({
      viewTitle: title,
      routeIndex: 1
    });
  }

  render() {
    const navigationBar = (
      <Navigator.NavigationBar
        routeMapper={{
          LeftButton: (route) =>
          {
            if (route.index === 0) {
              return null;
            } else {
              return (
                <TouchableOpacity style={styles.navBackContainer} onPress={this.handleBackPress}>
                  <NavBackButton style={styles.navBackButton} />
                </TouchableOpacity>
              );
            }
          },
          RightButton: () => (<Text></Text>),
          Title: () => (<Text style={styles.navText}>{this.state.viewTitle}</Text>),
        }}
        style={styles.nav}
      />
    );

    return (
      <Navigator
        ref="navigator"
        initialRoute={routes[0]}
        initialRouteStack={routes}
        navigationBar={navigationBar}
        renderScene={(route, navigator) =>
          <View style={styles.container}>
            <Text style={styles.welcome}> </Text>
            {
              route.index === 0 ?
                (<ScheduleList
                  handleSchedulePress={this.handleSchedulePress}
                  navigator={navigator}
                  schedule={schedule}
                />)
                :
                (<ScheduleTalkDetail talk={route.schedule} />)
            }
          </View>
        }
      />
    );
  }
}
