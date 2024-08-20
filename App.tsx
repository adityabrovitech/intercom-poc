/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Intercom, {Visibility} from '@intercom/intercom-react-native';
import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    // Intercom.loginUnidentifiedUser();
    
  }, []);

  const Authenticate = async() => {
  //  const hash = '541e961d9ebf13ce247b749ac3a9532dfa47349d936ac7fe1f1583d2831341b0'
  //  Intercom.setUserHash(hash);
   const data = await Intercom.loginUnidentifiedUser();
   Intercom.setLauncherVisibility(Visibility.VISIBLE);
   console.log('Authenticated',data);
  };

  const updateUser = () =>{
    Intercom.updateUser({
      email: 'aditya.sharma@brovitech.com',
      name: 'Bharat',
      phone: '0123456789',
      languageOverride: 'fr',
    });
  }

  return (
   
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
           <TouchableOpacity style={{padding:10,borderWidth:1,borderColor:'#EEE'}}>
            <Text
              style={{
                color: isDarkMode ? Colors.white : Colors.black,
              }} 
              onPress={Authenticate}
              >
              Authenticate
              </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{padding:10,borderWidth:1,borderColor:'#EEE'}}>
            <Text
              style={{
                color: isDarkMode ? Colors.white : Colors.black,
              }} 
              onPress={updateUser}
              >
              Update user
              </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
