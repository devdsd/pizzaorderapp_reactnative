import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Header from './src/components/Header';
import PizzaOrderLists from './src/components/PizzaOrderLists';
import PizzaOrderForms from './src/components/PizzaOrderForms';

export default function App() {

  const [isLoading, setLoading] = useState(true);
  const [pizzas, setPizza] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.11/api/pizzas')
      .then((response) => response.json())
      .then((response) => setPizza(response.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


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
                  <PizzaOrderForms />
              </View>
              
                  {/** Pizza Order Items */}
              <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 15 }}>
                PIZZA ORDERS
              </Text>
              
              <View style={styles.list}>
                <FlatList
                  keyExtractor={({ id }) => id.toString()}
                  data={pizzas}
                  renderItem={({ item }) => (
                    <PizzaOrderLists item={item} />
                  )}
                />
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
    padding:40,
  },
  list: {
    flex: 1,
    marginTop: 10,
  }

});
