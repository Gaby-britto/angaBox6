import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../../Componentes/Header/Header";
import Search from "../../Componentes/Search";
import CardMovie from "../../Componentes/Cards/CardMovie";
import Footer from "../../Componentes/Footer/Footer";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

export default function SearchPage() {
  // Estado para armazenar os dados do usuário
  const [user, setUserState] = useState(null);
  const route = useRoute();
  const { id } = route.params || {}; // Obtém o ID das rotas ou um valor padrão vazio

  // Função para buscar os dados do usuário
  const listUser = async () => {
    try {
      const response = await axios.get(
        `http://192.168.1.9:8080/api/user/${id}`
      );
      setUserState(response.data.user); // Atualiza o estado com os dados do usuário
      console.log("Usuário:", response.data.user);
      console.log("Resposta da API:", response.data);
    } catch (error) {
      console.error("Erro ao buscar o usuário:", error.message);
      if (error.response) {
        console.error("Código de status da resposta:", error.response.status);
      }
    }
  };
  // Efeito para buscar os dados do usuário ao montar o componente
  useEffect(() => {
    if (id) {
      listUser();
    } else {
      console.warn("ID do usuário não fornecido.");
    }
  }, [id]);

  if (!user) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header user={user.nameUser} />
        <Search />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 60,
  },
});
