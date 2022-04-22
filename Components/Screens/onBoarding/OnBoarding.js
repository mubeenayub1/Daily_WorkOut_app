import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#282534', white: '#fff'};

const slides = [
  {
    id: '1',
    image: require('../../Images/gymImg.jpg'),
    title: 'Unlimited Fitness Exercises',
    subtitle: 'Success usually comes to those who are too busy to be looking for it.',
  }
];

const Slide = ({item}) => {
  return (
    <View style={styles.Container}>
       <Image
        source={item?.image}
        style={{height: '45%', width}}
      /> 
      <View style={{width:'100%', height:'70%',backgroundColor:'white', borderRadius:50, marginTop: -30, alignItems:'center'}}>
                <Text style={{fontSize:30, marginTop: 90, color:'black', fontFamily:'Poppins-SemiBold'}}>Get Unlimited Exercice</Text>
                <Text style={{marginTop: 20, color:'black', fontFamily:'Poppins-Regular'}}>Get Unlimited Exercice Get Unlimited</Text>
                <Text style={{color:'black', fontFamily:'Poppins-Regular'}}>Get Unlimited Exercice Get Unlimited</Text>
                <Text style={{color:'black', fontFamily:'Poppins-Regular'}}>Get Unlimited Exercice</Text>
                
      </View>
      
    </View>
  );
};

const OnboardingScreen = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };


  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
      

        {/* Render buttons */}
        <View style={{marginBottom: 100}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('EditProfile')}>
                <Text style={{fontWeight: 'bold', fontSize: 15, color:'white'}}>
                  SAVE NOW
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: COLORS.white,
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: COLORS.white,
                  }}>
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.75}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
      width:'100%',
      flex:1,
  },

  subtitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
  },
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#512da8',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnboardingScreen;
