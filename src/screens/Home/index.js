import { View, Image, Text, FlatList, Dimensions, Button, TextInput } from 'react-native'
import React from 'react'
import styles from './style';
import Input from '@components/Input/index';


const DUMMY = [
    {
        id: 1,
        name: 'C# Öğren',
        author: 'Infotech Academy',
        stock: 10,
        price: 50,
        image: require('@images/csharp.png')
    },
    {
        id: 2,
        name: 'React Native Öğren',
        author: 'Infotech Academy',
        stock: 5,
        price: 1000,
        image: require('@images/reactnative.png')
    },
]


function Home(props) {
    const { userName } = props.route.params;

    const renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 18 }}>{item.name}</Text>
                <Text style={{ fontSize: 10 }}>{item.author}</Text>
                <Image source={item.image} style={styles.image} />
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.priceContainer}>
                        <Image source={require('@images/price.png')} style={{ width: 18, height: 18, marginRight: '2%' }} />
                        <Text style={{ color: 'white', fontWeight: '600' }}>{item.price}</Text>
                    </View>
                    <Text style={{ color: 'white', marginTop: '2%', backgroundColor: 'red', borderRadius: 20, padding: '3%', marginLeft: '2%' }}>Stok Adeti:{item.stock}</Text>
                </View>
                <TextInput
                    placeholder='Ürün Adeti'
                    
                    style={{
                        width: 100,
                        margin: '2%',
                        height: 40,
                        borderWidth: 1,
                        fontSize: 14,
                        color: 'black',
                    }}
                    keyboardType='numeric'
                />
                <Button title='Sepete Ekle' />
            </View>
        )
    }
    return (
        <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>{userName} Hoşgeldiniz</Text>
            <FlatList
                data={DUMMY}
                renderItem={renderItem}
                keyExtractor={(item) => { item.id }}
                numColumns={2}
            />
        </View>
    )
}

export default Home;