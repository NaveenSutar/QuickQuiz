import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Option = ({choice, onPress, status}) => {
  return (
    <>
      {status ? (
        <View style={styles.mcqOptionsContainerDisabled}>
          <Text style={styles.options}>{choice}</Text>
        </View>
      ) : (
        <TouchableOpacity onPress={onPress} style={styles.mcqOptionsContainer}>
          <Text style={styles.options}>{choice}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Option;

const styles = StyleSheet.create({
  mcqOptionsContainer: {
    padding: 8,
    paddingHorizontal: 16,
    borderColor: '#5c4899',
    borderRadius: 8,
    borderWidth: 0.5,
    marginTop: 16,
  },

  mcqOptionsContainerDisabled: {
    padding: 8,
    paddingHorizontal: 16,
    borderColor: '#5c4899',
    borderRadius: 8,
    borderWidth: 0.5,
    marginTop: 16,
    backgroundColor:'#5050501a'
  },


  options: {
    fontSize: 16,
    color: '#505050',
  },
});
