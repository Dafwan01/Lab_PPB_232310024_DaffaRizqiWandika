import { View, Text } from 'react-native';
import React from 'react';

const Bio = ({ user }) => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontWeight: 'bold' }}>Identity</Text>
      <Text>NPM: {user.identity.npm}</Text>
      <Text>Name: {user.identity.firstname} {user.identity.middlename} {user.identity.lastname}</Text>

      <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Educations</Text>
      {user.educations.map((edu) => (
        <Text key={edu.id}>- {edu.school}</Text>
      ))}

      <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Contact</Text>
      <Text>Phone: {user.mobile_phone}</Text>
      <Text>Email: {user.email}</Text>
    </View>
  );
};

export default Bio;
