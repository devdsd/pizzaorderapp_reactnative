import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

// jsx templates
export default function App() {

  // const [name, setName] = useState('Diether');
  // const [age, setAge] = useState(22);
  const [people, setPeople] = useState([
    {name: 'Dummy1', id: '1'},
    {name: 'Dummy2', id: '2'},
    {name: 'Dummy3', id: '3'},
    {name: 'Dummy4', id: '4'},
    {name: 'Dummy5', id: '5'},
    {name: 'Dummy6', id: '6'},
    {name: 'Dummy7', id: '7'}
    
  ]);

  // const clickHandler = () => {
  //   setName('DevDSD');
  //   setAge(25);
  // }

  const pressHandler = (id) => {
    // console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id);
    });
  }

  return (
    <View style={styles.container}>
        
        {/* FlatList (Another way to implement List of Items) */}
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={ ({ item }) => {
          return (
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
              <Text style={styles.item}> {item.name} </Text>
            </TouchableOpacity>
          )
        }}
        />
        
        
        {/* List and ScrollView */}
      {/* <Text>List and ScrollView</Text>
      <ScrollView>
        { people.map( (item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}> {item.name} </Text>
            </View>
          )
        })}
      </ScrollView> */}

      {/* <View style={styles.header}>
        <Text> Header </Text>
      </View> */}

          {/* Testing <TextInput> Tag */}
      {/* <Text> Enter Name: </Text>
      <TextInput 
          multiline
          style={styles.inputName}
          placeholder='e.g John Doe'
          onChangeText = {(val) => setName(val)} />

      <Text> Enter Age: </Text>
      <TextInput 
          keyboardType='numeric'
          style={styles.inputAge}
          placeholder='e.g 99'
          onChangeText = {(val) => setAge(val)} />
      <Text> Name: {name}, Age: {age} </Text> */}
                  {/*           */}

      {/* <View style={styles.buttonContainer}>
        <Button title="Update State" onPress={clickHandler} />
      </View> */}

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  header: {
    backgroundColor: '#ff5733',
    padding: 3,
  },
  boldText: {
    fontWeight: 'bold'
  },
  buttonContainer: {
    marginTop: 5,
  },
  inputName: {
    borderWidth: 1,
    padding: 5,
    margin: 5,
    width: 200,
    borderColor: '#777'
  },
  inputAge: {
    borderWidth: 1,
    padding: 5,
    margin: 5,
    width: 200,
    borderColor: '#777'
  },
  item: {
    marginTop: 10,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: 'teal',
    fontSize: 25
  }

});
