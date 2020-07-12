import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { View, Text, Picker, Button } from 'react-native';


export default function PizzaOrderForms() {
    const [selectedValue, setSelectedValue] = useState("Garlic Pizza");


    return (
        <View>
            <Text style={{marginBottom: 5, fontSize: 15, fontWeight: 'bold'}}> Customer Name: </Text> 
            <Input
            placeholder='Please input a name..'
            />

            <Text style={{marginBottom: 5, fontSize: 15, fontWeight: 'bold'}}> Pizza Type: </Text>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 200, marginLeft:20, borderStyle: 'dashed' }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} >
                
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
                selectedValue={selectedValue}
                style={{ height: 50, width: 200, marginLeft:20, borderStyle: 'dashed' }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} >
                
                    <Picker.Item label="Chessy Crust" value="Chessy" />
                    <Picker.Item label="Thin Crust" value="Thin" />
                    <Picker.Item label="Thick Crust" value="Thick" />
                    <Picker.Item label="Deep Crust" value="Deep" />
                    <Picker.Item label="Stuffed Crust" value="Stuffed" />

            </Picker>

            <Button title="Order!" />

        </View>
    )
}