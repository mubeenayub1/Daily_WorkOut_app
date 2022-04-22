import { StyleSheet , Dimensions } from 'react-native';
const { width , height } = Dimensions.get('screen');

const style = StyleSheet.create({
    Container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#ffffff'
    },
    headerSection: {
        width: '100%',
        height: height/100*10,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 30,
        fontFamily:'Poppins-SemiBold',
        color:'black'
    },
    deitSection: {
        marginTop: '5%',
        width: '100%',
        height: height/100*23,
        alignItems: 'center'
    },
    header: {
        width: '100%',
        height: height/100*8,
        alignItems: 'center',
        justifyContent: 'center',
       
        
    },
    innerHeader:{
       width: '90%',
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       
    },
    title:{
        color: 'black',
        fontSize: 25,
        fontFamily: 'Fredoka-Medium',
        alignSelf: 'center',
        marginRight: '20%'
    },
    iconSide:{
        width: 40,
        alignItems: 'center',
        height: 40,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor:'#e5e9ef',
        borderRadius: 10

    },
    searchSection:{
        backgroundColor: '#f1f4f8',
        height: height/100*7,
        flexDirection: 'row',
        width: '90%',
        marginHorizontal: '5%',
        borderRadius: 10,
        alignItems: 'center'
        
    },
    input:{
        padding: 0,
        width: '90%',
        color: 'purple'
    },
    setImage: {
        width: '90%',
        height: height/100*20,
        alignSelf: 'center',
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: '8%'
    },
    img: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        
    },
    setTxt: {
        width:'100%',
        height:'100%',
        fontFamily: 'Poppins-SemiBold',
        color: '#ffffff',
        fontSize: 20,
        marginLeft:'2%'
    },
    txtBack: {
        width: '80%', backgroundColor: 'rgba(0,0,0,0.5)' , height:'20%', marginLeft: '4%', alignItems: 'center', justifyContent:'center', 
        borderRadius: 10,
        marginBottom: '4%'
    }
    
})

export default style;