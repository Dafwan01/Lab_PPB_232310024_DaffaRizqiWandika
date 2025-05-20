import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';

const users = [
  { id: '1', name: 'Zaki', gender: 'male' },
  { id: '2', name: 'Adrian', gender: 'male' },
  { id: '3', name: 'Hana', gender: 'female' },
  { id: '4', name: 'Lukman', gender: 'male' },
  { id: '5', name: 'Cindy', gender: 'female' },
];

const getAvatarUrl = (gender) => {
  return gender === 'male'
    ? 'https://png.pngtree.com/png-clipart/20220603/original/pngtree-faceless-male-profile-icon-png-image_7902585.png'
    : 'https://img.lovepik.com/png/20231120/woman-icon-to-depict-the-female-profile-vector-ui-girlfriends_649670_wh1200.png';
};

const Home = (navigation) => {
  return (
    <ScrollView style={styles.container}>
     <FlatList
        data={users}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.storyList}
        renderItem={({ item }) => (
          <View style={styles.storyItem}>
            <Image
              source={{ uri: getAvatarUrl(item.gender) }}
              style={styles.storyAvatar}
            />
            <Text style={styles.storyText}>{item.name}</Text>
          </View>
        )}
      />

      <View style={styles.post}>
        <Text style={styles.poster}> DIki</Text>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxIKPoCoPIlCyFbkmTYvL_s_RvYga7OlUILw&s' }} style={styles.imagePlaceholder} />
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black', paddingTop: 40, paddingHorizontal: 10 },
  storyList: { marginBottom: 20 },
  storyItem: { alignItems: 'center', marginRight: 15 },
  storyAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ccc',
  },
  storyText: { color: 'white', fontSize: 12, marginTop: 5 },
  post: { paddingVertical: 10 },
  poster: { color: 'white', fontWeight: 'bold', fontSize: 16, marginBottom: 10 },
  imagePlaceholder: {
    height: 300,
    backgroundColor: '#555',
    borderRadius: 10,
    marginBottom: 10,
  },
  caption: { color: 'white', fontSize: 16, textAlign: 'center' },
});

export default Home;
