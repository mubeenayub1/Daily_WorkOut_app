import { View, Text, ScrollView , Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import ArrowIcon from 'react-native-vector-icons/Feather'
import FireIcon from 'react-native-vector-icons/SimpleLineIcons';
import HumanIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'
import Style from './Style'


const WeightStrech = ({navigation}) => {
  return (
    <View style={Style.Container}>
      <View style={Style.txtCon}>
        <ArrowIcon name='arrow-left' color={'black'} size={30} onPress={()=> navigation.navigate('Training')}/>
        <Text style={Style.setHeadTxt}>Weight Strech</Text>
        
      </View>

      <View style={Style.imgCon}>
        <Image 
        style={{width:'100%', height:'100%'}}
        source={require('../../../Images/BodyStrech.gif')}
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
              <Text style={Style.headingText}> Stretching Routine</Text>
              <Text style={Style.bodyTxt}> Professional sprinters sometimes spend an hour warming up for a race that lasts about 10 seconds. In fact, it’s common for many athletes to perform dynamic stretches in their warmup and static stretches in their cooldown to help keep their muscles healthy.</Text>
              <Text style={Style.bodyTxt}>
              Even if you’re not an athlete, including stretches in your daily routine has many benefits. Not only can stretching help you avoid injuries, it may also help slow down age-related mobility loss and improve circulation. 
              </Text>
        </View>

    </View>
  )
}

export default WeightStrech