import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Ionicons } from '@expo/vector-icons';

export default function CardReviewAdmin() {
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

  const handleDelete = () => {
    // Lógica para deletar o item, pode ser uma chamada de API ou manipulação de estado
    console.log("Item deletado!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>REVIEWS</Text>
      <View style={styles.divider} />
      <Text style={styles.reviewText}>
        my bom hihihmy bom hihihmy bom hihihmy bom hihihmy bom hihihmy bom hihihmy bom hihihmy bom hihihvvmy bom hihihvvvvv
      </Text>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Ionicons name="trash-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',  // Para permitir o posicionamento absoluto do botão de excluir
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
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#9400D3',
    padding: 8,
    borderRadius: 20,
  }
});
