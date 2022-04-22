import { StyleSheet , Dimensions } from 'react-native'
const {width , height} = Dimensions.get('screen');


const Style = StyleSheet.create({
    Container: {
        width: '100%',
        flex: 1,
    },
    headTxt: {
        color: 'black',
        fontSize: 25,
        alignSelf: 'center',
        fontFamily: 'Poppins-SemiBold',
        marginTop: 15
    },
    setSection: {
        width: '95%',
        alignSelf: 'center',
        height: height/100*20,
        borderRadius: 10,
        marginTop: 6,
        marginBottom: 20
    },
    imgCon: {
        width: '100%',
        height: '100%',
        marginTop: 10,
        
    },
    innerTxt: {
        marginTop: '25%',
        color: 'white',
        fontSize: 25,
        marginLeft: '5%',
        fontFamily: 'Poppins-SemiBold',
        marginBottom: '2%'
    

    },
    rightSide: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center'
        
    },
    leftSide: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center'
    },
    subSec: {
        flexDirection: 'row', width: "50%", justifyContent:'space-between', marginLeft: '5%',
        marginTop: -8
    }
})

export default Style;