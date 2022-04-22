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
              <ScrollView showsHorizontalScrollIndicator={false}>
              <Text style={Style.bodyTxt}> The lunge is a popular leg-strengthening exercise with a multitude of variations to add variety to your workout. In addition, varying your technique allows you to emphasize different muscles or parts of those muscles. </Text>
              <Text style={Style.bodyTxt}>
              This exercise is beneficial for injury prevention, as well as rehabilitation after injuries occur. It’s often part of a foundational strength program or rehab protocol, allowing athletes and exercisers to return to their sport or activity of interest as quickly as possible. 
              </Text>
              <Text style={Style.bodyTxt}>
              For instance, it’s a common position people assume to get up from the ground, and it mimics many of the movements and muscle-activation patterns of daily activities, such as walking and running and ascending or descending stairs
              </Text>
              <View style={{height:50}}></View>
              </ScrollView>
              
        </View>

    </View>
  )
}

export default WeightStrech