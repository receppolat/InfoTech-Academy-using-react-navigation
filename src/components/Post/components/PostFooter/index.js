import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './style';

function PostFooter({ item }) {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.buttonsContainer}>
                    <Image source={require('@images/Instagram/heart.png')} style={styles.icon} />
                    <Image source={require('@images/Instagram/comment.png')} style={styles.icon} />
                    <Image source={require('@images/Instagram/share.png')} style={styles.icon} />
                </View>
                <Image source={require('@images/Instagram/save.png')} style={styles.icon} />
            </View>
            <Text style={{ color: 'black' }}>{item.likeCount} beğenme</Text>
            <Text style={{ color: 'black', fontWeight: '600' }}>{item.username} {item.description}</Text>
            <Text style={{ color: 'gray' }}>{item.commentCount} yorumun tümünü gör</Text>

        </View>
    )
}

export default PostFooter;
