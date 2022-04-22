import { View, Text , ScrollView, Image, TouchableOpacity} from 'react-native'
import ArrowIcon from 'react-native-vector-icons/AntDesign'
import ImagePicker from 'react-native-image-crop-picker';
import { useSelector } from 'react-redux';
import Style from './style.js'
import React, { useState } from 'react'






const Profile = ( { navigation } ) => {
  const [ image , setImage] = useState(require( '../../Images/head.jpeg' ))
  const [ nImage , setnImage] = useState('')

  const choosePhotoFromLibrary = ()=>{
    //   setnImage('')
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log(image.path);
        setnImage(image.path)
      });
}
const names  = useSelector(state => state.nameList)


  return (
    <ScrollView  style={Style.Container}>
        <View style={Style.Header}>
            <View style={Style.Arrow}>
                <ArrowIcon name='arrowleft' size={25} color= 'black' onPress={ () => {navigation.navigate('Diet')} }/>
            </View>
            <View>
                <Text style={Style.HeadingText}>Account Information</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => {navigation.navigate('EditProfile')}}>
                <Text style={Style.LeftText}>Edit</Text>
                </TouchableOpacity>
            </View>
        </View>
        {/* Image Section */}
        <View style={Style.ImageSection}>
          <TouchableOpacity onPress={choosePhotoFromLibrary}>
          <Image
          style={Style.tinyLogo}
          source={nImage==='' ? image :{uri : nImage} } /> 
          

          </TouchableOpacity>
        </View>


        {/* Profile Data Section */}

        <View style={Style.profileData}>
            <View style={Style.SectionA}>
                <Text style={Style.leftSide}>Name</Text>
                <Text style={Style.rightSide}> {names[0]} </Text>
            </View>
            <View style={Style.SectionA}>
                <Text style={Style.leftSide}>Weight</Text>
                <Text style={Style.rightSide}> {names[1]} kg </Text>
            </View>
            <View style={Style.SectionA}>
                <Text style={Style.leftSide}>Age</Text>
                <Text style={Style.rightSide}> {names[2]} </Text>
            </View>
            <View style={Style.SectionA}>
                <Text style={Style.leftSide}>Email</Text>
                <Text style={Style.rightSide}> {names[3]} </Text>
            </View>
        </View>

    </ScrollView>
  )
}

export default Profile