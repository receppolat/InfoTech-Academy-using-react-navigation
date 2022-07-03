import { Image, View } from 'react-native'
import React from 'react'
import styles from './style'

export default function index() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '7%'}}>
            <Image
                source={require('@images/Instagram/instagram.png')}
                style={styles.instagramLogo} />
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('@images/Instagram/add.png')} style={styles.icons} />
                <Image source={require('@images/Instagram/heart.png')} style={styles.icons} />
                <Image source={require('@images/Instagram/message.png')} style={styles.icons} />
            </View>
        </View>
    )
}

