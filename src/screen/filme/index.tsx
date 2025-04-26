import React from 'react';
import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';
import { styles } from './style';

type Props = NativeStackScreenProps<RootStackParamList, 'DescricaoFilme'>;

export default function DescricaoFilme({ route }: Props) {
  const { title, overview, poster_path, release_date } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
          style={styles.poster}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.releaseDate}>Data de Lançamento: {release_date}</Text>
        <Text style={styles.overview}>
          {overview ? overview : 'Descrição indisponível.'}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
