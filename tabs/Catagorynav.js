

import React from 'react';
import {Text, View, Button, Image,FlatList,ScrollView,StyleSheet,
  ActivityIndicator,TextInput,SafeAreaView,ImageBackground,TouchableOpacity,
  Navigatore,TouchableHighlight
 } from 'react-native';
import {Avatar, Icon,Card,ListItem,SearchBar,Tile ,List } from 'react-native-elements';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Feedbyid from '../tabs/Feedbyid';
import ImageOverlay from '../mycompnent/ImageOverlay';

import Krunal from '../assets/splash.png';
import _ from "lodash";
import {  AdMobBanner} from 'react-native-admob';
import Feedbynew from './Feednew';
const IMG_SRC=require('../assets/splash.png');

export default class Catagorynav extends React.Component {

    static navigationOptions = {
        title:'الصنف',
        tabBarLabel: 'تفاصيل الصنف',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../images/wsfa2.png')}
                style={{width: 22, height: 22, tintColor: 'white'}}>
            </Image>
        )
    }

    constructor(props){
      super(props)
      this.navigate = this.props.navigation;
      this.fulldata = [];
      this.data=[];
      this.pakupdata=[];
this.postid=0;

      this.state={
        postids:this.props.navigation.state.params.postids,
        animating:true,
refrishing:true,
showme:false, modalVisible: false,
imgurl:"",
idd:"",

headtext:"",
page:1,
loadpage:false,
errors:null
      }

    }
    state={
  display: false,
      query:"",
        key:"",

    };


    setModalVisible(visible) {console.log("1",this.state.modalVisible)
        this.setState({modalVisible: true});
        console.log("2",this.state.modalVisible)
      };
      getiamagurl(imgurls,idds,headtexts,postids){console.log("mysorc",this.state.imgurl)
this.setState({imgurl:imgurls});
this.setState({idd:idds});
this.setState({headtext:headtexts});
this.setState({postid:postids});
//this.props.numberset(postids);
console.log("mypostid",this.state.postid)
      };

hideModal = () => this.setState({ modalVisible: false });



handleend =()=>{
 this.setState(state =>({page:state.page +1}),()=> this.ftechData());
  console.log("page"+this.state.page);
};


    setSearchText(event){
     searchText = event;
     fulldata       = this.state.data;

     searchText = searchText.trim().toLowerCase();
  if (searchText !=="")   {

    fulldata = fulldata.filter(item => {
     return item.title.rendered.toLowerCase().match( searchText );
   });}
   else{fulldata = this.state.pakupdata
  // console.log("doooooo");
}
if ( this.state.acessos && this.state.fulldata.length == 0){
  fulldata = this.state.pakupdata
}
    this.setState({

     data : fulldata
     });
   };

 ftechData=async()=>{
this.setState({loadpage:true});
//response

const response =await
fetch ('api here='+this.state.postids+'&per_page=100');
 

 const posts= await
 response.json();

   this.setState({data:posts,errors:posts|| null,loadpage:false});
   this.setState({pakupdata:posts});


    }

    componentDidMount(){
      //page loading
      this.ftechData();

    }
    componentWillMount(){
      setTimeout(() => {
this.setState({
    animating:false,
})
      },
      3000)
    }

    renderseprator= () =>{
      return(
         <View style={{height: 1,width: '100%',backgroundColor:'black' }}>

         </View>
      )
    }

    render() { console.log("3",this.state.modalVisible);
   
const postids=this.state.postid;
const {modalVisible}=this.props;

        return(
       
           <View style={styles.container}>
   
<ScrollView
onScrollEndDrag={this.handleend}
>
<SearchBar
lightTheme
round
searchIcon={{ size: 24 }}
  platform="android"
  cancelButtonTitle="الغاء"
  placeholder='بحث' onChangeText={text => this.setSearchText(text)} />
<View style={{height: 50,width: '100%',backgroundColor:'#636e72', justifyContent: 'center',
          alignItems: 'center' }}>
          <Text style={styles.texthead}>أحدث الوصفات</Text>
                   </View>

 






{this.state.animating ?

  <ActivityIndicator
           size='large'
           color="red"/>
//<Image source={IMG_SRC} style={styles.image}/>]

           :

           <FlatList

data={this.state.data}
pakupdata={this.state.pakupdata}
//onRefresh={this.loadpage}
//onEndReached={this.handleend}
//onEndReachedThreshold={1}
keyExtractor = { (item, index) => index.toString() }

//keyExtractor={(x,i) => i}
renderItem={({item})=>
<View style={styles.borderstyl}>

{ this.state.showComponent && <Text  >{item.content.rendered}</Text>}
{ this.state.showComponent &&<Text ref='myText'>{item.id}</Text>}


<TouchableHighlight  onPress={() => {

//<TouchableHighlight  onPress={() => {this.setModalVisible(this.state.modalVisible);
 this.getiamagurl(item.better_featured_image.source_url,item.content.rendered,item.title.rendered,item.id);
 this.props.navigation.navigate('Feednews',{
  postids:item.id,
  images:{uri:item.better_featured_image.source_url},
  detaliesss : item.content.rendered,
 headtexts:item.title.rendered,
 

  
},
console.log("ddd",item.id),
);

 }}>
<ImageBackground style={styles.imags}
source={{uri: item.better_featured_image.source_url}} >
<ImageOverlay header={item.title.rendered}/>
</ImageBackground>

</TouchableHighlight>



  </View>
  
 
  }

  />

  } 
</ScrollView>

        </View >

        
      )
    
     
    }


 


}

    const styles=StyleSheet.create({
      container:{
      //  flex: 1,
      flexDirection: 'column',
        justifyContent: 'center',
      //  alignItems: 'center',
        backgroundColor: '#34495e',
        paddingTop: 20
      },
      heades:{
          flexDirection: 'row-reverse',
        height: 100,
        width: '100%',
        backgroundColor:'#34495e',

      },
      texthead:{
        fontSize:24,
        color:'#ecf0f1',
        justifyContent: 'center',
          alignItems: 'center',
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
      width:150,
      height:150,
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
//function mapStateToProps(states){  
 
  //return{
  
//states:this.postids
//  }
//}

   // export default connect(mapStateToProps,{ numberset})(FirstScreen);

//onPress={() => this.props.navigation.navigate('Details')}
    //<TouchableOpacity  onPress={this._onPressButton}>
    //<ImageBackground style={styles.imags}
    //source={{uri: item.better_featured_image.source_url}} >
    //<ImageOverlay header={item.title.rendered}/>
    //</ImageBackground>
    //</TouchableOpacity>

    //<Tile
    //  imageSrc={{uri: item.better_featured_image.source_url}}
    //  title={item.title.rendered}
    //  featured
  //    caption="Some Caption Text"
  //    contentContainerStyle={{ height: 10 }}
  //  />

  //<Hero
        //   source={{uri: item.better_featured_image.source_url}}

      //     renderOverlay={() => (
          //   <View>
            //     <Text>React Native Hero!</Text>
          //       <Text>Is super duper, cool!</Text>
        //     </View>
        //   )} />
