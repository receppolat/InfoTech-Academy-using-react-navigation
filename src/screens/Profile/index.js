import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Story from '@components/Story'

const DUMMY = [
    {
        id: 1,
        image:  require('@images/Instagram/alex.jpg')
    },
    {
        id: 2,
        image:  require('@images/Instagram/bulentersoy.jpg')
    },
    {
        id: 3,
        image:  require('@images/Instagram/kıvanc.jpg')
    },
    {
        id: 4,
        image:  require('@images/Instagram/alex.jpg')
    },
    {
        id: 5,
        image:  require('@images/Instagram/bulentersoy.jpg')
    },
    {
        id: 6,
        image:  require('@images/Instagram/kıvanc.jpg')
    },
    {
        id: 7,
        image:  require('@images/Instagram/alex.jpg')
    },
    {
        id: 8,
        image:  require('@images/Instagram/bulentersoy.jpg')
    },
    {
        id: 9,
        image:  require('@images/Instagram/kıvanc.jpg')
    },
    {
        id: 10,
        image:  require('@images/Instagram/alex.jpg')
    },
    {
        id: 11,
        image:  require('@images/Instagram/bulentersoy.jpg')
    },
    {
        id: 12,
        image:  require('@images/Instagram/kıvanc.jpg')
    }
]


function Profile() {

    const renderItem = ({item}) => {
        return(
            <View style={{borderWidth: 1, borderColor: 'white', width: '50%', height: 137}}>
                <Image source={item.image} style={{width:'100%', height:137}}/>
            </View>
        )
    }
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ margin: '3%', color: 'black', fontSize: 22 }}>alexdesouza</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('@images/Instagram/add.png')} style={{ width: 35, height: 35, marginRight: '4%' }} />
                    <Image source={require('@images/Instagram/menu.png')} style={{ width: 35, height: 35 }} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Image source={require('@images/Instagram/alex.jpg')} style={{ width: 75, height: 75, borderRadius: 50 }} />
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: 'black' }}>10</Text>
                    <Text style={{ color: 'black' }}>Gönderiler</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: 'black' }}>370</Text>
                    <Text style={{ color: 'black' }}>Takipçi</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: 'black' }}>417</Text>
                    <Text style={{ color: 'black' }}>Takip</Text>
                </View>
            </View>

            <View style={{ marginLeft: '3%' }}>
                <Text style={{ color: 'black' }}>{'Alex De Souza\nFENERBAHÇE\n10 NUMARA'}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ height: 30, width: '85%', backgroundColor: 'gray', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>Profili Düzenle</Text>
                    </TouchableOpacity>
                    <Image source={require('@images/Instagram/add.png')} style={{ width: 35, height: 35 }} />
                </View>
            </View>
            <Story />
            <View style={{ backgroundColor: 'black', width: '100%', height: 1 }} />
            <FlatList
                data={DUMMY}
                renderItem={renderItem}
                keyExtractor={(item) => { item.id }}
                numColumns={2}
            />
        </View>
    )
}
export default Profile;