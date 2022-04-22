import { TouchableOpacity, View, Text, ScrollView , Image } from 'react-native'
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
        source={require('../../../Images/BodyFast.gif')}
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
              <Text style={Style.headingText}>Cardio Workout</Text>
              <Text style={Style.bodyTxt}> Cardiovascular exercise, also known as cardio or aerobic exercise, is essential for good health. It gets your heart rate up, making you blood pump faster. This delivers more oxygen throughout your body, which keeps your heart and lungs healthy. </Text>
              <Text style={Style.bodyTxt}>
              Regular cardio exercise can also help you lose weight, get better sleep, and reduce your risk for chronic disease.
              </Text>
              <Text style={Style.bodyTxt}>
              But what if you can’t get outside for a daily run or don’t feel like hitting the gym? There are still plenty of cardio exercises you can do at home.
              </Text>
        </View>

    </View>
  )
}

export default WeightStrech