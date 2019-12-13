import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TrackListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TrackListScreen</Text>
    </View>
  );
};
export default TrackListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
