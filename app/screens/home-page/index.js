import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Text,
} from 'react-native';

import Styles from './index.styles';

export default function Index({navigation}) {
  const tempat = [
    {
        "id": 1,
        "alamat": "jalan Nursalim",
        "nama": "Tempat 1",
        "gambar": "https://asset.kompas.com/crops/jq3AWaRI13npfjsZHj-Kz8oACWA=/0x0:739x493/750x500/data/photo/2020/04/23/5ea13b83807c8.jpg"
    },
    {
      "id": 2,
      "alamat": "jalan nangka",
      "nama": "Tempat 2",
      "gambar": "https://heritage.kai.id/media/cover%2013.jpg?1505617606123"
    },
    {
      "id": 3,
      "alamat": "jalan baru",
      "nama": "Tempat 3",
      "gambar": "https://sanjayatour.com/wp-content/uploads/2020/02/Destinasi-Wisata-Lawang-Sewu-Semarang-696x398.jpg"
    }
]

  const onPressCardView = (data) => {
    ToastAndroid.showWithGravity(
      data.first_name,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
    navigation.navigate('Detail Page', data);
  };
  
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        <View style={Styles.scrollView}>
          {tempat.map(data => (
            <TouchableOpacity
              key={data.id}
              style={Styles.cardView}
              onPress={() => onPressCardView(data)}>
              <View style={Styles.cardView1}>
                <Image source={{uri: data.gambar}} style={Styles.image} />
              </View>
              <View style={Styles.cardView2}>
                <Text style={Styles.text1}>{`${data.nama}`}</Text>
                <Text style={Styles.text1}>{`${data.alamat}`}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
