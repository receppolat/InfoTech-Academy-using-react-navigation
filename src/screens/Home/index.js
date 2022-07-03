import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '@components/Header'

import Post from '@components/Post'

function Home() {
  return (
    <View>
      <Header />
      <Post />
    </View>
  )
}

export default Home;