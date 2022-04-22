import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';
const { width , height} = Dimensions.get("window");

const style = StyleSheet.create({
    Container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#ffffff'
    },
    text: {
        color:'black',
        fontSize: 25,
        fontFamily:'Poppins-SemiBold'
    },
    headerSection: {
        width:'90%',
        height: height / 100 * 10,
        justifyContent: 'flex-end',
        alignSelf: 'center'
    },
    input: {
        height: 50,
        borderRadius: 10,
        width: '95%',
        paddingHorizontal: '10%',
        fontFamily: 'Roboto-Regular',
        fontSize: 17,
        backgroundColor: '#f1f4f8',
        marginBottom: '3%',
        color: 'black',
        alignSelf: 'center'
    },
    SearchSection: {
        flexDirection: 'row'
    },
    searchSection:{
        backgroundColor: '#f1f4f8',
        height: height/100*7,
        flexDirection: 'row',
        width: '90%',
        marginHorizontal: '5%',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: '5%'
        
    },
    input:{
        padding: 0,
        width: '90%',
        color: 'purple'
    },
    imgSet: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        borderRadius: 10
    },
    imgSection: {
        width: '90%',
        height: height/100*20,
        alignSelf: 'center',
        marginTop: '5%',
        overflow: 'hidden'
    },
    SectionB: {
        width: '100%',
        height: height/100*15,
    },
    SectionA: {
        width: '100%',
        height: height/100*15,
        
    },
    exArea: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '5%',
        
    },
    innerImag: {
        width: '100%' , height:'100%',
        borderRadius: 10
    },
    innerText: {
        fontSize: 13,
        color:'black',
        fontFamily:'Poppins-SemiBold'
    },
    subText: {
        color: '#461b93',
        fontSize: 14
    },
    widthSet: {
        width: '40%'
    }


})

export default style;