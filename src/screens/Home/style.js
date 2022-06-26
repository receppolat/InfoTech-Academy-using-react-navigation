import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,.7)',
        width: width * .48,
        height: height * .40,
        margin: '1%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'fff',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        elevation: 10,
        shadowOpacity: .1,
        shadowRadius: 10,
        borderRadius: 10,

    },
    image: {
        width: 90,
        height: 90
    },
    priceContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(255,0,0,.2)',
        borderRadius: 20,
        padding: '3%'
    }

})

export default styles;