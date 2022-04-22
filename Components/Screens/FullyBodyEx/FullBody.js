import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import FireIcon from 'react-native-vector-icons/SimpleLineIcons';
import React from 'react'
import Style from './Style'

const FullBody = ({navigation}) => {

  const handleExcercise = (ScreenName) =>{
    navigation.navigate(ScreenName)
  }
  return (
    <View style={Style.Container}>
      <View style={{height: '8%', width:'100%', flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
      <Icon name='arrowleft' size={25} color="black" style={{right:'80%', marginTop: 15}} onPress={()=> navigation.navigate('Home')}/>
      <Text style={Style.headTxt}>Full Body Exercise</Text>
      </View>

        <ScrollView style={{flex:1}}>
          <View style={Style.setSection}>
              <TouchableOpacity onPress={()=> handleExcercise("Cardio")}>
              <ImageBackground 
              source={require('../../Images/Cardio.png')}
              style={Style.imgCon}
              imageStyle={{ borderRadius: 10}}
              >
                <Text style={Style.innerTxt}>Cardio</Text>
                <View style={Style.subSec}>

                <View style={Style.leftSide}>
                <Icon name="clockcircleo" size={15} color="white" />
                <Text style={{color:'white', fontSize: 15, marginLeft: 5}}>5 min</Text>
                </View>


                <View style={Style.rightSide}>
                <FireIcon name="fire" size={15} color="white" />
                <Text style={{color:'white', fontSize: 15, marginLeft: 5}}>145</Text>
                </View>

                </View>
              </ImageBackground>
              </TouchableOpacity>
              
              
          </View>
          <View style={Style.setSection}>
              <TouchableOpacity onPress={()=> handleExcercise("Pushups")}>
              <ImageBackground 
              source={require('../../Images/Pushups.png')}
              style={Style.imgCon}
              imageStyle={{ borderRadius: 10}}
              >
                <Text style={Style.innerTxt}>Pushups</Text>
                <View style={Style.subSec}>

                <View style={Style.leftSide}>
                <Icon name="clockcircleo" size={15} color="white" />
                <Text style={{color:'white', fontSize: 15, marginLeft: 5}}>5 min</Text>
                </View>


                <View style={Style.rightSide}>
                <FireIcon name="fire" size={15} color="white" />
                <Text style={{color:'white', fontSize: 15, marginLeft: 5}}>145</Text>
                </View>

                </View>
              </ImageBackground>
              </TouchableOpacity>
              
              
          </View>
          <View style={Style.setSection}>
              <TouchableOpacity onPress={()=> handleExcercise("Squats")}>
              <ImageBackground 
              source={require('../../Images/Squats.png')}
              style={Style.imgCon}
              imageStyle={{ borderRadius: 10}}
              >
                <Text style={Style.innerTxt}>Squats</Text>
                <View style={Style.subSec}>

                <View style={Style.leftSide}>
                <Icon name="clockcircleo" size={15} color="white" />
                <Text style={{color:'white', fontSize: 15, marginLeft: 5}}>5 min</Text>
                </View>


                <View style={Style.rightSide}>
                <FireIcon name="fire" size={15} color="white" />
                <Text style={{color:'white', fontSize: 15, marginLeft: 5}}>145</Text>
                </View>

                </View>
              </ImageBackground>
              </TouchableOpacity>
              
              
          </View>
          <View style={Style.setSection}>
              <TouchableOpacity onPress={()=> handleExcercise("Burpees")}>
              <ImageBackground 
              source={require('../../Images/Burpees.png')}
              style={Style.imgCon}
              imageStyle={{ borderRadius: 10}}
              >
                <Text style={Style.innerTxt}>Burpees</Text>
                <View style={Style.subSec}>

                <View style={Style.leftSide}>
                <Icon name="clockcircleo" size={15} color="white" />
                <Text style={{color:'white', fontSize: 15, marginLeft: 5}}>5 min</Text>
                </View>


                <View style={Style.rightSide}>
                <FireIcon name="fire" size={15} color="white" />
                <Text style={{color:'white', fontSize: 15, marginLeft: 5}}>145</Text>
                </View>

                </View>
              </ImageBackground>
              </TouchableOpacity>
              
              
          </View>
          <View style={Style.setSection}>
              <TouchableOpacity onPress={()=> handleExcercise("Lunges")}>
              <ImageBackground 
              source={require('../../Images/Lunges.png')}
              style={Style.imgCon}
              imageStyle={{ borderRadius: 10}}
              >
                <Text style={Style.innerTxt}>Lunges</Text>
                <View style={Style.subSec}>

                <View style={Style.leftSide}>
                <Icon name="clockcircleo" size={15} color="white" />
                <Text style={{color:'white', fontSize: 15, marginLeft: 5}}>5 min</Text>
                </View>


                <View style={Style.rightSide}>
                <FireIcon name="fire" size={15} color="white" />
                <Text style={{color:'white', fontSize: 15, marginLeft: 5}}>145</Text>
                </View>

                </View>
              </ImageBackground>
              </TouchableOpacity>
              
          </View>


        </ScrollView>
        <View style={{height: 30}}>

        </View>

    </View>
  )
}

export default FullBody