import { FlatList, View } from 'react-native'
import React from 'react'
import SubStory from './components/SubStory'

const DUMMY = [
    {
        id: 1,
        image: require('@images/Instagram/alex.jpg'),
        username: 'Alexdesouza'
    },
    {
        id: 2,
        image: require('@images/Instagram/bulentersoy.jpg'),
        username: 'bülentersoy'
    },
    {
        id: 3,
        image: require('@images/Instagram/kıvanc.jpg'),
        username: 'kivanc'
    },
    {
        id: 4,
        image: require('@images/Instagram/alex.jpg'),
        username: 'Alexdesouza'
    },
    {
        id: 5,
        image: require('@images/Instagram/bulentersoy.jpg'),
        username: 'bülentersoy'
    },
    {
        id: 6,
        image: require('@images/Instagram/kıvanc.jpg'),
        username: 'kivanc'
    }

]

export default function index() {

    const renderItem = ({ item }) => {
        return (
            <SubStory item={item} />
        )
    }

    return (
        <View>
            <FlatList
                data={DUMMY}
                renderItem={renderItem}
                keyExtractor={(item) => { item.id }}
                horizontal
                showsHorizontalScrollIndicator ={false}
            />
        </View>
    )
}
