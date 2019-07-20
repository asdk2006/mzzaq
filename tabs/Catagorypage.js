import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,FlatList,ScrollView,TouchableHighlight } from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
export default class Catagorypage extends Component {
    static navigationOptions = {
        title: 'التصنيفات',
          tabBarLabel: 'التصنيفات',
          tabBarIcon: ({tintColor}) => (
              <Image
                  source={require('../images/catagoris.png')}
                  style={{width: 22, height: 22, tintColor: 'blue'}}>
              </Image>
          )
      }
  constructor(props) {
    super(props);
    this.fulldata = [];
    this.data=[];
    this.pakupdata=[];
this.postid=0;
this.itemid=0;
    this.state = {
      animating:true,
loadpage:false,
mitemid:0,
      
    };
  }
  

  _navigate() {
   
    console.log('mprops='+this.state.mitemid);
    
    this.props.navigation.navigate('Catagorynavs',{postids: this.state.mitemid})}
    buttonClickListener= () => {
      const { mitemid }  = this.state ;
    
     //this.setState.mitemid=mitemid
  }

  

ftechData=async()=>{
  this.setState({loadpage:true});
  //response
  
  const response =await
 
  fetch ('api here =0');
   
     //posts
  
   const posts= await
   response.json();
  
     this.setState({data:posts,errors:posts|| null,loadpage:false});
     this.setState({pakupdata:posts});
  
  
      }
  
      componentDidMount(){
        //page loading
        this.ftechData();
  
      }
  render() {
    const postids=this.state.postid;
    return (
               <FlatList
data={this.state.data}
pakupdata={this.state.pakupdata}
keyExtractor = { (item, index) => index.toString() }
renderItem={({item})=>
<View style={styles.mb}>
{this.state.showComponent &&<Text ref='myText'>{item.id}</Text>}
<TouchableHighlight   onPress={() =>{ this.props.navigation.navigate('Catagorynavs',{postids:item.id});}}>
<Image style={styles.imn} source={require('../assets/splash.png')}/></TouchableHighlight>
      <TouchableHighlight style={{width:'60%'}} onPress={() =>{ this.props.navigation.navigate('Catagorynavs',{postids:item.id});}}>
      <View style={{ flex:1 , justifyContent:'center', backgroundColor: '#34495e',alignItems: 'center',}}>
      <Text style ={styles.itxt}>{item.name}</Text></View></TouchableHighlight>
</View>
}
/>

 

      
    );
  }
}
const styles=StyleSheet.create({
  container:{
  flex: 1,
  flexDirection: 'column',
    justifyContent: 'center',
  //  alignItems: 'center',
    backgroundColor: '#34495e',
    //paddingTop: 20
  },
  itxt:{fontSize:26 ,
    width: '100%',
     color :'white' ,
     marginBottom:15},
  imn:{ width:80 , 
    height:80 ,
    margin:5,
     borderWidth: 2,
    borderColor: '#34495e',
      borderRadius: 40, 
      backgroundColor: '#34495e'},
  mb:{  width: '100%',
    flexDirection:'row' ,
     marginBottom:3,
     backgroundColor: '#34495e'
    },
  borderstyl:{
    height:80,
    alignItems: 'center',
  //marginTop: 10,
//  padding: 10,
  borderWidth: 2,
  borderColor: 'red',
  //borderRadius: 40,
  backgroundColor:'#34495e'
},
textshow:{
  fontSize:26,
  color:'#f1c40f',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 20
},
})

//http://www.mzaaq.com/wp-json/wp/v2/categories?per_page=100