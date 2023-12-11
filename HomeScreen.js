// HomeScreen.js

import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleHomePress = () => {
   
    navigation.navigate('WebViewScreen', { uri: 'https://www.mremind.com/' });
  };


  const handleEmrPress = () => {
    navigation.navigate('WebViewScreen', { uri: 'https://emr.mremind.com/EMR/Login.aspx' });
  };


  const handleProviderPress = () => {
    navigation.navigate('WebViewScreen', { uri: 'https://max.mremind.com/ProviderPortal/login.aspx' });
  };
  const handleManagementEmrPress = () => {
    navigation.navigate('WebViewScreen', { uri: 'https://management.mremind.com/ManagementEMR/Login.aspx?ReturnUrl=%2fManagementEMR%2fHome.aspx' });
    
  };

  const handleRpmPress = () => {
    navigation.navigate('WebViewScreen', { uri: 'http://www.mediremote.com/' });
    // Add your logic for handling the "RPM" press here
  };

  const handleSettingIconContainer = () => {
    // Add your logic for handling the "RPM" press here
  };

  return (
    <View style={styles.container}>
      <View style={styles.blueContainer}>
       

        {/* Touchable setting icon in the top right of the blue container */}
        <TouchableOpacity
          style={styles.settingIconContainer}
          onPress={handleSettingIconContainer}
        >
          <Icon name="cog" size={30} color="#666" />
        </TouchableOpacity>

        {/* Round container with white background for the X logo */}
        <View style={styles.xLogoContainer}>
          {/* Replace 'xlogo.png' with your actual image source */}
          <Image source={require('./xlogo.png')} style={styles.xLogo} />

        </View>
        {/* White text under the X logo container */}
        <View style={styles.whiteTextContainer}>
          <Text style={styles.whiteText}>MAX REMIND INC.</Text>
        </View>
        {/* Black text container under the white text container */}
        <View style={styles.blackTextContainer}>
          <Text style={styles.blackText}>Compliance, Care & Vision</Text>
        </View>
        {/* White Home container */}
        <View style={styles.whiteHomeContainer}>
          <TouchableOpacity onPress={handleHomePress}>
            <View style={styles.homeContent}>
              <Icon name="home" size={60} color="skyblue" />
              <Text style={styles.homeText}>Max Remind</Text>
            </View>
          </TouchableOpacity>

        </View>
        {/* EMR Container */}
        <View style={styles.emrContainer}>
          <TouchableOpacity onPress={handleEmrPress}>
            <View style={styles.emrContent}>
              <Icon name="th-large" size={60} color="skyblue" />
              <Text style={styles.emrText}>EMR</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* Provider container Container */}
        <View style={styles.providerContainer}>
          <TouchableOpacity onPress={handleProviderPress}>
            <View style={styles.providerContent}>

              <Image source={require('./xlogo.png')} style={styles.providerLogo} />
              <Text style={styles.providerText}>Provider Portal</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* Management EMR Container  */}
        <View style={styles.managementEmrContainer}>
          <TouchableOpacity onPress={handleManagementEmrPress}>
            <View style={styles.managementEmrContent}>
              <Icon name="cog" size={60} color="skyblue" />
              <Text style={styles.managementEmrText}>Management EMR</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* RPM Container  */}
        <View style={styles.rpmContainer}>
          <TouchableOpacity onPress={handleRpmPress}>
            <View style={styles.rpmContent}>
              <Image source={require('./mr.png')} style={styles.rpmImage} />
              <Text style={styles.rpmText}>RPM</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.bottomWhiteContainer}>

        {/* Copyright text */}
        <View style={styles.copyrightContainer}>
          <Text style={styles.copyrightText}>© MaxRemind Inc. 2015-2022, All Rights Reserved!</Text>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#01619b',
  },
  blueContainer: {
    flex: 2, // Takes up 40% of the screen height
    backgroundColor: '#01619b',
    position: 'relative', // To position the setting icon and X logo relative to this container
  },
  bottomWhiteContainer: {
    flex: 3, // Takes up 60% of the screen height
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // You can change this color to whatever you want
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    zIndex: -1,
    justifyContent: 'flex-end', // Align items at the bottom
  },
  settingIconContainer: {
    position: 'absolute',
    top: 20, // Adjust as needed
    right: 20, // Adjust as needed
    width: 30,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center', // Center the icon vertically
  },
  xLogoContainer: {
    position: 'absolute',
    top: 60, // Adjust as needed
    left: 145,
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center', // Center the logo vertically
  },
  xLogo: {
    width: 60,
    height: 60,
    // Add any additional styles for the X logo image
  },
  whiteTextContainer: {
    alignItems: 'center',
    marginTop: 180, // Adjust as needed
    marginLeft: 2,
  },

  // Style for the white text
  whiteText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    // Add any additional styles for the white text
  },
  blackTextContainer: {
    alignItems: 'center',
    marginTop: 10, // Adjust as needed
    marginLeft: 2,

  },

  // Style for the black text
  blackText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    // Add any additional styles for the black text
  },
  whiteHomeContainer: {
    position: 'absolute',
    top: 255,
    left: 30,
    marginTop: 30,
    width: '40%',
    height: '38%', // Half of the blue container
    backgroundColor: 'white', // Light white color with some transparency
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },

  homeContent: {
    alignItems: 'center',
  },

  homeText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5, // Adjust as needed
  },
  emrContainer: {
    position: 'absolute',
    top: 255,
    right: 30,
    marginTop: 30,
    width: '40%',
    height: '38%', // Same as the whiteHomeContainer
    backgroundColor: 'white', // Light white color with some transparency
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },

  emrContent: {
    alignItems: 'center',
  },

  emrText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5, // Adjust as needed

  },

  providerContainer: {
    position: 'absolute',
    top: 430, // Adjust as needed
    marginLeft: 30, // Adjust as needed
    width: '40%', // Adjust as needed
    height: '38%', // Adjust as needed
    backgroundColor: 'white', // Light white color with some transparency
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },

  providerLogo: {
    width: 60,
    height: 60,
    // Add any additional styles for the X logo image
  },
  providerContent: {
    alignItems: 'center',
  },
  providerText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5, // Adjust as needed
  },
  managementEmrContainer: {
    position: 'absolute',
    top: 430, // Adjust as needed
    right: 30, // Adjust as needed
    width: '40%', // Adjust as needed
    height: '38%', // Adjust as needed
    backgroundColor: 'white', // Light white color with some transparency
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },

  managementEmrContent: {
    alignItems: 'center',
  },

  managementEmrText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5, // Adjust as needed
  },

  rpmContainer: {
    position: 'absolute',
    top: 580, // Adjust as needed
    left: '30%', // Centered horizontally
    width: '40%',
    height: '38%',
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  rpmContent: {
    alignItems: 'center',
  },
  rpmImage: {
    width: 109,
    height: 38,
    // Add any additional styles for the MR image
  },
  rpmText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },

  copyrightContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60, // Adjust as needed
  },

  // Style for the copyright text
  copyrightText: {
    color: 'black',
    fontSize: 13,
    fontStyle: 'italic',
  },

  profileContainer: {
    position: 'absolute',
    top: 20, // Adjust as needed
    left: 20, // Adjust as needed
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePlaceholder: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    backgroundColor: 'white', // Placeholder color
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    color: 'grey',
    fontSize: 12,
  },

});

export default HomeScreen;
