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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 10,
    paddingLeft: 15
  },
  instructions: {
    textAlign: 'center',
    color: colors.darkTeal,
    marginBottom: 5,
  },
  dayScheduleContainer: {
    paddingTop: 30,
  },
  talkContainer: {
    paddingTop: 15,
    paddingLeft: 15
  },
  bottomBorderDark: {
    borderBottomColor: colors.darkText,
    borderBottomWidth: 1 / PixelRatio.get(),
  },
  withTopMargin: {
    marginTop: 20
  },
  ...navBar,
  ...text,
});

module.exports = styles;
