import React, { useEffect, useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function CardMovieAdmin() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const listMovies = async () => {
    try {
      const response = await axios.get('http://192.168.1.9:8080/api/movie');
      setMovies(response.data.movies);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    listMovies();
  }, []);

  const handleDelete = () => {
    alert('Filme deletado!');
  };

  const handleEdit = () => {
    alert('Modo de edição ativado!');
  };

  return (
    <View style={styles.mainContainer}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        movies.map((movie) => (
          <View key={movie._id} style={styles.container}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Review', { id: movie._id })}
            >
              <ImageBackground
                style={styles.imageBanner}
                source={{ uri: movie.img }}
                imageStyle={styles.imageStyle}
              >
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{movie.title}</Text>
                  <Text style={styles.subTitle}>{movie.gender}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleEdit}>
                <Ionicons name="pencil-outline" size={16} color="#FFF" />
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.deleteButton]}
                onPress={handleDelete}
              >
                <Ionicons name="trash-outline" size={16} color="#FFF" />
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
  },
  container: {
    width: 150,
    marginTop: 30,
    marginLeft: 10,
  },
  imageBanner: {
    width: '100%',
    height: 200,
  },
  imageStyle: {
    borderRadius: 10,
  },
  textContainer: {
    marginTop: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
  },
  subTitle: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9400D3',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  deleteButton: {
    backgroundColor: '#FF0000',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 12,
    marginLeft: 5,
  },
});
