import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { db, addDoc, collection, onSnapshot } from './firebaseConfig';

const Item = ({text}) => (
  <View style={styles.item}>
    <Text >{text}</Text>
  </View>
);

export default function App() {
  const [text, onChangeText] = useState('');
  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'notes'), snapshot => {
      const updatedNotes = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setNotes(updatedNotes);
    });
    return () => unsubscribe();
  })

  const handleAddNote = async () => {
    if (newNote.trim() !=='') {
      try {
        const docRef = await addDoc(collection(db, 'notes'), {
          text: newNote.trim(),
          createdAt: new Date().toISOString()
        });
        console.log("Berhasil tambah note dengan ID:",docRef.id);
        setNewNote('');
      } catch (error) {
        console.log("Error adding note: ", error)
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text>Notes App ODP BNI</Text>
      <StatusBar style="auto" />
      <TextInput
        onChangeText={setNewNote}
        placeholder='Add a note...'
      />
      <Button title="Add" onPress={() => {
        handleAddNote()
        console.log(notes)
      }}/>
      <FlatList
        data={notes}
        renderItem={({item}) => <Item text={item.text} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
