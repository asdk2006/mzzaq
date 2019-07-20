import React from 'react';
import {TouchableOpacity, View, Text,Button,Image,WebView,Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,createSwitchNavigator 
} from 'react-navigation';
import FirstScreen from './tabs/FirstScreen';
import Catagorynav from './tabs/Catagorynav';
import Feednew from './tabs/Feednew';
import SecondScreen from'./tabs/SecondScreen';
import Foddclass from './tabs/Foddclass';
import Paypal from './tabs/PayPalPayment';
import Aboutscreen from './tabs/Aboutscreen';
import Catagorypage from './tabs/Catagorypage';

const FirstStack = createStackNavigator({
  FirstScreen: { screen: FirstScreen, },
  Feednews: { screen: Feednew },
  Catagorynavs:{screen:Catagorynav},
  Paypals:{screen:Paypal},
});
const SecondStack = createStackNavigator({
  SecondScreen: { screen: SecondScreen ,},
  Feednews: { screen: Feednew }, Paypals:{screen:Paypal}, Catagorynavs:{screen:Catagorynav},
});
const Foddclassstack = createStackNavigator({
  Foddclass: { screen: Aboutscreen, },
  Feednews: { screen: Feednew }, Paypals:{screen:Paypal}, Catagorynavs:{screen:Catagorynav},
});

const Catagoryclassstack = createStackNavigator({
  Catagoryclass: { screen: Catagorypage },
  Feednews: { screen: Feednew }, Paypals:{screen:Paypal}, Catagorynavs:{screen:Catagorynav},
});


export default createAppContainer(createBottomTabNavigator({
 
  FirstScreen:{screen:FirstStack,  
    navigationOptions: { tabBarIcon:({tintColor})=>(
      <Image
                source={require('./images/wsfa1.png')}
                style={{width: 22, height: 22, tintColor: 'white'}}>
            </Image>
  ),
     
    tabBarLabel: 'الوصفات',
   
    tabBarOptions: {  
    labelStyle: {
      fontSize: 20,
      color:'white'
    },
    style: {
      backgroundColor: '#34495e',
    },
   
  }}
  },
   
  SecondScreen:{
    screen:SecondStack,
    navigationOptions:{ 
      tabBarIcon: ({tintColor}) => (
        <Image
            source={require('./images/icon-shopping.png')}
            style={{width: 22, height: 22, tintColor: 'white'}}>
        </Image>
    ),
      tabBarLabel: 'التسوق',
      tabBarOptions: {
       
        labelStyle: {
          fontSize: 20,
          color:'white'
        },
        style: {
          backgroundColor: '#34495e',
        },
  
  },
 
  }
},
Foddclass:{
  screen:Foddclassstack,
  navigationOptions:{  tabBarIcon: ({tintColor}) => (
    <Image
        source={require('./images/fcls.png')}
        style={{width: 22, height: 22, tintColor: 'white'}}>
    </Image>
),
    tabBarLabel: 'حول البرنامج',
    tabBarOptions: {
      labelStyle: {
        fontSize: 20,
        color:'white'
      },
      style: {
        backgroundColor: '#34495e',
      },
   
}
}
},
Catagoryclass:{
  screen:Catagoryclassstack,
  navigationOptions:{  tabBarIcon: ({tintColor}) => (
    <Image
        source={require('./images/catagoris.png')}
        style={{width: 22, height: 22, tintColor: 'white'}}>
    </Image>
),
    tabBarLabel: ' التصنيفات',
    tabBarOptions: {
      labelStyle: {
        fontSize: 20,
        color:'white'
      },
      style: {
        backgroundColor: '#34495e',
      },
   
}
}

},
}
)
);
