import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>{props.title}</Text>
      {props.icon ? <>{props.icon}</> : null}
    </View>
  );
};

Header.defaultProps = {
  title: 'Pistagram',
};

const styles = StyleSheet.create({
  headerView: {
    padding: 10,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    shadowColor: '#e3e3e3',
    shadowOffset: {
      width: 5,
      height: -5,
    },
    shadowOpacity: 1,
  },
});

export default Header;
