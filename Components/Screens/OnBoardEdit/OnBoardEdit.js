import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const OnBoardEdit = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={()=>{ navigation.navigate('Home') }}>
          <Text> Click Me </Text>
      </TouchableOpacity>
    </View>
  )
}

export default OnBoardEdit