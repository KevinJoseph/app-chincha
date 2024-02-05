// screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import DataComponent from '../components/DataComponent';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [articles, setArticles] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/articles');
        setArticles(response.data);
      } catch (error) {
        console.error('Error al obtener datos del API:', error);
      }
    };

    fetchData();
  }, []);

  const handleArticlePress = (article) => {
    // Navegar a la pantalla de artículo y pasar el artículo como parámetro
    navigation.navigate('Article', { article });
  };

  return (
    <View>
      <DataComponent articles={articles} onPress={handleArticlePress} />
    </View>
  );
};

export default HomeScreen;
