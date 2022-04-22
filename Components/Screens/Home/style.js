import { StyleSheet , Dimensions } from 'react-native'
const {width , height} = Dimensions.get("screen")
const style = StyleSheet.create({
    container:{
        backgroundColor:'#ffffff',
        
        
    },
    header: {
        width: '100%',
        height: height/100*10,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    innerHeader:{
       width: '90%',
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center'
    },
    
    title:{
        color: 'black',
        fontSize: 25,
        fontFamily: 'Fredoka-Medium'
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
    imgCon: {
        width: '100%',
        height: '100%',
        borderRadius: 15
        
        
    },
    headerButton: {
        width: '48%',
        height: '18%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        top:'65%',
        left: '3%'
    },
    headerText: {
        color: '#FFFFFF',
        fontFamily: 'Fredoka-Medium',
        fontSize: 18
    },
    categorySec:{
        width: '90%',
        height: '10%',
        alignSelf: 'center'
        
    },
    cateHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemLogo:{
        width: 25,
        height: 25,
        alignSelf: 'center'
        
    },
    item: {
        width: '20%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#dae0e8',
        borderRadius: 10,
    },
    categoryItem: {
        top: '3%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    secScroll:{
        width: '100%',
        
    },
    tinyLogo:{
        height:180,
        width:240,
        marginRight: 20
                
    },
    workItem: {
        flexDirection:'row',
        width:"100%",
        
        
    }

})

export default style