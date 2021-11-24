import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const styles = StyleSheet.create({
  conatainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(255,255,255, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

const Loading = () => {
  return(
    <View style={styles.conatainer}>
      <ActivityIndicator size="large" />
    </View>
  )
}

export default Loading;