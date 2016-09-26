/**
 * @providesModule styles
 * @flow
*/

'use strict';

import {Platform, StyleSheet} from 'react-native';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 20 : 25;
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
};

const navBar = {
  nav: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkBackground,
  },
  navText: {
    color: colors.white,
    paddingTop: 15,
    fontSize: 20,
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
  h1: {
    fontSize: 24,
    lineHeight: 27,
    margin: 10,
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  instructions: {
    textAlign: 'center',
    color: colors.darkTeal,
    marginBottom: 5,
  },
  talkContainer: {
    marginLeft: 15
  },
  ...navBar,
  ...text,
});

module.exports = styles;