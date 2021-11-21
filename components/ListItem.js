import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row"
  },
  leftContainer: {
    width: 100
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16
  },
  subText: {
    fontSize: 12,
    color: "gray"
  }
});

const ListItme = (props) => {
  const {imageUrl, title, author} = props

  return (
    <View style={styles.itemContainer}>
    <View style={styles.leftContainer}>
      <Image 
        style={{width: 100, height: 100}}
        source={{url: imageUrl }}
      />
    </View>
    <View style={styles.rightContainer}>
      <Text 
        numberOfLines={3}
        style={styles.text}
      >
        {title}
      </Text>
      <Text
        style={styles.subText}
      >
        {author}
      </Text>
    </View>
  </View>
  )
}

export default ListItme