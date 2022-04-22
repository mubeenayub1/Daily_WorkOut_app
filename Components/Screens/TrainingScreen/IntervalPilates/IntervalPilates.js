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
        <Text style={Style.setHeadTxt}>Interval Pilates</Text>
        
      </View>

      <View style={Style.imgCon}>
        <Image 
        style={{width:'100%', height:'100%'}}
        source={require('../../../Images/Pilates.gif')}
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
              <Text style={Style.headingText}> Interval Pilates Workout</Text>
              <Text style={Style.bodyTxt}> Should you combine Pilates and high-intensity interval training? Interval training is cardio fitness training in which bursts of high-intensity effort alternate with low-intensity movement. In contrast, Pilates emphasizes strength and flexibility.  </Text>
              <Text style={Style.bodyTxt}>
              What makes interval training a nice cross-training option with Pilates is that interval training provides a great aerobic workout. It also does it fast—in as little as twenty minutes. Interval training is one of the quickest ways to build aerobic capacity and overall endurance. Studies show that interval training can be safe for many age groups and levels of fitness. 
              </Text>
        </View>

    </View>
  )
}

export default WeightStrech