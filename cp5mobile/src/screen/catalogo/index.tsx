import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { discoverMovies } from '../../api/tmdb';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
}

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Catalogo'>;

export default function Catalogo() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    async function loadMovies() {
      try {
        const data = await discoverMovies();
        setMovies(data);
      } catch (error: any) {
        console.error('Erro ao buscar filmes:', error.response?.data || error.message);
      }
    }
    loadMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#E0E0E0" barStyle="dark-content" />
 
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Catálogo de Filmes</Text>
      </View>

      <FlatList
  data={movies}
  keyExtractor={(item) => item.id.toString()}
  showsVerticalScrollIndicator={false}
  contentContainerStyle={styles.listContent}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('DescricaoFilme', {
          title: item.title,
          overview: item.overview,
          poster_path: item.poster_path,
          release_date: item.release_date,
        })
      }
    >
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.image}
      />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  )}
/>

    </SafeAreaView>
  );
}
