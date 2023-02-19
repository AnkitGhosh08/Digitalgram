import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Digitalgram</Text>
      <TouchableOpacity>
        <Ionicons name="camera" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 60,
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 20,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    fontSize: 25,
    color: 'white',
  },
});
