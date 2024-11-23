import React from 'react';
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function CardReview() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#9400D3" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
        <Text style={styles.sectionTitle}>REVIEWS</Text>
        <View style={styles.divider} />
        <Text style={styles.reviewText}>my bom hihihmy bom hihihmy bom hihihmy bom hihihmy bom hihihmy bom hihihmy bom hihihmy bom hihihvvmy bom hihihvvvvv</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    flex: 1,
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 10,
    color: '#9400D3',
    fontFamily: 'Montserrat_700Bold',
  },
  divider: {
    marginLeft: 10,
    flex: 1,
    height: 1.5,
    width: 385,
    backgroundColor: '#9400D3',
    marginVertical: 10,
  },
  reviewText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 10,
  }
  
});
