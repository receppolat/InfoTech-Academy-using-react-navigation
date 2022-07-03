import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import styles from './style';
import Message from './components/Message'


const DUMMY = [
  {
    id: 1,
    username: 'alexdesouza',
    image: require('@images/Instagram/alex.jpg'),
    message: 'knaka naber',
    timezone: '5s'
  },
  {
    id: 2,
    username: 'bulentersoy',
    image: require('@images/Instagram/bulentersoy.jpg'),
    message: 'canım naptın',
    timezone: '3s'
  },
  {
    id: 3,
    username: 'kıvanc',
    image: require('@images/Instagram/kıvanc.jpg'),
    message: 'akşam club?',
    timezone: '1s'
  },

]

function Messages() {

  const renderItem = ({ item }) => {
    return (
      <Message message= {item} />
    )
  }

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('@images/Instagram/back.png')} style={styles.icon} />
          <Text style={{ fontSize: 20, color: 'black' }}>receppolat</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('@images/Instagram/videoCall.png')} style={[styles.icon, { marginRight: '2%' }]} />
          <Image source={require('@images/Instagram/messageAdd.png')} style={[styles.icon, { marginRight: '2%' }]} />
        </View>
      </View>
      <TextInput
        placeholder='Ara'
        style={{ borderColor: 'black', borderWidth: 1, borderRadius: 15, margin: '2%', height: 40 }}
      />
      <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
        <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: '2%' }}>Mesajlar</Text>
        <Text style={{ color: 'gray', marginRight: '2%' }}>İstekler</Text>
      </View>

      <FlatList
        data={DUMMY}
        renderItem={renderItem}
        keyExtractor={(item) => { item.id }}
      />
    </View>


  )
}

export default Messages;