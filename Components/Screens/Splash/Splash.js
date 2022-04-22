import { View, Image } from 'react-native'
import style from './style'
import React from 'react'

const Splash = () => {
  return (
    <View style={style.container}>
        <View style={style.mainLogo}>
            <Image
            style={style.tinyLogo}
            source={require('../../Images/abc.jpeg')}
            />
        </View>
    </View>
  )
}

export default Splash