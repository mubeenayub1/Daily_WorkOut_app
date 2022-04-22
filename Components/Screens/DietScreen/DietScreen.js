import { View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import React from 'react'
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
            <Text style={Style.title}>7 Days Weight Loss Diet</Text>
          </View>
      </View>
      <ScrollView>
      <View style={Style.headerImage}>
      <Image
      source={require('../../Images/diet1.png')}
      style={{width: '100%' , height: '100%'}}
      />
      </View>
      {/* Heading Area */}
      <View style={Style.heading}>

        <Text style={Style.TextHead}>What do you eat on the diet?</Text>
        <Text style={Style.TextInner}>The GM diet is divided into seven days, with different rules that apply to each day.</Text>
        <Text style={Style.TextInner}>It recommends that you drink 8–12 glasses of water each day to stay hydrated throughout the diet.</Text>
        <Text style={Style.TextInner}>Although exercise is not required for weight loss on this diet, it is optional. However, the diet recommends against exercise during the first three days.</Text>
        <Text style={Style.TextHead}>Day 1</Text>
        <Text style={Style.TextInner}>Eat only fruit — any kind except bananas.</Text>
        <Text style={Style.TextInner}>No maximum amount of fruit is specified.</Text>
        <Text style={Style.TextInner}>The diet especially encourages followers to eat melons to increase weight loss.</Text>
        <Text style={Style.TextHead}>Day 2</Text>
        <Text style={Style.TextInner}>Eat only vegetables in raw or cooked form.</Text>
        <Text style={Style.TextInner}>The diet does not specify a maximum amount of vegetables.</Text>
        <Text style={Style.TextInner}>Limit potatoes to breakfast only.</Text>
        <Text style={Style.TextHead}>Day 3</Text>
        <Text style={Style.TextInner}>Eat only fruits and vegetables of any kind except bananas and potatoes.</Text>
        <Text style={Style.TextInner}>The diet doesn’t specify a maximum amount.</Text>
        <Text style={Style.TextHead}>Day 4</Text>
        <Text style={Style.TextInner}>Consume only bananas and milk.</Text>
        <Text style={Style.TextInner}>You can eat up to 6 large or 8 small bananas.</Text>
        <Text style={Style.TextInner}>Drink 3 glasses of milk, preferably skim.</Text>
        <Text style={Style.TextHead}>Day 5</Text>
        <Text style={Style.TextInner}>Eat two 10-ounce (284-gram) portions of beef, chicken or fish.</Text>
        <Text style={Style.TextInner}>In addition to the meat, you may only eat 6 whole tomatoes.</Text>
        <Text style={Style.TextInner}>The diet especially encourages followers to eat melons to increase weight loss.</Text>
        <Text style={Style.TextHead}>Day 6</Text>
        <Text style={Style.TextInner}>Eat only two 10-ounce (284-gram) portions of beef, chicken or fish.</Text>
        <Text style={Style.TextInner}>Today’s meals may include an unlimited amount of vegetables, but no potatoes.</Text>
        <Text style={Style.TextInner}>Vegetarians may replace meat with either brown rice or cottage cheese.</Text>
        <Text style={Style.TextInner}>Increase your water intake by two glasses to flush out extra uric acid.</Text>
        <Text style={Style.TextHead}>Day 7</Text>
        <Text style={Style.TextInner}>Eat only brown rice, fruits, fruit juice and vegetables.</Text>
        <Text style={Style.TextInner}>No maximum amount of fruit is specified.</Text>
      </View>


      <View style={{margin: 30}}>

      

      </View>
      
      </ScrollView>
    </View>
  )
}

export default DietScreen