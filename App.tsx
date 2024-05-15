

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
  let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16); // 16777215 equals ffffff in hex
  setColor(randomColor);
}
  return (
    <>
    <StatusBar backgroundColor={color}/>
    <View style={[styles.container, {backgroundColor: color}]}>
    <TouchableOpacity onPress={generateRandomColor} >
      <View style={styles.button}>
      <Text style={styles.text}>Change Color</Text>
      </View>
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
    color: 'white',
    margin: 10,
    marginHorizontal: 20,
  },
    button: {
   
    backgroundColor: 'green',
    
    borderRadius: 20,
   
    
    
  }
});

export default App;
