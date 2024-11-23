import { Image, ScrollView, StyleSheet, View } from "react-native";
import Header from "../../Componentes/Header/Header";
import Banner from "../../Componentes/Banner";
import CardMovie from "../../Componentes/Cards/CardMovie";
import Texts from "../../Componentes/Text";
import CardVideo from "../../Componentes/Cards/CardVideo";
import FooterAdmin from "../../Componentes/Footer/FooterAdmin";
import CardMovieAdmin from "../../Componentes/Cards/CardMovieadmin";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

export default function Home() {
  // Estado para armazenar os dados do usuário
  const [user, setUserState] = useState(null);
  const route = useRoute();
  const { id } = route.params || {}; // Obtém o ID das rotas ou um valor padrão vazio
 
  // Função para buscar os dados do usuário
  const listUser = async () => {
    try {
      const response = await axios.get(`http://192.168.1.9:8080/api/user/${id}`);
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
    <View style={styles.containerPricipal}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header user={user.nameUser}/>
        <Banner />
        <Image
          style={styles.imageDecoration}
          source={require('../../Assets/Images/decoration.png')}
        />
        <Texts />

        <ScrollView
          horizontal
          style={styles.cardMovieContainer}
          showsHorizontalScrollIndicator={false}
        >
          {[...Array(4)].map((_, index) => (
            <CardMovieAdmin key={index} />
          ))}
        </ScrollView>

        <Texts />

        {/* Card Videos
        {[...Array(3)].map((_, index) => (
          <CardVideo key={index} />
        ))} */}
      </ScrollView>
      <FooterAdmin />
    </View>
  );
}

const styles = StyleSheet.create({
  containerPricipal: {
    flex: 1, 
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1, 
    paddingBottom: 60, 
  },
  cardMovieContainer: {
    flexDirection: "row",
    marginHorizontal: 5,
    paddingVertical: 5,
  },
  imageDecoration: {
    height: 30,
    marginTop: 10,
    marginLeft: 150,
    width: 100,
  },
});
