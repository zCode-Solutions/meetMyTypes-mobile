import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default function ProfileScreen() {
  const [name, Setname] = React.useState('');
  const [LoveType, SetLoveType] = React.useState('');
  const {Top4LoveTypes, SetTop4LoveTypes} = React.useState('');
  const [description, SetDescription] = React.useState('');

  React.useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <Text>Profile Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
