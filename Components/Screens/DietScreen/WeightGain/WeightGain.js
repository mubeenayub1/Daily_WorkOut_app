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
            <Text style={Style.title}>7 Days Weight Gain Diet</Text>
          </View>
      </View>
      <ScrollView>
      <View style={Style.headerImage}>
      <Image
      source={require('../../../Images/diet2.jpg')}
      style={{width: '100%' , height: '100%'}}
      />
      </View>
      {/* Heading Area */}
      <View style={Style.heading}>

        <Text style={Style.TextHead}>Weight Gain 7 Day Meal Plan</Text>
        <Text style={Style.TextInner}>Gaining weight can be just as challenging as losing weight. While the main focus is to increase energy and protein intakes, it is also important to maintain a healthy balanced diet without eating too many foods that might have high amounts of calories but little in the way of good nutrition. </Text>
        {/* <Text style={Style.TextInner}>It recommends that you drink 8–12 glasses of water each day to stay hydrated throughout the diet.</Text> */}
        {/* <Text style={Style.TextInner}>Although exercise is not required for weight loss on this diet, it is optional. However, the diet recommends against exercise during the first three days.</Text> */}


        <Text style={Style.TextHead}>Day 1</Text>
        <Text style={Style.TextInner}>Peanut Butter on Wholegrain Toast: Toasted wholegrain bread+ 2 tbsp peanut butter. Drizzle with honey to taste. Serve with 1 hot chocolate, made with milk + 1 serve of fruit (eg. 1 medium pear or orange).</Text>
        <Text style={Style.TextInner}>Chicken and Pasta Salad: Cooked chicken + pasta + 1 cup leafy green vegetables (eg. spinach, rocket) + tomato + avocado + crumbled feta cheese + olive oil/vinegar dressing.</Text>
        <Text style={Style.TextInner}>Lamb Chops and Vegetables: Lamb chop, trimmed & shallow fried in olive oil. Serve with sweet potato mash made with milk and olive oil + 2 cups cooked vegetables.</Text>



        <Text style={Style.TextHead}>Day 2</Text>
        <Text style={Style.TextInner}>Chia Porridge with Fruit: 2 tbsp chia seeds + rolled oats + 1.5 cup full cream milk + 1 serve of fruit (eg. 1 medium banana or 6 dried prunes).</Text>
        <Text style={Style.TextInner}>Egg, Cheese and Salad Wrap: 2 boiled & mashed eggs + 2 cheese slices + avocado + 1 cup salad vegetables (eg. lettuce, cucumber, carrot, capsicum) rolled up in tortilla bread (make 2 wraps) + 1 cup fruit juice.</Text>
        <Text style={Style.TextInner}>Baked Salmon, Cous Cous and Vegetables: Oven baked salmon fillet, sprinkled with sesame oil and sesame seeds + wholemeal cous cous + 2 cups cooked vegetables. Serve with hommus.</Text>


        
        <Text style={Style.TextHead}>Day 3</Text>
        <Text style={Style.TextInner}>Sweet Potato Spanish Omelette (1 serve): Serve with 1 cafe latte or hot chocolate made with full cream milk.</Text>
        <Text style={Style.TextInner}>Lentil, Vegetables and Barley Soup: Lentils with 1 cup chopped vegetables (eg. carrot, pumpkin, celery, onion), vegetable stock and barley. Serve with dollop of natural yoghurt. + 1 serve of fruit.</Text>



        <Text style={Style.TextHead}>Day 4</Text>
        <Text style={Style.TextInner}>Wholegrain Cereal with Milk and Fruit: Wholegrain flaky cereal + full cream milk + 2 tbsp linseeds + 1 serve of fruit (eg. 6 dried apricot halves or 4 small plums).</Text>
        <Text style={Style.TextInner}>Chicken and Noodle Stir-fry: Sliced lean chicken + Hokkein noodles + 1 cup vegetables (eg. beans, capsicum, spinach, carrot) cooked in sesame oil + sweet soy sauce dressing. Sprinkle with sesame seeds.</Text>
        <Text style={Style.TextInner}>Nasi Goreng Tray Bake (1 serve): Serve with 2 cup mixed salad vegetables.</Text>



        <Text style={Style.TextHead}>Day 5</Text>
        <Text style={Style.TextInner}>Poached Eggs with Sauteed Field Mushroom and Avocado (1 serve): Serve with 1 cafe latte or hot chocolate made with full cream milk.</Text>
        <Text style={Style.TextInner}>Fish and Chips: Dip fish fillets in flour, egg then breadcrumbs and shallow fry in canola oil. Serve with homemade thick potato chunky chips, lemon wedges and 2 cups mixed salad vegetables with olive oil dressing. + 1 serve of fruit.</Text>
        <Text style={Style.TextInner}>Mango Chicken and Corn: Grilled chicken thighs served with mango salsa, corn on the cob & 1.5 cups baked vegetables (eg. carrot, onion, beans) in olive oil.</Text>



        <Text style={Style.TextHead}>Day 6</Text>
        <Text style={Style.TextInner}>Fruit Toast with Berry Smoothie: Slices of fruit toast spread with butter and/or jam to taste. Serve with a smoothie made with 1 cup full cream milk + 1 cup berries + 2 tbsp linseed/sunflower/almond meal.</Text>
        <Text style={Style.TextInner}>Today’s meals may include an unlimited amount of vegetables, but no potatoes.</Text>
        <Text style={Style.TextInner}>Vegetarians may replace meat with either brown rice or cottage cheese.</Text>
        <Text style={Style.TextInner}>Increase your water intake by two glasses to flush out extra uric acid.</Text>



        <Text style={Style.TextHead}>Day 7</Text>
        <Text style={Style.TextInner}>Beef and Noodle Soup: Thinly sliced beef + fresh flat rice noodles + 1 cup vegetables (eg. bean sprouts, carrot, broccoli) cooked in vegetable stock. Sprinkle with diced green onion. + 1 serve of fruit (eg. 1 medium apple or banana).</Text>
        <Text style={Style.TextInner}>Pork Roast and Vegetables: Lean pork roast + baked potato + 1.5 cups baked vegetables + olive oil (for cooking).</Text>
      </View>


      <View style={{margin: 30}}>

      

      </View>
      
      </ScrollView>
    </View>
  )
}

export default DietScreen