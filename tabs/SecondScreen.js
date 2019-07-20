/**
 * Created by hoangnd on 7/4/17.
 */
import React from 'react';
import {Text, View,  Image,ScrollView,StyleSheet,Linking} from 'react-native';
import { Card ,Button } from 'react-native-elements';
import Paypal from './PayPalPayment';
//import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

export default class SecondScreen extends React.Component {
    static navigationOptions = {
        title:'التسوق',
        tabBarLabel: 'التسوق',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../images/icon-shopping.png')}
                style={{width: 22, height: 22, tintColor: 'white'}}>
            </Image>
        )
    }
    constructor(props){
        super(props)
    }
    //paypal cklick
   
  //
 

  
   
        render() {
        return(
         
            <ScrollView style={backgroundColor="#f1c40f"} > 
                <Text style={styles.textheadcard}>كتاب</Text>
<View style={styles.cardview}>
<Text style={styles.textheadcard}>كتاب</Text>

<Image
          source={require('../images/fullksm.jpg')}
          style={styles.myimage}
        /> 
  <Button  
   // onPress={() => this.props.navigation.navigate('Paypals')}
   //http://www.mzaaq.com/shop/
   onPress={() => {Linking.openURL('http://www.mzaaq.com/shop/')}}
  buttonStyle={{
    backgroundColor: "#16a085",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }}
  containerStyle={{ marginTop: 20 }}
 
  title=' 29.00$ شراء'
/>
    </View>   
    <View  style={styles.cardview}>
    <Text style={styles.textheadcard}>كتاب</Text>
<Image
          source={require('../images/ksm1.jpg')}
          style={styles.myimage}
        /> 
<Button 
 onPress={() => {Linking.openURL('http://www.mzaaq.com/shop/')}}
buttonStyle={{
    backgroundColor: "#16a085",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }}
  containerStyle={{ marginTop: 20 }}
 
  title='12.00$ شراء'
/>
    </View> 
    <View  style={styles.cardview}>
    <Text style={styles.textheadcard}>كتاب</Text>
<Image
          source={require('../images/ksm2.jpg')}
          style={styles.myimage}
        /> 
<Button 
 onPress={() => {Linking.openURL('http://www.mzaaq.com/shop/')}}
buttonStyle={{
    backgroundColor: "#16a085",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }}
  containerStyle={{ marginTop: 20 }}
 
  title='12.00$ شراء'
/>
    </View> 
    <View  style={styles.cardview}>
    <Text style={styles.textheadcard}>كتاب</Text>
<Image
          source={require('../images/ksm3.jpg')}
          style={styles.myimage}
        /> 
<Button 
 onPress={() => {Linking.openURL('http://www.mzaaq.com/shop/')}}

buttonStyle={{
    backgroundColor: "#16a085",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }}
  containerStyle={{ marginTop: 20 }}
 
  title='12.00$ شراء'
/>
    </View> 
   
        </ScrollView>
             
        );
    }
}


const styles = StyleSheet.create({
container:{
    flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20',

},
cardview:{
flex:1,
flexDirection: 'column',
justifyContent:"center",
alignItems:"center",
height:500,
backgroundColor:"#34495e",
marginTop:20,


},
myimage:{
    width:'80%',
    height:350,
    borderRadius: 20,
    justifyContent:'center',
alignItems:'center',
alignSelf: 'center',
resizeMode:'stretch',
borderColor:'#f1c40f',

},
textheadr:{
    alignContent:"center",
    fontWeight: 'bold',


},
textheadcard:{
color:'#f1c40f',
fontWeight:'bold',
fontSize: 40,
alignItems:'center',
alignSelf: 'center',
}

})