/**
 * @providesModule styles
 * @flow
*/

'use strict';

import {Platform, StyleSheet} from 'react-native';
import PixelRatio from 'PixelRatio';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 10 : 15;
const HEADER_HEIGHT = Platform.OS === 'ios' ? 44 + STATUS_BAR_HEIGHT : 56 + STATUS_BAR_HEIGHT;

const colors = {
  actionText: '#3FB4CF',
  inactiveText: '#9B9B9B',
  darkText: '#032250',
  lightText: '#7F91A7',
  cellBorder: '#EEEEEE',
  darkBackground: '#183E63',
  white: '#ECEFF1',
  darkTeal: '#006064',
  lightGrey: '#f0eeea',
  darkGrey: '#333',
  trPurple: '#8F63F4',
  trGreen: '#59D389',
  trMineShaft: '#2e2a2b',
};

const navBar = {
  nav: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.trMineShaft,
  },
  navText: {
    color: colors.white,
    fontSize: 20,
    paddingTop: STATUS_BAR_HEIGHT,
  },
  navBackContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBackButton: {
    height: 24,
    width: 24,
    margin: Platform.OS === 'ios' ? 10 : 16,
    resizeMode: 'contain'
  }
};

const text = {
  dateHeader: {
    fontSize: 15,
    lineHeight: 27,
    paddingLeft: 25,
    color: colors.darkText,
    fontWeight: 'bold',
    backgroundColor: colors.lightGrey,
  },
  h1: {
    fontSize: 24,
    lineHeight: 27,
    marginLeft: 10,
    color: colors.darkText,
    fontWeight: 'bold',
    letterSpacing: -1,
  },
  h2: {
    fontSize: 22,
    lineHeight: 27,
    margin: 10,
    color: colors.darkText,
  },
  p: {
    paddingLeft: 10,
    fontSize: 17,
    lineHeight: 23,
    color: colors.lightText,
  },
  welcome: {
    fontSize: 30,
    margin: 10,
    color: colors.darkTeal
  },
  past: {
    opacity: 0.4,
  }
};

const tags = {
  tagsContainer: {
    margin: 5,
    flexDirection: 'row',
  },
  tag: {
    margin: 5,
    fontSize: 10,
    color: colors.darkTeal,
    // padding: 3,
    // borderRadius: 5,
    // backgroundColor: colors.darkText,
    // opacity: 0.6,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  instructions: {
    textAlign: 'center',
    color: colors.darkTeal,
    marginBottom: 5,
  },
  dayScheduleContainer: {
    paddingTop: 10,
  },
  talkContainer: {
    paddingLeft: 15,
    paddingBottom: 15
  },
  withBottomBorderDark: {
    borderBottomColor: colors.darkText,
    borderBottomWidth: 1 / PixelRatio.get(),
  },
  withTopMargin: {
    marginTop: 20
  },
  ...navBar,
  ...text,
  ...tags,
});

module.exports = styles;
