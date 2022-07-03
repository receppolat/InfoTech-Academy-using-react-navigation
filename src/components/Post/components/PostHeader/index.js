import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './style';

function PostHeader({ item }) {
    console.log(item);
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: .2}}>
            <View  style={styles.container}>
                <Image source={item.userImage} style={styles.userImage} />
                <View>
                    <Text style={{ fontSize: 16, color: 'black' }}>{item.username}</Text>
                    <Text style={{ fontSize: 12, color: 'rgba(0,0,0,.8)' }}>{item.locationName}</Text>
                </View>
            </View>
            <Image source={require('@images/Instagram/tripleDot.png')} style={{ width: 15, height: 15, marginRight: '2%' }} />

        </View>
    )
}

export default PostHeader;