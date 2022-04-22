import { View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

import Style from './Style'


const DietScreen = ({navigation}) => {
  const handleBacBtn = ()=>{
    navigation.navigate('Activity')
  }
  return (
    <View style={Style.Container}>
      <View style={Style.header}>
      <View style={{width: '10%'}}>
            <Icon name='arrow-left' size={30} color={'white'} style={{marginLeft: '20%'}} onPress={()=> navigation.navigate('Diet')}/>
          </View>
          <View style={{width: '90%'}}>
            <Text style={Style.title}>Yoga To Gain Weight</Text>
          </View>
      </View>
      <ScrollView>
      <View style={Style.headerImage}>
      <Image
      source={require('../../../Images/diet3.jpg')}
      style={{width: '100%' , height: '100%'}}
      />
      </View>
      {/* Heading Area */}
      <View style={Style.heading}>

        <Text style={Style.TextHead}>7 Effective Yoga Posses For Weight Gain</Text>
        <Text style={Style.TextInner}>Yoga reigns as the most trusted and effective method of nourishing and toning one’s body in a holistic sense.</Text>
        <Text style={Style.TextInner}>Although the focus usually for most is on losing weight, for some, gaining weight – the right kind, and not just in fat content – is equally as difficult.</Text>
        {/* <Text style={Style.TextInner}>Although exercise is not required for weight loss on this diet, it is optional. However, the diet recommends against exercise during the first three days.</Text> */}
        
        
        <Text style={Style.TextHead}>Chakrasana (Wheel Pose)</Text>
        <Text style={Style.TextInner}>How to do it: Start by lying down on your back, then place your hands behind your shoulders. Slowly raise your body with the support of your palms and feet, doing your best arch. Stay in the position as long as you are comfortable and concentrate on breathing. Gently lower your body and then take a few minutes break until the next exercise.</Text>
        
        
        <Text style={Style.TextHead}>Dhanurasana (Bow Pose)</Text>
        <Text style={Style.TextInner}>How to do it: Start by lying on your stomach with feet apart. Next, fold your knees, take your hands behinds, catch hold of the ankles, pulling your legs up towards the back. Lift your chest and look straight ahead. Stay in this position for 30-60 seconds and concentrate on deep breathing.</Text>
        
        <Text style={Style.TextHead}>Bhujangasana (Cobra Pose)</Text>
        <Text style={Style.TextInner}>How to do it: Begin by lying down flat on your stomach with legs stretched out and feet facing down. Keep your elbows on your sides with palms flat on the surface. Next, take a deep breath, lift your chest and abdomen, placing all the body weight on the palms. Make sure the navel is touching the floor. Slowly release the breath and come back to the starting position. Do this 4-5 times.</Text>
        
        
        <Text style={Style.TextHead}>Sarvangasana (Shoulder Stand)</Text>
        <Text style={Style.TextInner}>How to do it: It is important to do this asana on a yoga mat. Place your thighs on the calf muscles, toes pointing out behind you. The back and neck must be erect. Place your hands on the thighs and concentrate on deep breathing. Hold this position for 5-10 minutes. Then stretch out, exhale and relax.</Text>
        
        
        <Text style={Style.TextHead}>Sarvangasana (Shoulder Stand)</Text>
        <Text style={Style.TextInner}>How to do it: To perform this pose, start by lying down on your back with legs together and hands by the side. Then inhale a deep breath, first lifting the hips and next to the legs. Legs need to initially be in a 30° angle and then a 90° angle with the support of the hands-on lower back. Stay in this posture for 30-60 seconds.</Text>

        
        
        <Text style={Style.TextHead}>Matsyasana (Fish Pose) </Text>
        <Text style={Style.TextInner}>How to do it: Begin by lying on the back, with feet together and hands alongside the body. Lift your body and gently curve the back till the head touches the ground. Concentrate on inhaling and exhaling. Hold onto this position for a few seconds and then come back to the starting position. It is important to ensure that this asana is practised early in the morning, hours after a meal.

</Text>
        
        
        <Text style={Style.TextHead}>Pavanamuktasana (Wind Relieving Pose)</Text>
        <Text style={Style.TextInner}>How to do it: For this pose, you will have to start with lying down on your back. Next, lift the legs and bend your knees. Lift your upper body, till your thighs touch the stomach and hug your knees. Lock your fingers and stay in this position for 20-30 seconds. Breathe rhythmically and slowly release the body.</Text>
       
      </View>


      <View style={{margin: 30}}>

      

      </View>
      
      </ScrollView>
    </View>
  )
}

export default DietScreen