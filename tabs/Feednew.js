import React from 'react'
import { Modal, View, Image, Text, StyleSheet,ScrollView ,TextInput,Keyboard,
FlatList,ListView,YellowBox,InteractionManager } from 'react-native';
import {Form,Container,Content,Header,Input,Label,Item, List,ListItem} from 'native-base';
import FirstScreen from '../tabs/FirstScreen';

import HTMLView from 'react-native-htmlview';
import { Card ,Button} from 'react-native-elements';

import firebase from 'firebase';

const firebaseConfig ={
  apiKey: "",
     authDomain: "",
     databaseURL: "",
     projectId: "",
     storageBucket: "",
     messagingSenderId: ""
   };
   firebase.initializeApp(firebaseConfig );
   var data=[];
   YellowBox.ignoreWarnings(['Setting a timer'])
   export default class Feedbynew extends React.Component {
    static navigationOptions = {
        title:'تفاصيل الوصفة',
        tabBarLabel: 'التفاصيل',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../images/wsfa2.png')}
                style={{width: 22, height: 22, tintColor: 'white'}}>
            </Image>
        )
    }
    constructor(props){
        super(props)
        this.params = this.props.navigation.state;
        this.ds=new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2})
       this.datac=[];
       this.mpostid="";
      this.titles="";
      this.theid=0;
    this.state = {
        postids:this.props.navigation.state.params.postids,
        headtexts:this.props.navigation.state.params.headtexts,
        images:this.props.navigation.state.params.images,
        detaliesss:this.props.navigation.state.params.detaliesss,
  isLoading:true,
  ListViewdata:data,
  myid:this.props.postid,
  
    };
   // console.log("the new id3"+this.props.myid);
    };
   
    addrow(data,theidin){
      
        this.setState({theid:theidin})
      
      var key=firebase.database().ref('/6360').push().key
      firebase.database().ref('/6360').child(key).set({name: data})
      
    }
    
    componentDidMount() {
      
   
        let that=this
       firebase.database().ref('/6360').on('value',(snap)=>{
        let newdata=[];
        snap.forEach((child)=>{
          newdata.push({
            name:child.val().name,
           
          })})
        
          that.setState({ListViewdata:newdata}) 
   
       })}

render(){
    
   // const {postid,headtext,image,visibles,detaliess,dismiss}=this.props;
    return(  console.log("ddd2"+this.state.postids),
<View>
<ScrollView
//onScrollEndDrag={this.setState({theid:postid})}

  >
                 <Card>
                     
                 <Text style={styles.headtext}>{this.state.headtexts}</Text>
                         <Image
                           source = {this.state.images }
                           style = { styles.image } />
                           </Card>
                           <Card>
            <HTMLView
         value={this.state.detaliesss}

         /></Card>

         <Card>
<Text>التعليقات</Text>
<Text  ref='myText'>{this.state.postids}</Text>
<Content>
<List
  enableEmptySections
   dataSource={ this.ds.cloneWithRows(this.state.ListViewdata)}
   renderRow={data=>
  <ListItem>
    <Text>{data.name}</Text>
  </ListItem>
  }


/>


</Content>



</Card>

<Card>
<Text>اضف تعليق</Text>
<TextInput onChangeText={(titles)=> this.setState({titles})}


style={{height:100,
  margin: 20,
  padding: 10,
  borderColor: 'gray',
  borderWidth: 1,
borderRadius: 15
}
}
placeholder='اضف تعليق'
multiline={true}
borderBottomColor='green'
borderBottomWidth={3}
borderLeftColor='green'
borderLeftWidth={3}
borderRightColor='green'
borderRightWidth={3}
//autoFocus={true}
returnKeyType='done'
onSubmitEditing={Keyboard.dismiss}


/>
<Button onPress={()=>(this.setState({theid:this.refs.myText.props.children}), this.addrow(this.state.titles,this.refs.myText.props.children))}
  large
  backgroundColor='#34495e'

  
  title='حفظ' />
</Card>
 </ScrollView>
</View>
    );
}

   }
   const styles = StyleSheet.create({
    container:{
      marginBottom:20,
    },
    borderstyl:{
      alignItems: 'stretch',
    marginTop: 10,
  //  padding: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 40
  },
    image: {
      marginTop: 20,
      marginLeft: 30,
      marginRight: 30,
      alignSelf: 'center',
      height: 300,
      width: '100%',
      borderRadius: 30,
      borderColor: 'black'
    },
  
  headtext:{
      marginTop: 20,
    alignSelf:'center',
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold'
  },
  })