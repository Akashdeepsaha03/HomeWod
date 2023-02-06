import React from "react";
import {Text,View,StyleSheet} from 'react-native';
import { Amplify } from "aws-amplify";
// import awsconfig from './src/aws-exports';
import {Authenticator} from 'aws-amplify-react-native';
// Amplify.configure(awsconfig);

export default function App() {
  return(
    <View style = {Styles.container}>
      <Authenticator>
        <Text>HOMES</Text>
      </Authenticator>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});