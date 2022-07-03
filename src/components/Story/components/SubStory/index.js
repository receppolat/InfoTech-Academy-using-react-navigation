import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './style';

function SubStory({ item }) {
  return (
    <View style={{justifyContent :'center', alignItems: 'center', marginTop: '3%', borderBottomWidth: .2}}>
      <Image source={item.image} style={styles.image}/>
      <Text>{item.username}</Text>
    </View>
  )
}
export default SubStory;

