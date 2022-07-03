import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './style'

export default function index({ message }) {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={message.image} style={styles.image} />
        <View style={{ marginLeft: '2%' }}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>{message.username}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: 'black' }}>{message.message}</Text>
            <Text style={{ color: 'black', marginLeft: '10%' }}>{message.timezone}</Text>
          </View>

        </View>
      </View>

      <Image source={require('@images/Instagram/camera.png')} style={{ width: 40, height: 40, marginRight: '3%' }} />
    </View>

  )
}
