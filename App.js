import React, {useState} from 'react';

import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import StartGameScreen from './screens/StartGamesScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './assests/Colors/Colors';

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
      colors={[Colors.primary700, Colors.accent500]}
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
