import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Timer = ({time}) => {
  return (
    <View style={styles.timerContainer}>
      <Image
        style={styles.timerIcon}
        source={require('./../assets/icons/timer.png')}
        tintColor={'#fff'}
      />
      <Text style={styles.timerText}>{time}</Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  timerContainer: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    padding: 4,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  timerIcon: {
    height: 20,
    width: 20,
    marginRight: 8,
  },

  timerText: {
    color: '#fff',
    fontSize: 16,
  },
});
