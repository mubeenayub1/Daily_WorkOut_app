import { StyleSheet , Dimensions } from 'react-native'
import { create } from 'react-test-renderer'

const {width , height} = Dimensions.get("screen")


const style = StyleSheet.create({
    Container : {
        // width: '100%',
        // height: '100%',
        backgroundColor: '#f8fafc',
        flex: 1
    },
    Header: {
        flexDirection: 'row',
        width: '90%',
        height: height/100*8,
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    Arrow: {
        
    },
    HeadingText: {
        color: 'black',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 17
    },
    LeftText: {
        color: '#4f2698',
        fontSize: 17
    },
    ImageSection: {
        width: '100%',
        height: height/100*15,
        justifyContent: 'center',
        alignItems: 'center',
        
    }, 
    tinyLogo: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    profileData: {
        width: '90%',
        height: height/100*40,
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 10,
        marginTop: '10%',
        elevation:5
    },
    SectionA: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center'
    },
    leftSide: {
        fontFamily: 'Roboto-Regular',
        color:'black',
        fontSize: 15,
        
    },
    rightSide: {
        color: 'gray',
        fontSize: 15,
        fontFamily: 'Roboto-Regular'
    }
    

})

export default style;