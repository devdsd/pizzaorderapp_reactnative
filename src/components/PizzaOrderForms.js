import React, { useState } from 'react';
import { Input } from 'react-native-elements';
import { View, Text, Picker, Button } from 'react-native';


export default function PizzaOrderForms({ addPizza }) {
    const [typeValue, setTypeValue] = useState("");
    const [crustValue, setCrustValue] = useState("");
    const [customer_name, setCustomerName] = useState("");

    const inputHandler = (val) => {
        setCustomerName(val);
    }
    

    const pizzaHandler = (customer_name, typeValue, crustValue) => {
        let pizza = {customer_name: customer_name, type: typeValue, crust: crustValue};
        addPizza(pizza);
        setCustomerName("");
    }


    return (
        <View>
            <Text style={{marginBottom: 5, fontSize: 15, fontWeight: 'bold'}}> Customer Name: </Text> 
            <Input
                onChangeText={inputHandler}
                placeholder='Please input a name..'
            />

            <Text style={{marginBottom: 5, fontSize: 15, fontWeight: 'bold'}}> Pizza Type: </Text>
            <Picker
                selectedValue={typeValue}
                style={{ height: 50, width: 200, marginLeft:20, borderStyle: 'dashed' }}
                onValueChange={(itemValue, itemIndex) => setTypeValue(itemValue)} >
                
                    <Picker.Item label="Garlic Pizza" value="Garlic Pizza" />
                    <Picker.Item label="Hawaiian" value="Hawaiian" />
                    <Picker.Item label="Margherita" value="Margherita" />
                    <Picker.Item label="Cheese Pizza" value="Cheese Pizza" />
                    <Picker.Item label="Pepperoni Pizza" value="Pepperoni Pizza" />
                    <Picker.Item label="Veggie Pizza" value="Veggie Pizza" />
                    <Picker.Item label="Meat Pizza" value="Meat Pizza" />

            </Picker>


            <Text style={{marginBottom: 5, fontSize: 15, fontWeight: 'bold'}}> Pizza Crust: </Text>
            <Picker
                selectedValue={crustValue}
                style={{ height: 50, width: 200, marginLeft:20, borderStyle: 'dashed' }}
                onValueChange={(itemValue, itemIndex) => setCrustValue(itemValue)} >
                
                    <Picker.Item label="Chessy Crust" value="Chessy" />
                    <Picker.Item label="Thin Crust" value="Thin" />
                    <Picker.Item label="Thick Crust" value="Thick" />
                    <Picker.Item label="Deep Crust" value="Deep" />
                    <Picker.Item label="Stuffed Crust" value="Stuffed" />

            </Picker>

            <Button 
                onPress={() =>  pizzaHandler(customer_name, typeValue, crustValue)}
                title="Order!" />

        </View>
    )
}