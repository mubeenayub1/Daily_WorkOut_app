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
            <Text style={Style.title}>Tips For Underweight</Text>
          </View>
      </View>
      <ScrollView>
      <View style={Style.headerImage}>
      <Image
      source={require('../../../Images/diet1.png')}
      style={{width: '100%' , height: '100%'}}
      />
      </View>
      {/* Heading Area */}
      <View style={Style.heading}>

        <Text style={Style.TextHead}>Tips For Underweight</Text>
        <Text style={Style.TextInner}>
        Although being lean can often be healthy, being underweight can be a concern if it's the result of poor nutrition or if you are pregnant or have other health concerns. So, if you're underweight, see your doctor or dietitian for an evaluation. Together, you can plan how to meet your goal weight.
        </Text>
       
       
        <Text style={Style.TextHead}>Eat more frequently</Text>
        <Text style={Style.TextInner}>When you're underweight, you may feel full faster. Eat five to six smaller meals during the day rather than two or three large meals</Text>
       
       
        <Text style={Style.TextHead}>Choose nutrient-rich foods</Text>
        <Text style={Style.TextInner}>As part of an overall healthy diet, choose whole-grain breads, pastas and cereals; fruits and vegetables; dairy products; lean protein sources; and nuts and seeds.</Text>
       
       
        <Text style={Style.TextHead}>Try smoothies and shakes</Text>
        <Text style={Style.TextInner}>Don't fill up on diet soda, coffee and other drinks with few calories and little nutritional value. Instead, drink smoothies or healthy shakes made with milk and fresh or frozen fruit, and sprinkle in some ground flaxseed. In some cases, a liquid meal replacement may be recommended</Text>
        
       
       
        <Text style={Style.TextHead}>Watch when you drink</Text>
        <Text style={Style.TextInner}>Some people find that drinking fluids before meals blunts their appetite. In that case, it may be better to sip higher calorie beverages along with a meal or snack. For others, drinking 30 minutes after a meal, not with it, may work.</Text>
        
       
       
        <Text style={Style.TextHead}>Make every bite count</Text>
        <Text style={Style.TextInner}>Snack on nuts, peanut butter, cheese, dried fruits and avocados. Have a bedtime snack, such as a peanut butter and jelly sandwich, or a wrap sandwich with avocado, sliced vegetables, and lean meat or cheese.</Text>
        
       
       
        <Text style={Style.TextHead}>Top it off</Text>
        <Text style={Style.TextInner}>Add extras to your dishes for more calories — such as cheese in casseroles and scrambled eggs, and fat-free dried milk in soups and stews.</Text>
    
    
       </View>


      <View style={{margin: 30}}>

      

      </View>
      
      </ScrollView>
    </View>
  )
}

export default DietScreen