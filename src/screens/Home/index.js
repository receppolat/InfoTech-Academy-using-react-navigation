import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '@components/Header'

import Post from '@components/Post'

function Home({navigation}) {

  return (
    <View>
      <Header navigation = {navigation} />
      <Post />
    </View>
  )
}

export default Home;