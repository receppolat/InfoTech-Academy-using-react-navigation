import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '@components/Input'
function Register({ navigation, route }) {
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [mail, setMail] = useState();

    const navigateToLogin = () => {
        if (name && surname && userName && password && mail)
            navigation.goBack();
        else
            Alert.alert('Boş Alan Uyarısı', 'Lütfen bilgileriniz eksiksiz giriniz.')
    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Input
                placeholder={'Adınız'}
                onChangeText={setName}
            />
            <Input
                placeholder={'Soyadınız'}
                onChangeText={setSurname}
            />
            <Input
                placeholder={'Kullanıcı adınız'}
                onChangeText={setUserName}
            />
            <Input
                placeholder={'Parolanız'}
                onChangeText={setPassword}
            />
            <Input
                placeholder={'Mail adresiniz'}
                onChangeText={setMail}
            />
            <Button title={'Aramıza Katıl'} onPress={navigateToLogin} />
        </View>
    )
}
export default Register;