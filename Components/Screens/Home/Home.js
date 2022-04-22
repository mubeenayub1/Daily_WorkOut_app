import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions
} from 'react-native';
// import Icon from 'react-native-dynamic-vector-icons';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather'
import { useSelector } from 'react-redux';
import style from './style';
const {width , height} = Dimensions.get('window')
const Home = ({ navigation }) => {

  const names  = useSelector(state => state.nameList)
  return (
    
    <ScrollView contentContainerStyle={style.container} style={{flex:1}} showsHorizontalScrollIndicator={false}>
      <View style={style.header}>
        <View style={style.innerHeader}>
          <View style={{flexDirection: 'row'}}>
            <Text style={style.title}>Hi, </Text>
            <Text style={style.title}>{names[0]}</Text>
          </View>
          <View style={style.iconSide}>
            <Icon
              name="bell"
              type="Feather"
              size={18}
              color="#522ea9"
              onPress={() => {}} m 
            />
          </View>
        </View>
      </View>

      {/* Search Bar */}

      {/* <View style={style.searchSection}>
        <Icons
          name="search1"
          type="AntDesign"
          size={20}
          color="#522ea9"
          style={{width: '10%', marginHorizontal: '4%'}}
        />
        <TextInput
          style={style.input}
          placeholder="Search Something"
          placeholderTextColor={'gray'}
          maxLength={40}
        />
      </View> */}

      {/* Category Section */}
      <View style={style.categorySec}>
        <View style={style.cateHeading}>
          <View style={style.leftCate}>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Trending
            </Text>
          </View>
          <View style={style.rightCate}>
            <TouchableOpacity onPress={()=>navigation.navigate('FullBody')}>
            <Text
              style={{
                color: 'gray',
                fontSize: 15,
                fontFamily: 'Fredoka-Regular',
              }}>
            
            </Text>
            </TouchableOpacity>


          </View>
        </View>
        <View style={style.categoryItem}>
              
          <View style={style.item}>
            <TouchableOpacity onPress={()=>navigation.navigate('Cardio')}>
            <Image
              style={style.itemLogo}
              source={require('../../Images/item1.png')}
            />
            <Text style={{color: 'black'}}>Cardio</Text>
            </TouchableOpacity>
          </View>

          <View style={style.item}>
            <TouchableOpacity onPress={()=>navigation.navigate('YogaPos')}>
            <Image
              style={style.itemLogo}
              source={require('../../Images/item2.png')}
            />
            <Text style={{color: 'black'}}>Yoga</Text>
            </TouchableOpacity>
          </View>

          <View style={style.item}>
            <TouchableOpacity onPress={()=>navigation.navigate('Activity')}>
            <Image
              style={style.itemLogo}
              source={require('../../Images/item3.png')}
            />
            <Text style={{color: 'black'}}>Training</Text>
            </TouchableOpacity>
          </View>

          <View style={style.item}>
            <TouchableOpacity onPress={()=>navigation.navigate('WeightStrech')}>
            <Image
              style={style.itemLogo}
              source={require('../../Images/item.png')}
            />
            <Text style={{color: 'black'}}>Strech</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>

      {/* Main Image  */}
      <View
        style={{
          width: '88%',
          height: height/100*28,
          alignSelf: 'center',
          top: '6%',
          borderRadius: 10,
          overflow: 'hidden',
          marginTop: 10
        }}>
        <ImageBackground
          source={require('../../Images/head.jpeg')}
          style={style.imgCon}>
          <LinearGradient
            colors={['#774fbf', '#522ea9']}
            style={style.headerButton}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <TouchableOpacity onPress={()=>navigation.navigate('FullBody')}>
              <Text style={style.headerText}>Start Training</Text>
            </TouchableOpacity>
          </LinearGradient>
        </ImageBackground>
      </View>

      {/* Popular Workout Section */}

      <View
        style={{
          top: '10%',
          width: '90%',
          alignSelf: 'center'
          
        }}>
        <View style={style.cateHeading}>
          <View style={style.leftCate}>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Training
            </Text>
          </View>
          <View style={style.rightCate}>
          <TouchableOpacity onPress={()=> navigation.navigate('Training')}>
            <Text
              style={{
                color: 'gray',
                fontSize: 15,
                fontFamily: 'Fredoka-Regular',
              }}>
              View All
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style= {{color: 'gray'}}>Workouts: 6</Text>

        {/* 2nd Scrool View */}
        
      </View>
      <View style={{width: '90%', height: height/100*40, alignSelf:'center', top: '10%', marginBottom: '20%'}}>

              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity onPress={()=> navigation.navigate('WeightStrech')} activeOpacity={0.9}>
              <View style={{top:'2%'}}>
              <ImageBackground source={require('../../Images/Image1.jpeg')} style={style.tinyLogo} imageStyle={{ borderRadius: 10}} >
              <Text style={{color:'black', fontSize: 23, top: '100%', left: '2%', fontFamily: 'Roboto-Regular'}}>Full Body Strech</Text> 
              <Text style={{color:'black', fontSize: 15, top: '100%', left: '2%', fontFamily: 'Fredoka-Regular', color:'#522ea9'}}>Beginner</Text> 
              </ImageBackground>
              
              </View>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={()=> navigation.navigate('IntervalPilates')} activeOpacity={0.9}>
              <View style={{top:'2%'}}>
              <ImageBackground source={require('../../Images/Image6.jpg')} style={style.tinyLogo} imageStyle={{ borderRadius: 10}} >
              <Text style={{color:'black', fontSize: 23, top: '100%', left: '2%', fontFamily: 'Fredoka-Regular'}}>Interval Pilates</Text> 
              <Text style={{color:'black', fontSize: 15, top: '100%', left: '2%', fontFamily: 'Fredoka-Regular', color:'#522ea9'}}>Beginner</Text>
              </ImageBackground>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> navigation.navigate('Tabata')} activeOpacity={0.9}>
              <View style={{top:'2%'}}>
              <ImageBackground source={require('../../Images/Image4_1.jpeg')} style={style.tinyLogo} imageStyle={{ borderRadius: 10}} >
              <Text style={{color:'black', fontSize: 23, top: '100%', left: '2%', fontFamily: 'Fredoka-Regular'}}>Express Tabata</Text> 
              <Text style={{color:'black', fontSize: 15, top: '100%', left: '2%', fontFamily: 'Fredoka-Regular', color:'#522ea9'}}>Beginner</Text>
              </ImageBackground>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> navigation.navigate('BodyFast')} activeOpacity={0.9}>
              <View style={{top:'2%'}}>
              <ImageBackground source={require('../../Images/image2.jpeg')} style={style.tinyLogo} imageStyle={{ borderRadius: 10}} >
              <Text style={{color:'black', fontSize: 23, top: '100%', left: '2%', fontFamily: 'Fredoka-Regular'}}>Full Body Fast</Text> 
              <Text style={{color:'black', fontSize: 15, top: '100%', left: '2%', fontFamily: 'Fredoka-Regular', color:'#522ea9'}}>Beginner</Text>
              </ImageBackground>
              </View>
              </TouchableOpacity>
              
              <View style={{top:'2%'}}>
              
              </View>              


              </ScrollView>
      </View>
      

    </ScrollView>
    
  );
};

export default Home;
