import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SigninScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SigninScreen</Text>
    </View>
  );
};
export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
