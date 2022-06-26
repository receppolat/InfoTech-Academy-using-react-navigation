import { TextInput, View } from 'react-native'
import React from 'react'
import styles from './style'

export default function index({placeholder, onChangeText}) {
  return (
    <View>
        <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText = {onChangeText}
        />
    </View>
  )
}
