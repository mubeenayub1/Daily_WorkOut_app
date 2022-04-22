import React, {useEffect , useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../Screens/onBoarding/OnBoarding';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtomTab from '../Navigation/ButtomTab'
import Splash from '../Screens/Splash/Splash'
import EditProfile from "../Screens/editProfile/EditProfile"
import DietScreen from "../Screens/DietScreen/DietScreen"
import Activity from "../Screens/Activity/Activity"
import WeightGain from "../Screens/DietScreen/WeightGain/WeightGain"
import MonDays from "../Screens/DietScreen/30Days/MonDays"
import YogaPos from "../Screens/DietScreen/YogaPos/YogaPos"
import BodyFast from '../Screens/TrainingScreen/BodyFast/BodyFast'
import Glutes from '../Screens/TrainingScreen/Glutes/Glutes'
import IntervalPilates from '../Screens/TrainingScreen/IntervalPilates/IntervalPilates'
import Tabata from '../Screens/TrainingScreen/Tabata/Tabata'
import WeightStrech from '../Screens/TrainingScreen/WeightStrech/WeightStrech'
import CoreControl from '../Screens/TrainingScreen/CoreControl/CoreControl';
import FullBody from '../Screens/FullyBodyEx/FullBody';
import Burpees from '../Screens/FullyBodyEx/Burpees/Burpees';
import Cardio from '../Screens/FullyBodyEx/Cardio/Cardio';
import Lunges from '../Screens/FullyBodyEx/Lunges/Lunges';
import Pushups from '../Screens/FullyBodyEx/Pushups/Pushups';
import Squats from '../Screens/FullyBodyEx/Squats/Squat';
import OnBoardEdit from '../Screens/OnBoardEdit/OnBoardEdit';
// import Home from '../Screens/Home/Home'

const Stack = createNativeStackNavigator();

const MainNav = () => {
    const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);
    
  React.useEffect(async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    } else {
      setIsAppFirstLaunched(false);
    }

    // AsyncStorage.removeItem('isAppFirstLaunched');
  }, []);


    const [ spash , setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 2000);
  }, [])
  return (
    isAppFirstLaunched != null && (    
    <NavigationContainer>
      
      <Stack.Navigator>
            {isAppFirstLaunched && (
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
              options={{headerShown: false}}
            />
             )}
          {/* If Splash is true then return Complete Stack.Screen Component otherwise return null */}
        {
          spash ? (
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
          ): null
        }
        {/*  */}
        <Stack.Screen name="ButtomTab" component={ButtomTab} options={{headerShown: false}} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown: false}} />
        <Stack.Screen name="DietScreen" component={DietScreen} options={{headerShown: false}} />
        <Stack.Screen name="Activity" component={Activity} options={{headerShown: false}} />
        <Stack.Screen name="WeightGain" component={WeightGain} options={{headerShown: false}} />
        <Stack.Screen name="MonDays" component={MonDays} options={{headerShown: false}} />
        <Stack.Screen name="YogaPos" component={YogaPos} options={{headerShown: false}} />
        {/* <Stack.Screen name="Home" component={Home} options={{headerShown: false}} /> */}
        <Stack.Screen name="BodyFast" component={BodyFast} options={{headerShown: false}} />
        <Stack.Screen name="Tabata" component={Tabata} options={{headerShown: false}} />
        <Stack.Screen name="WeightStrech" component={WeightStrech} options={{headerShown: false}} />
        <Stack.Screen name="CoreControl" component={CoreControl} options={{headerShown: false}} />
        <Stack.Screen name="IntervalPilates" component={IntervalPilates} options={{headerShown: false}} />
        <Stack.Screen name="Glutes" component={Glutes} options={{headerShown: false}} />
        <Stack.Screen name="FullBody" component={FullBody} options={{headerShown: false}} />
        <Stack.Screen name="Burpees" component={Burpees} options={{headerShown: false}} />
        <Stack.Screen name="Cardio" component={Cardio} options={{headerShown: false}} />
        <Stack.Screen name="Lunges" component={Lunges} options={{headerShown: false}} />
        <Stack.Screen name="Pushups" component={Pushups} options={{headerShown: false}} />
        <Stack.Screen name="Squats" component={Squats} options={{headerShown: false}} />
        <Stack.Screen name="OnBoardEdit" component={OnBoardEdit} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    )
 
  )
}

export default MainNav