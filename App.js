import React,{ useState, useEffect } from 'react';
import { StyleSheet, View, FlatList , SafeAreaView} from 'react-native';
import ListItme from './components/ListItem';
import  dummyArticles from "./dummies/articles";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  
});

export default function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    alert(Constants.manifest.extra.newsApiKey);
    const timer = setTimeout(() => {
      setArticles(dummyArticles);
    }, 2000)
    return () => clearTimeout(timer);
  } ,[]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({item}) => (
          <ListItme
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

