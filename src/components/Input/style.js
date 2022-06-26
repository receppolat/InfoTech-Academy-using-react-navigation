import { Dimensions, StyleSheet } from "react-native";
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: width * .7,
        height: 40,
        margin: '2%',
        padding: '2%'
    }
})

export default styles;