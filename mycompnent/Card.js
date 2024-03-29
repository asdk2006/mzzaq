import React from 'react';
import { View, StyleSheet } from 'react-native';


const Card = (props) => {
    return(
      <View style={styles.cardStyle}>
        { props.children }
      </View>
    );
  }

const styles = StyleSheet.create({
  cardStyle: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOpacity: 0.1
  }
});
export default Card;
