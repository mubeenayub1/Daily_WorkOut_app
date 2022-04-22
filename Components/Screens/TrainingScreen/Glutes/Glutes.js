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
        <Text style={Style.setHeadTxt}>Glutes</Text>
        
      </View>

      <View style={Style.imgCon}>
        <Image 
        style={{width:'100%', height:'100%'}}
        source={require('../../../Images/glutes.gif')}
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
              <Text style={Style.headingText}> Glutes Routine</Text>
              <Text style={Style.bodyTxt}> Glutes are the largest muscles in your body and have very important functions. They are responsible for maintaining balance and power when we jump, walk, or run. </Text>
              <Text style={Style.bodyTxt}>
              We spoke to two certified personal trainers to figure out the best exercises to strengthen your glutes. However, you should always consult a doctor or personal trainer before starting a new exercise regimen. 
              </Text>
        </View>

    </View>
  )
}

export default WeightStrech