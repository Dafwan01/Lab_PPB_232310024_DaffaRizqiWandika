import React from 'react';
import {StyleSheet, View,Text,TextInput,FlatList,TouchableOpacity,Image, ScrollView,} from 'react-native';

const Search = () => {
  const users = [
    { id: '1', name: 'Zaki Aljabbar', gender: 'male' },
    { id: '2', name: 'Adrian Adhari', gender: 'male' },
    { id: '3', name: 'Hana Yulia Rahmah', gender: 'female' },
    { id: '4', name: 'Lukman Nurhakim', gender: 'male' },
    { id: '5', name: 'Cindy Kevina', gender: 'female' },
  ];

  const getAvatarUrl = (gender) => {
    return gender === 'male'
      ? 'https://png.pngtree.com/png-clipart/20220603/original/pngtree-faceless-male-profile-icon-png-image_7902585.png'
      : 'https://img.lovepik.com/png/20231120/woman-icon-to-depict-the-female-profile-vector-ui-girlfriends_649670_wh1200.png';
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="#aaa"
      />

      <Text style={styles.sectionTitle}>Recommended Friends</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Image
              source={{ uri: getAvatarUrl(item.gender) }}
              style={styles.avatar}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.username}>{item.name.split(' ')[0]}</Text>
              <Text style={styles.fullname}>{item.name}</Text>
            </View>
            <TouchableOpacity style={styles.followBtn}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
          </View>
        )}
      />

<Text style={styles.sectionTitle}>similiar contact</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Image
              source={{ uri: getAvatarUrl(item.gender) }}
              style={styles.avatar}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.username}>{item.name.split(' ')[0]}</Text>
              <Text style={styles.fullname}>{item.name}</Text>
            </View>
            <TouchableOpacity style={styles.followBtn}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black', paddingTop: 40, paddingHorizontal: 10 },
  searchBar: {
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 10,
    color: 'white',
    marginBottom: 10,
  },
  sectionTitle: { color: 'white', fontSize: 18, marginVertical: 10 },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#111',
    padding: 10,
    borderRadius: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#666',
    marginRight: 10,
  },
  username: { color: 'white', fontWeight: 'bold' },
  fullname: { color: '#aaa', fontSize: 12 },
  followBtn: {
    backgroundColor: '#9b00e8',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  followText: { color: 'white', fontWeight: 'bold' },
});

export default Search;
