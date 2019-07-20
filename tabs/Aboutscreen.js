import React from 'react';
import {Text, View, Button, Image,FlatList,ScrollView,StyleSheet,
  ActivityIndicator,TextInput,SafeAreaView,ImageBackground,TouchableOpacity,
  Navigatore,TouchableHighlight,Linking
 } from 'react-native';

 export default class Aboutscreen extends React.Component {
    static navigationOptions = {
        title:  'حول البرنامج',
        tabBarLabel:  'حول البرنامج',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../images/fcls.png')}
                style={{width: 22, height: 22, tintColor: 'white'}}>
            </Image>
        )
    }

    render() {

        return(
<View style={styles.container}>
<Image
          source={require('../assets/splash.png')}
          style={styles.image}
        /> 
        <TouchableOpacity onPress={() => { Linking.openURL('http://www.mzaaq.com/')}}>

            <Text style={styles.textheadcard}>مذاق للاكلات والوصفات</Text>
        </TouchableOpacity>
        
        <Image
          source={require('../assets/mzaaqmobile.png')}
          style={styles.image}
        /> 
 <TouchableOpacity onPress={() => { Linking.openURL('http://www.mzaaq.com/')}}>

<Text style={styles.textheadcard}>زورو موقعنا</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => { Linking.openURL('http://www.mzaaq.com/')}}>

<Text style={styles.textheadcard}>للتواصل معنا</Text>
</TouchableOpacity>
<Text style={styles.textheadcard}>  للبرمجة والتصميم واتس  </Text>
   
   <Text style={styles.textheadcard}>+972568765289</Text>
</View>



        )

    }
       




 }


const styles=StyleSheet.create({
    container:{
      flex: 1,
   // flexDirection: 'column',
      justifyContent: 'center',
     alignItems: 'center',
      backgroundColor: '#34495e',
      paddingTop: 20
    },
    textheadcard:{
        color:'#f1c40f',
        fontWeight:'bold',
        fontSize: 40,
        alignItems:'center',
        alignSelf: 'center',
        },
    heades:{
        flexDirection: 'row-reverse',
      height: 100,
      width: '100%',
      backgroundColor:'#34495e',

    },
    borderstyl:{
      alignItems: 'stretch',
    marginTop: 10,
  //  padding: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 40
  },
  image:{
//marginTop:150,
borderRadius: 40,
    width:100,
    height:100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imags:{
    //resizeMode: 'cover',
    //resizeMode:'stretch',

 width: null,
  height: 200,
   borderRadius: 40
  }
  })