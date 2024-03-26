

import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';





function App(): React.JSX.Element {
  
const [color, setColor] = useState('#6A1B4D');
  
const generateRandomColor = () => {
  let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  setColor(randomColor);
}
  return (
    <>
    <StatusBar backgroundColor={color}/>
    <View style={[styles.button, {backgroundColor: color}]}>
    <TouchableOpacity onPress={generateRandomColor} style={styles.button} >
      <Text style={styles.text}>Tap me</Text>
    </TouchableOpacity>
</View>
    </>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    color: 'white'
  },
  button: {
   
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    width: "50%",
    
  }
});

export default App;
