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
const MUSIC_LIST = [
  {
    id: 'BMUS',
    title: 'Beam Me Up Scotty',
    artist:'Nicki Minaj',
    source: require('../../../assets/Music/BMUS.jpg'),
    cost: '$10.00',
  },

  {
    id: 'EA',
    title: 'Eternal Attake',
    artist:'Lil Uzi Vert',
    source: require('../../../assets/Music/EA.jpg'),
    cost: '$8.00',
  },

  {
    id: 'PH',
    title: 'Planet Her',
    artist:'Doja Cat',
    source: require('../../../assets/Music/Planet_her.png'),
    cost: '$9.00',
  },
  {
    id: 'Punk',
    title: 'Punk',
    artist:'Young Thug',
    source: require('../../../assets/Music/Punk.jpg'),
    cost: '$7.50',
  },
  {
    id: 'pxbp',
    title: 'Pluto X Baby Pluto',
    artist:'Lil Uzi Vert X Future',
    source: require('../../../assets/Music/pxbp.jpg'),
    cost: '$5.50',
  },
  {
    id: 'PH',
    title: 'Planet Her(Deluxe)',
    artist:'Doja Cat',
    source: require('../../../assets/Music/Planet_her.png'),
    cost: '$10.50',
  },
];
const Music = ({navigation}) => {
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
        data={MUSIC_LIST}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Music;

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
