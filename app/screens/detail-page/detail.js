
import React from 'react';
import {View, SafeAreaView, ScrollView, Text, Image} from 'react-native';
import Styles from './detail.styles';


export default function Detail({ route }) {
  const {nama, gambar, alamat} = route.params;

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.scrollView}>
        <View style={Styles.view}>
          <View>
            <Image source = {{uri: gambar}} style = {Styles.image} />
            <Text style = {Styles.nameText}>{nama} </Text>
            <Text style = {Styles.nameText}>{alamat} </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
