import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    loginText: {
        fontSize: 24,
    },
    image: {
        width: 35,
        height: 35,
        marginRight: '1%'
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(150,20,20,1)',
        borderRadius: 20,
        padding: '1%',
        margin: '2%'
    },
    imageText: {
        color: 'white',
    },
    authorizationContainer: {
        flexDirection: 'row',
    },
    footerContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;