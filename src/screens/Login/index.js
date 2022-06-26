import { Alert, Button, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Input from '@components/Input'
import styles from './style';

function Login(props) {

    const [userName, setUserName] = useState('InfoTech');
    const [password, setPassword] = useState('');


    const handleSubmit = () => {
        if (userName && password)
            props.navigation.navigate('Home');
        else
            Alert.alert('Boş Alan Uyarısı', 'Kullanıcı bilgileri eksik girildi.')
    }
    const navigateToRegister = () => {
        navigation.navigate('Register');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.loginText}>InfoTech Mağazacılık</Text>
            <View>
                <Input
                    placeholder={'Kullanıcı adı..'}
                    onChangeText={setUserName}
                />
                <Input
                    placeholder={'Parola..'}
                    onChangeText={setPassword}
                />
                <Button title='Giriş Yap' onPress={handleSubmit}
                />
            </View>

            <View style={styles.footerContainer}>
                <TouchableOpacity onPress={navigateToRegister} style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'rgba(0,0,0,.4)' }}>Mevcut hesabınız yok mu? Kayıt olmak için</Text>
                    <Text style={{ color: 'blue' }}> tıklayınız</Text>
                </TouchableOpacity>

                <View style={styles.authorizationContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={require('@images/google.png')} style={styles.image} />
                        <Text style={styles.imageText}>ile giriş yap</Text>
                    </View>
                    <View style={[styles.imageContainer, { backgroundColor: 'black' }]}>
                        <Image source={require('@images/apple.png')} style={styles.image} />
                        <Text style={styles.imageText}>ile giriş yap</Text>
                    </View>
                </View>
            </View>


        </View>
    )
}


export default Login;
