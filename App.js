import React, {useState, useEffect} from 'react';

import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import StartGameScreen from './screens/StartGamesScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './assests/Colors/Colors';
import GameOverScreen from './screens/GameOverScreen';
import Orientation from 'react-native-orientation-locker';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  useEffect(() => {
    Orientation.unlockAllOrientations();
  }, []);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} gameOverHandler={gameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
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
