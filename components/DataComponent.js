// components/DataComponent.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const DataComponent = ({ articles, onPress }) => {
  return (
    <View style={styles.container}>
      {articles.map((article, index) => (
        <TouchableOpacity key={index} style={styles.articleContainer} onPress={() => onPress(article)}>
          <Text style={styles.title}>{article.title}</Text>
          <Image source={{ uri: article.image }} style={styles.image} />
          <Text style={styles.description}>{article.description}</Text>
          {/* Puedes agregar más campos según la estructura del objeto */}
        </TouchableOpacity>
      ))}
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

export default DataComponent;
