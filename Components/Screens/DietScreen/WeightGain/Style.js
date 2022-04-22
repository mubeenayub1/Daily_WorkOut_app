import { StyleSheet , Dimensions} from 'react-native'
const { width , height } = Dimensions.get('screen');
const w = width;
const h = height;


const Style = StyleSheet.create({
    Container: {
        width: '100%',
        flex : 1
    },
    header: {
        width: '100%',
        height: height/100*8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#522ea9',
        flexDirection: 'row'
    },
    innerHeader: {
        width: '90%',
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Fredoka-Medium',
        marginLeft: '10%'
    },
    headerImage: {
        width: '100%',
        height: h/100*30,
    },
    heading: {
       
        width: '95%',
        alignSelf: 'center'
    },
    TextHead: {
        fontSize: 25, 
        color: '#522ea9',
        fontFamily: 'Fredoka-Medium',
        marginTop: 10
    },
    TextInner: {
        fontSize: 15, 
        color: 'black',
        fontFamily: 'Poppin-Regular',
        marginTop: 10,
        textAlign: 'justify'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#522ea9",
        padding: 10,
    }
})

export default Style;