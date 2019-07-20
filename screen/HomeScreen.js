import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginScreen from "./LoginScreen";

 export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container}>

                <Button title="go back to login screen" onPress={() => this.props.navigation.goBack()} />
                <Button title="go back to login screen" onPress={() => this.props.navigation.navigate('login')} />
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});