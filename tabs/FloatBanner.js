import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,TouchableHighlight,WebView
} from "react-native";
import {Right} from 'native-base';
import ScriptTag from 'react-script-tag';

class FloatBanner extends Component {
    render() {
        return (
            <View style={styles.container}>

                <TouchableHighlight
                
                style={styles.btn}>


<Text>bbbb</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
export default FloatBanner;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn:{
position:'absolute',
width:'90%',height:50,
borderRadius: 30,
backgroundColor:'#55efc4',
bottom:10,right:10,
alignItems:'center',
justifyContent:'center'
    },
});



// <WebView
//source={{html, baseUrl: 'web/'}}
//style={{flex: 1}}
//mixedContentMode='always'
///>