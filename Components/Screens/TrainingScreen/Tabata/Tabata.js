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
        <Text style={Style.setHeadTxt}>Express Tabata</Text>
        
      </View>

      <View style={Style.imgCon}>
        <Image 
        style={{width:'100%', height:'100%'}}
        source={require('../../../Images/Tabata.gif')}
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
              <Text style={Style.headingText}> Tabata Exercise</Text>
              <Text style={Style.bodyTxt}> Walk into any boot camp-style class, and you’re likely to be hit with rounds of high-intensity interval training. And while there can be lots of variation, the principle is always the same: all-out effort followed by recovery.</Text>
              <Text style={Style.bodyTxt}>
              But there’s one classic style worth adding to your repertoire if you haven’t already tried it: Tabata. This high-intensity interval training style was developed by Japanese professor Dr. Izumi Tabata in the late 1990s to train Olympic speed skaters. Trusted Source 
              </Text>
        </View>

    </View>
  )
}

export default WeightStrech