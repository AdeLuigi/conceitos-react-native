import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Switch } from 'react-native';

interface LabeledValue {
  isEnabled:boolean;
  setIsEnable:React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header<Header>({isEnabled, setIsEnable}: LabeledValue) {

  return (
    <>
    <View style={isEnabled ? styles.headerSwitch : styles.header}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      <View>
          <Switch
              trackColor={{ false: "#767577", true: "#181818" }}
              thumbColor={isEnabled ? "#BF4AD4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setIsEnable(previousState => !previousState)}
              value={isEnabled}
            />
      </View>
      
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerSwitch: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#3E3E3E',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  }
});
