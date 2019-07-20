import React, {Component} from 'react';
import {TextInput,Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons as Icon} from '@expo/vector-icons';
//get icon name from here https://materialdesignicons.com/
export default class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      secureTextEntry:true,
      iconName:"account",
      label:'',
    }
  }
onIconpress =() => {
let iconName=(this.state.secureTextEntry) ? "eye-off" :"eye";
this.setState({
  secureTextEntry: !this.state.secureTextEntry,
  iconName: iconName
});
}
render(){
  return(
<View style={styles.inputcontainer}>
<Text style={styles.label}>{this.props.label}</Text>
<TextInput  // {...this.props}
placeholder={this.props.placeholder}
style={styles.inputst}
//secureTextEntry={this.state.secureTextEntry}
/>
<TouchableOpacity >
<Icon name={this.state.iconName} size={25} color={'#2980b9'}/>
</TouchableOpacity>
</View>

  );
}
  }
  const styles=StyleSheet.create({
    inputcontainer:{
flex: 1,
 flexDirection: "row",
 //borderBottomWidth: 1,
 height: 40,
alignItems: 'center'
    },
    inputst:{
fontSize: 16,
color: '#000',
paddingLeft: 5,
paddingRight:5,
flex: 2,
borderWidth:  1,
borderRadius:5,
borderColor: '#2c3e50'
    },
    label:{
        flex: 1,
      fontSize: 16,
      paddingLeft: 20,

      color: '#000'
    }
  })
