import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { Art } from '../../types/art';
import { useEffect } from 'react';
import * as artActions from '../../features/pictureReducer';
import { Loader } from '../Loader';
import { TouchableOpacity } from 'react-native';

interface Props {
  navigation: NavigationProp<Record<string, object>>;
};

export function Gallery({ navigation }: Props) {
  const dispatch = useDispatch();
  const pictures = useAppSelector(state => state.pictures.pictures) as Art[];
  const loading = useAppSelector(state => state.pictures.loading);
  const error = useAppSelector(state => state.pictures.error);

  useEffect(() => {
    dispatch(artActions.init());
  }, [])

  if (loading) {{
    return <Loader />
  }}

  if (error) {
    return <p>{error}</p>
  }
  
  return (
    <>
      <FlatList
        data={pictures}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('CardItem', { item })}>
            <View style={styles.container}>
              <View style={styles.template}>
                <Image style={styles.image} source={{ uri: item.urls.full }} />
                <View style={styles.textContainer}>
                  <Text style={styles.title}> {item.user.first_name} </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  template:{
    marginTop: 10,
    width: 375,
    height: 375,
    borderRadius : 10,
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"
  },
  image: {
    width: 375,
    height: 375,
    borderRadius : 10
  },
  textContainer:{
    position: "absolute",
    width: 375,
    height: 30,
    bottom:0,
    padding: 5,
    backgroundColor: "rgba(0,0,0, 0.3)",
    borderBottomLeftRadius : 10,
    borderBottomRightRadius: 10
  },
  title: {
    fontSize: 15,
    color: "white",
  }
});
