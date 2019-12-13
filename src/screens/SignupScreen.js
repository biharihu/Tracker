import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>SignupScreen</Text>
      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate('Signin')}
      />
      <Button
        title="Go to main flow"
        onPress={() => navigation.navigate('mainFlow')}
      />
    </View>
  );
};
export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
