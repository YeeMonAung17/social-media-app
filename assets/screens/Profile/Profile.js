import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import globalStyle from '../../styles/globalStyle';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>go back</Text>
      </TouchableOpacity>
      <Text>Welcome to Profile Page</Text>
    </SafeAreaView>
  );
};

export default Profile;
