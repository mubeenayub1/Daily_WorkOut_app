import { StyleSheet , Dimensions } from 'react-native'
const { width , height } = Dimensions.get('screen')


const Style = StyleSheet.create({
    Container: {
        width: '100%',
        flex: 1
    },
    imgCon: {
        width:'100%',
        height: height/100*30,
    },
    setHeadTxt: {
        color: 'black',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 25
    },
    txtCon: {
        alignItems: 'center',
        height: height/100*7,
        justifyContent: 'space-between',
        flexDirection:'row',
        marginHorizontal:'2.5%'
    },
    StatusCon: {
        width: '85%',
        height: height/100*10,
        backgroundColor: '#522ea9',
        alignSelf: 'center',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        bottom: 40
    },
    innerTxt: {
        alignItems:'center'
    },
    BodyCon: {
        width:'100%',
        height: height/100*45,
        bottom: 20
    },
    headingText:{
        color:'black',
        fontSize: 25,
        fontFamily: 'Poppins-SemiBold',
        alignSelf: 'center'
    },
    bodyTxt:{
        fontFamily: 'Poppins-Regular',
        fontSize:15,
        color:'black',
        marginLeft: 7,
        textAlign: 'justify',
        width: '90%',
        alignSelf: 'center'
    }
})

export default Style