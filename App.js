import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Keyboard, TouchableWithoutFeedback, ActivityIndicator, Alert, Modal } from 'react-native';
import Header from './src/components/Header';
import PizzaOrderLists from './src/components/PizzaOrderLists';
import PizzaOrderForms from './src/components/PizzaOrderForms';

export default function App() {

  const [isLoading, setLoading] = useState(true);
  const [pizzas, setPizzaList] = useState([]);

  async function fetchPizzas() {
    fetch('http://192.168.1.11/api/pizzas')
      .then((response) => response.json())
      .then((response) => setPizzaList(response.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchPizzas();
  }, []);


  async function addPizza(pizza) {
    fetch('http://192.168.1.11/api/pizza', {
      method: 'post',
      body: JSON.stringify(pizza),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        Alert.alert('Added!', 'Pizza Order Added Successfully!');
        fetchPizzas();
      })
      .catch(error => console.log(error));
  }

  async function editPizza(pizza) {
    fetch('http://192.168.1.11/api/pizza', {
      method: 'put',
      body: JSON.stringify(pizza),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        Alert.alert('Updated!', 'Pizza Order Updated Successfully!');
        fetchPizzas();
      })
      .catch(error => console.log(error));
  }


  async function deletePizza(id) {
    fetch(`http://192.168.1.11/api/pizza/${id}`, {
      method: "delete"
    })
      .then(res => res.json())
      .then(res => {
        Alert.alert('Deleted!', 'Pizza Order Deleted Successfully!');
        fetchPizzas();
      })
      .catch(error => console.log(error));
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}>

        <View style={styles.container}>

          {/**Header */}
          <Header />
          <View style={styles.content}>

            {/**Pizza Order Form */}
            <View style={styles.orderPizza}>
              <PizzaOrderForms addPizza={addPizza}/>
            </View>

            {/** Pizza Order Items */}
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 15 }}>
              PIZZA ORDERS
              </Text>

            <View style={styles.list}>
              {isLoading ? <ActivityIndicator /> : (
                <FlatList
                  keyExtractor={({ id }, index) => id.toString()}
                  data={pizzas}
                  renderItem={({ item }) => (
                    <PizzaOrderLists item={item} deletePizza={deletePizza} editPizza={editPizza}/>
                    // <Text> {item.index} </Text>
                  )}
                />
              )}
            </View>

          </View>
        </View>
      </TouchableWithoutFeedback>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 10,
  }

});
