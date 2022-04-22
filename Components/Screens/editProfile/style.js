import { StyleSheet } from 'react-native'

const Style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
        width: '100%',
        height:'100%'
    },
    logoContainer:{
        width: '100%',
        alignItems: 'center',
        marginVertical: '10%',
        bottom: '5%'
    },
    img:{
        width: 150,
        height: 150
    },
    title:{
        fontSize: 35,
        color: 'black',
        fontFamily: 'Roboto-Bold'

    },
input: {
    height: 50,
    borderRadius: 40,
    width: '95%',
    paddingHorizontal: '10%',
    fontFamily: 'Roboto-Regular',
    fontSize: 17,
    backgroundColor: '#f1f4f8',
    marginBottom: '3%',
    color: 'black'
    
    
    
},
inputContainer:{
    width: '100%',
    alignItems: 'center',
    marginTop: '-7%'
    
},
buttonView:{
    width: '95%',
    height: 50,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%'

},
buttonText:{
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Roboto-Medium'
},
IconSection:{
    width: '100%',
    height:50,
    paddingHorizontal: '25%'
},
imgicon:{
    width:30,
    height: 40
},
imgicon2:{
    width:40,
    height: 40
},
imgicon3:{
    width:40,
    height: 45
},
Icons:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
},
buttomSection:{
    flexDirection: 'row',
    width: '100%',
    height: 40,
    top: '5%',
    alignItems: 'center',
    justifyContent: 'center'
},
forget:{
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Roboto-Bold',
    marginBottom: '5%'
}
})
export default Style