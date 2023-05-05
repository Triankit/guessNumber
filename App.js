import React, {useState} from 'react';

import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import StartGameScreen from './screens/StartGamesScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen />;
  }
  return (
    <LinearGradient
      colors={['#4e0329', '#ddb52f']}
      style={styles.rootContainer}>
      <ImageBackground
        source={require('./assests/images/background.png')}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.imageStyle}>
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.25,
  },
});

export default App;
