import React, {useState} from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import  storeData  from '../../../Redux/Actions/Action'
import style from './style'





const EditProfile = ({ navigation }) => {

  const [name , setName] = useState('')
  const [weight , setWeight] = useState('')
  const [dob , setDob] = useState('')
  const [email , setEmail] = useState('')

  const dispatch = useDispatch(); 

  const handleUpdate= ()=>{
    if(name === '' || weight === '' || dob === '' || email === ''){
      console.warn("Please Fill All The Blanks");
    }else{
    const data = [name , weight , dob , email];
    dispatch(storeData(data))
    navigation.navigate('ButtomTab')
    }
  }
   return (
    <ScrollView style={style.container}>
        <View style={style.logoContainer}>
        <Image
        style={style.img}
        source={require('../../Images/logo.png')}
        />
        <Text style={style.title}>Edit Profile</Text>
        </View>
        <View style={style.inputContainer}>
        <TextInput
        placeholder='Name'
        placeholderTextColor= "gray"
        style={style.input}
        onChangeText = { (val)=>{ setName(val) }}
        value = {name}

        />
        <TextInput
        placeholder='Weight'
        placeholderTextColor= "gray"
        keyboardType="numeric"
        style={style.input}
        onChangeText = { (val)=>{ setWeight(val) }}
        value = {weight}
  
        />
         <TextInput
        placeholder='Age'
        placeholderTextColor= "gray"
        keyboardType="numeric"
        style={style.input}
        onChangeText = { (val)=>{ setDob(val) }}
        value = {dob}
  
        />
        <TextInput
        placeholder='Email'
        placeholderTextColor= "gray"
        style={style.input}
        onChangeText = { (val)=>{ setEmail(val) }}
        value = {email}
  
        />
        
        <TouchableOpacity onPress={handleUpdate}>
                <LinearGradient colors={['#774fbf', '#522ea9']}  style={style.buttonView}
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                >
               
                <Text style={style.buttonText}>SAVE NOW</Text>
                
                </LinearGradient>
                </TouchableOpacity>
                {/* <Text style={style.forget}>Forget Password</Text> */}
       
{/*         
        <View style={style.IconSection}>
            <View style={style.Icons}>
                    <Image
                    style={style.imgicon}
                    source={require('../../Images/Apple_logo.svg')}
                    />
                    <Image
                    style={style.imgicon2}
                    source={require('../../Images/facebook-icon.svg')}
                    />
                    <Image
                    style={style.imgicon3}
                    source={require('../../Images/Google-Icon.png')}
                    />
            </View>
        </View> */}
        {/* <View style={style.buttomSection}>
            <Text style={{color: 'gray', fontSize: 15}}>Don't have an Account? </Text>
            <Text style={{color: 'gray', fontSize: 15, color: '#522ea9',fontFamily:'Roboto-Bold'}}> Sign Up</Text>
        </View> */}
        </View>
        
    </ScrollView>
  )
}

export default EditProfile