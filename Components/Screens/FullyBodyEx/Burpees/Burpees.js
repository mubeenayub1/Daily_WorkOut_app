import { View, Text, ScrollView , Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
import FireIcon from 'react-native-vector-icons/SimpleLineIcons';
import HumanIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'
import Style from './Style'

const WeightStrech = ({navigation}) => {
  return (
    <View style={Style.Container}>
      <View style={Style.txtCon}>
        <TouchableOpacity onPress={()=> navigation.navigate('FullBody')}>
        <ArrowIcon name='arrowleft' color={'black'} size={25}/>
        </TouchableOpacity>
        <Text style={Style.setHeadTxt}>Cardio Workout</Text>
        <Icon name='clockcircleo' color={'transparent'} size={25}/>
      </View>

      <View style={Style.imgCon}>
        <Image 
        style={{width:'100%', height:'100%'}}
        source={require('../../../Images/BarQuee.gif')}
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
              <Text style={Style.headingText}>Burpees Workout</Text>
              <Text style={Style.bodyTxt}> Despite the funny name, and perhaps not being as well-known as pushups or squats, burpees are a challenging exercise that work many of the major muscle groups in your body. </Text>
              <Text style={Style.bodyTxt}>
              Doing several burpees in a row can be tiring, but this versatile exercise may be worth the payoff, especially if you’re looking for a way to build strength and endurance, while burning calories, and boosting your cardio fitness. 
              </Text>
              <Text style={Style.bodyTxt}>
              Here’s a look at how to do burpees correctly and safely, and variations you can try if you want an easier or more challenging burpee option. 
              </Text>
        </View>

    </View>
  )
}

export default WeightStrech