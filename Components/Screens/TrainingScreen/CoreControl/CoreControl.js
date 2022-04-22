import { View, Text, ScrollView , Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import FireIcon from 'react-native-vector-icons/SimpleLineIcons';
import HumanIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'
import ArrowIcon from 'react-native-vector-icons/Feather'
import Style from './Style'

const WeightStrech = ({navigation}) => {
  return (
    <View style={Style.Container}>
      <View style={Style.txtCon}>
        <ArrowIcon name='arrow-left' color={'black'} size={30} onPress={()=> navigation.navigate('Training')}/>
        <Text style={Style.setHeadTxt}>Core Control</Text>
        
      </View>

      <View style={Style.imgCon}>
        <Image 
        style={{width:'100%', height:'100%'}}
        source={require('../../../Images/core.gif')}
        />
      </View>

      <View style={Style.StatusCon}>
            <View style={Style.innerTxt}>
                  <Icon name="clockcircleo" size={15} color="white" />
                  <Text style={{color:'white', fontSize: 15}}>5 min</Text>
            </View>
            <View style={Style.innerTxt}>
                 <FireIcon name="fire" size={15} color="white" />
                  <Text style={{color:'white', fontSize: 15}}>145</Text>
            </View>
            <View style={Style.innerTxt}>
                  <HumanIcon name="human" size={15} color="white" />
                  <Text style={{color:'white', fontSize: 15}}>Beginner</Text>
            </View>
      </View>


        <View style={Style.BodyCon}>
              <Text style={Style.headingText}>Core Control</Text>
              <Text style={Style.bodyTxt}>A strong core changes your posture and allows you to control your body better when you do just about anything. Core Control is a workout aimed to help you build a stronger core. </Text>
              <Text style={Style.bodyTxt}>
              Each exercise works specific abdominal muscles without neglecting other parts of your body. This is only a Level III workout so really go the full length of five sets and add EC and you'll be golden plus you will really feel the difference from the very first session.  
              </Text>
        </View>

    </View>
  )
}

export default WeightStrech