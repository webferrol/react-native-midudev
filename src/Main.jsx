import React from 'react'

import {
  Alert,
  Button,
  StyleSheet,
  Text,
  // TouchableOpacity,
  // TouchableWithoutFeedback,
  View
} from 'react-native'

import { Separator } from './components/Separator'

import Constants from 'expo-constants'

const sayHi = () => {
  Alert.alert('Hola mundo')
}

export default function Main () {
  return (
    <View style={styles.container}>
      <Button
        onPress={sayHi}
        title='Hacer click'
        color="#09f"
        accessibilityLabel='Entrar en este botón'
      />

        <Separator borderBottomColor='#000' marginVertical={42}/>

      <Text style={styles.textTitle}>Hello Xurxo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: Constants.statusBarHeight
  },
  textTitle: {
    fontSize: 20
  }
})
