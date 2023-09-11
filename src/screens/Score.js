import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MyButton from '../components/MyButton';
import { NavigationContainer, useRoute } from '@react-navigation/native';

const Score = ({navigation}) => {
  const route = useRoute();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scoreContainer}>
        <Text style={styles.title}>Your Score</Text>
        <Text style={styles.score}>{route.params.score}</Text>
      </View>
      <MyButton textStyle={styles.buttonText} title={'    RESTART    '} onPress={()=>navigation.navigate('Start')}/>
    </SafeAreaView>
  );
};

export default Score;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  scoreContainer: {
    alignItems: 'center',
    backgroundColor: '#99999926',
    borderRadius: 16,
    padding: 30,
    borderWidth: 1,
    borderColor: '#99999980',
    marginVertical:32
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#505050',
    marginVertical: 16,
  },

  score: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#505050',
    marginTop: 16,
  },

  buttonText: {
    fontSize: 15
  },
});
