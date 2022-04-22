import { View, Text, ScrollView , Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import FireIcon from 'react-native-vector-icons/SimpleLineIcons';
import ArrowIcon from 'react-native-vector-icons/AntDesign';
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
        source={require('../../../Images/SquatsG.gif')}
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
              <Text style={Style.headingText}>Squat Workout</Text>
              <ScrollView showsHorizontalScrollIndicator={false}>
              <Text style={Style.bodyTxt}> The squat is a dynamic strength training exercise that requires several muscles in your upper and lower body to work together simultaneously.</Text>
              <Text style={Style.bodyTxt}>
              Many of these muscles help power you through daily tasks such as walking, climbing stairs, bending, or carrying heavy loads. They also help you perform athletic-related activities. 
              </Text>
              <Text style={Style.bodyTxt}>
              Adding squats to your workouts can help boost your exercise performance, decrease your risk of injury, and keep you moving more easily throughout the day. But these are just a few of the benefits.
              </Text>
              <Text style={Style.bodyTxt}>
              Keep reading to learn more about the rewards you can reap from doing squats and variations you can try for added benefits. 
              </Text>
              </ScrollView>
              <View style={{height:20}}>

              </View>
        </View>

    </View>
  )
}

export default WeightStrech