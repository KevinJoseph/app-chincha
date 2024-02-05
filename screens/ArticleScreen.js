// screens/ArticleScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ArticleScreen = ({ route }) => {
  const { article } = route.params;

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>{article.title}</Text>
      <Image source={{ uri: article.image }} style={styles.image} />
      <Text>{article.description}</Text>
      {/* Renderizar más información del artículo según su estructura */}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 16,
      flex: 1,
    },
    articleContainer: {
      marginBottom: 16,
      overflow: 'hidden',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    image: {
      height: 200,
      width: '100%',
      resizeMode: 'cover',
    },
    description: {
      fontSize: 16,
      marginVertical: 8,
      paddingHorizontal: 12,
    },
  });
  

export default ArticleScreen;
