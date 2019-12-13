import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>TrackListScreen</Text>
      <Button
        title="Go to trackDetailScreen"
        onPress={() => navigation.navigate('TrackDetail')}
      />
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
