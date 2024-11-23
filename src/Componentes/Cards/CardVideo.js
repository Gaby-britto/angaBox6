import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

const image = 'https://i.pinimg.com/736x/d6/e4/e7/d6e4e7fb6d20a7cfb26e55cc5bb8df09.jpg';
const play = 'https://i.pinimg.com/564x/ee/b6/32/eeb632630302082773f128dd4568e473.jpg';

export default function CardVideo() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBanner} source={{ uri: image }} imageStyle={{ borderRadius: 10 }} />
      
      <View>
        <Text style={styles.title}>Rio 2</Text>
        <Text style={styles.subTitle}>Adventure, Brazil</Text>
      </View>

      <TouchableOpacity style={styles.iconButton}>
      <Ionicons name="create-outline" size={30} color="#9400D3" />
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: 150,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  imageBanner: {
    width: 150,
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  title: {
    marginLeft: 13,
    fontWeight: "bold",
    fontSize: 15,
  },
  subTitle: {
    marginLeft: 13,
    fontSize: 12,
    color: 'gray',
  },
  iconButton: {
    width: 30,
    height: 30,
    marginLeft: 90
  },
});
