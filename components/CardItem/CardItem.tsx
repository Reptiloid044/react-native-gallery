import { View, Text, StyleSheet, Image } from 'react-native';
import { Art } from '../../types/art';

export function CardItem({ route }: { route: { params: { item: Art }}}) {
  return (
    <View style={styles.container}>
      <View style={styles.template}>
      <Image style={styles.image} source={{ uri: route.params.item.urls.full }} />
        <View style={styles.textContainer}>
          <Text style={styles.title}> {route.params.item.user.first_name} </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",

  },
  template:{
    width: '100%',
    height: '100%',
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer:{
    position: "absolute",
    width: '100%',
    height: 30,
    bottom:0,
    padding: 5,
    backgroundColor: "rgba(0,0,0, 0.3)",
  },
  title: {
    fontSize: 15,
    color: "white",
  },
});