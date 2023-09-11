import {Alert, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Option from '../components/Option';
const data = require('./../data/questions.json');

const Quiz = ({navigation}) => {
  const mcqQuestions = data.questions;
  let interval = null;

  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  const [qTimer, setQTimer] = useState(60);
  const [nqTimer, setNQTimer] = useState(5);

  const [clicked, setClicked] = useState(false);

  const currentQuestion = mcqQuestions[questionIndex];

  useEffect(() => {
    const myInterval = () => {
      if (qTimer >= 1) {
        setQTimer(state => state - 1);
      }
      if (qTimer === 0) {
        Alert.alert('Lost!!!', 'You have to answer within 60 seconds', [
          {text: 'RESTART', onPress: () => navigation.navigate('Start')},
        ]);
      }
    };

    interval = setTimeout(myInterval, 1000);

    return () => {
      clearTimeout(interval);
    };
  }, [qTimer]);

  useEffect(() => {
    if (questionIndex + 1 > 15) {
      clearTimeout(interval);
      setQuestionIndex(0);
      navigation.navigate('Score', {
        score: score,
      });
      console.log(score);
    }
  }, [questionIndex, score]);

  const handleClick = index => {
    setClicked(true);
    if (currentQuestion.answer === index + 1) {
      setScore(prev => prev + 1);
    }
    
    const timerId = setInterval(() => {
      setNQTimer(state => state - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(timerId);
      setQuestionIndex(questionIndex + 1);
      setQTimer(60);
      setNQTimer(5);
      setClicked(false);
    }, 5000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Question {questionIndex + 1}</Text>

        <View style={styles.timerContainer}>
          <Image
            style={styles.timerIcon}
            source={require('./../assets/icons/timer.png')}
            tintColor={'#fff'}
          />
          <Text style={styles.timerText}>{nqTimer}</Text>
        </View>

        <View style={styles.timerContainer}>
          <Image
            style={styles.timerIcon}
            source={require('./../assets/icons/timer.png')}
            tintColor={'#fff'}
          />
          <Text style={styles.timerText}>{qTimer}</Text>
        </View>
      </View>

      <View style={styles.mcqContainer}>
        <Text style={styles.questionText}>{currentQuestion?.question}</Text>

        {currentQuestion?.options.map((v, index) => {
          return (
            <Option
              onPress={() => handleClick(index)}
              status={clicked}
              choice={v}
              key={index}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    backgroundColor: '#5C4B99',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },

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

  mcqContainer: {
    padding: 16,
  },

  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#505050',
  },
});
