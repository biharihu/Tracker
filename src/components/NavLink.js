import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Text style={styles.signinText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signinText: {
    color: 'blue',
    fontSize: 16,
    marginLeft: 15
  }
});

export default withNavigation(NavLink);
