import { View, Text, ScrollView, Image , TouchableOpacity , TextInput , ImageBackground, FlatList } from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign'
import React from 'react'
import Style from './style'
import DietScreen from '../DietScreen/DietScreen'

const Activity = ({navigation}) => {
  
  const handleDiets = ()=>{
    navigation.navigate(DietScreen)
    
  }


  return (
    <View style={Style.Container}>
     
      <View style={Style.header}>
        <View style={Style.innerHeader}>
          
            <Text style={Style.title}>Daily Life Diets</Text>
          
        </View>
      </View>

      {/* Search Bar */}
{/* 
      <View style={Style.searchSection}>
        <Icons
          name="search1"
          type="AntDesign"
          size={20}
          color="#522ea9"
          style={{width: '10%', marginHorizontal: '4%'}}
        />
        <TextInput
          style={Style.input}
          placeholder="Search Something"
          placeholderTextColor={'gray'}
          maxLength={40}
        />
      </View> */}
        {/* Diets Section */}
        <ScrollView>
        <TouchableOpacity style={Style.setImage} onPress={()=> navigation.navigate('DietScreen')}>
        <ImageBackground  source={require('../../Images/img2.jpg')} style={Style.img}> 
        <View style={Style.txtBack}>
        <Text style={Style.setTxt}>7 Days Weight Loss Diet</Text>
        </View>
        </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={Style.setImage} onPress={() => navigation.navigate('WeightGain')}>
        <ImageBackground  source={require('../../Images/img1.jpg')} style={Style.img}> 
        <View style={Style.txtBack}>
        <Text style={Style.setTxt}>7 Days Weight Gain Diet</Text>
        </View>
        </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={Style.setImage} onPress={() => navigation.navigate('YogaPos')}>
        <ImageBackground  source={require('../../Images/img3.jpg')} style={Style.img}> 
        <View style={Style.txtBack}>
        <Text style={Style.setTxt}>Yoga Poses To Gain Weight</Text>
        </View>
        </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={Style.setImage} onPress={() => navigation.navigate('MonDays')}>
        <ImageBackground  source={require('../../Images/img4.jpg')} style={Style.img}> 
        <View style={Style.txtBack}>
        <Text style={Style.setTxt}>Tips for Underweight</Text>
        </View>
        </ImageBackground>
        </TouchableOpacity>
        <View style={{margin:15}}>

        </View>
      </ScrollView>
    </View>
  )
}

export default Activity