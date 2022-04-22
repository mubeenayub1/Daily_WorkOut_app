import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './style'
import Search from 'react-native-vector-icons/AntDesign'







const Training = ({navigation}) => {

  function handleTraining (ScreenName){
    navigation.navigate(ScreenName)
  }

  return (
    <View style={Style.Container}>
        {/* Training Section */}
        
        <View style={Style.headerSection}>
                <Text style={Style.text}>Training</Text>
        </View>
        {/* Search Bar Area */}
       
      {/* <View style={Style.searchSection}>
        <Search
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

<ScrollView>
      
      {/* MAIN IMAGE SECTION */}
      <View  style={Style.imgSection}>
      <Image source={require('../../Images/training.jpeg')} style={Style.imgSet}/>
      </View>


      {/* Exercise Section */}


      
      <View style={Style.exArea}>
      
      <View style={Style.widthSet}>
      <TouchableOpacity onPress={()=> handleTraining("WeightStrech")}>
      <View style={Style.SectionA}>
       <Image source={require('../../Images/Image1.jpeg')} style={Style.innerImag} />
      </View>
        <Text style={Style.innerText}>BodyWeight Stretch</Text>
        <Text style={Style.subText}>Beginner</Text>
        </TouchableOpacity>
      </View>
      


      <View style={Style.widthSet}>
      <TouchableOpacity onPress={()=> handleTraining("BodyFast")}>
      <View style={Style.SectionB}>
      <Image source={require('../../Images/image2.jpeg')} style={Style.innerImag} />
      </View>
        <Text style={Style.innerText}>Full Body Fast</Text>
        <Text style={Style.subText}>Beginner</Text>
        </TouchableOpacity>
      </View>
      
      </View>
      
      <View style={Style.exArea}>

      <View style={Style.widthSet}>
      <TouchableOpacity onPress={()=> handleTraining("Tabata")}>
      <View style={Style.SectionA}>
       <Image source={require('../../Images/Image4_1.jpeg')} style={Style.innerImag} />
      </View>
        <Text style={Style.innerText}>Express Tabata</Text>
        <Text style={Style.subText}>Beginner</Text>
      </TouchableOpacity>
      </View>


      <View style={Style.widthSet}>
      <TouchableOpacity onPress={()=> handleTraining("CoreControl")}>
      <View style={Style.SectionB}>
      <Image source={require('../../Images/Image3_1.jpeg')} style={Style.innerImag} />
      </View>
        <Text style={Style.innerText}>Core Control</Text>
        <Text style={Style.subText}>Beginner</Text>
        </TouchableOpacity>
      </View>
      
      </View>
      
      <View style={Style.exArea}>

      <View style={Style.widthSet}>
      <TouchableOpacity onPress={()=> handleTraining("Glutes")}>
      <View style={Style.SectionA}>
       <Image source={require('../../Images/Image5.jpg')} style={Style.innerImag} />
      </View>
        <Text style={Style.innerText}>Glutes & Abs</Text>
        <Text style={Style.subText}>Beginner</Text>
        </TouchableOpacity>
      
      </View>


      <View style={Style.widthSet}>
      <TouchableOpacity onPress={()=> handleTraining("IntervalPilates")}>
      <View style={Style.SectionB}>
      <Image source={require('../../Images/Image6.jpg')} style={Style.innerImag} />
      </View>
        <Text style={Style.innerText}>Interval Pilates</Text>
        <Text style={Style.subText}>Beginner</Text>
        </TouchableOpacity>
      </View>
      
      </View>


      </ScrollView>
    </View>
  )
}

export default Training