import {
  Button,
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';
import React, {useState} from 'react';
const MOVIE_LIST = [
  {
    id: 'Dune',
    title: 'DUNE',
    source: require('../../../assets/Movies/Dune.jpg'),
    cost: '$5.00',
  },

  {
    id: 'Eternals',
    title: 'Eternals',
    source: require('../../../assets/Movies/Eternals.jpeg'),
    cost: '$6.00',
  },

  {
    id: 'Venom',
    title: 'Venom',
    source: require('../../../assets/Movies/Venom.jpg'),
    cost: '$5.00',
  },
  {
    id: 'MK',
    title: 'Mortal Kombat',
    source: require('../../../assets/Movies/MK.jpg'),
    cost: '$5.50',
  },
  {
    id: 'SS',
    title: 'Suicide Squad',
    source: require('../../../assets/Movies/SS.jpg'),
    cost: '$5.50',
  },
  {
    id: 'T&J',
    title: 'Tom & Jerry',
    source: require('../../../assets/Movies/T&J.jpg'),
    cost: '$5.50',
  },
];
const Movies = ({navigation}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        Alert.alert(item.title, item.cost)
      }>
      <Text style={styles.textStyle}>{item.title}</Text>
      <Image source={item.source} style={styles.image}></Image>
    </TouchableOpacity>
  );
  return (
    <View style={styles.root}>
      <FlatList
        data={MOVIE_LIST}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  
  image: {
    height: 170,
    width: 170,
    marginHorizontal: 10,
  },
  textStyle: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center'
  },
});
