import { FlatList, Image, View } from 'react-native'
import React from 'react'
import PostHeader from './components/PostHeader'
import PostFooter from './components/PostFooter'
import Story from '@components/Story'

const DUMMY = [
    {
        id: 1,
        userImage: require('@images/Instagram/alex.jpg'),
        username: 'Alexdesouza',
        postImage: require('@images/Instagram/alex.jpg'),
        likeCount: 1000000,
        commentCount: 15025,
        locationName: 'Kadıköy',
        description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
    },
    {
        id: 2,
        userImage: require('@images/Instagram/bulentersoy.jpg'),
        username: 'bülentersoy',
        postImage: require('@images/Instagram/bulentersoy.jpg'),
        likeCount: 134213,
        commentCount: 1213,
        locationName: 'Beşiktaş',
        description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
    },
    {
        id: 3,
        userImage: require('@images/Instagram/kıvanc.jpg'),
        username: 'kivanc',
        postImage: require('@images/Instagram/kıvanc.jpg'),
        likeCount: 12323,
        commentCount: 221,
        locationName: 'Kasımpaşa',
        description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
    },
]
function Post() {

    const renderItem = ({ item }) => {
        return (
            <View>
                <PostHeader item={item} />
                <Image source={item.postImage} style={{width: '100%', height: 400}} />
                <PostFooter item={item}/>
            </View>

        )
    }

    return (
        <View style={{height: '93%'}}>
            <FlatList
                data={DUMMY}
                renderItem={renderItem}
                keyExtractor={(item) => { item.id }}
                showsVerticalScrollIndicator ={false}
                ListHeaderComponent = {Story}
            />
        </View>
    )
}

export default Post;