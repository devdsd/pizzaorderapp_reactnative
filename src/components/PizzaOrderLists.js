import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Modal, Picker } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

export default function PizzaOrderLists({ item, deletePizza, editPizza }) {

    const [modalOpen, setModalOpen] = useState(false)

    
    const [customer_name, setCustomerName] = useState(item.customer_name);
    const [typeValue, setTypeValue] = useState(item.type);
    const [crustValue, setCrustValue] = useState(item.crust);

    const inputHandler = (val) => {
        setCustomerName(val);
    }

    const pizzaHandler = (customer_name, typeValue, crustValue) => {
        let pizza = {pizza_id: item.id, customer_name: customer_name, type: typeValue, crust: crustValue};
        editPizza(pizza);
    }



    return (
        
        <View style={styles.card}>
            <Card title={item.customer_name}>
                <Text style={{marginBottom: 10}}>
                    <Text style={{fontWeight: 'bold' }}> TYPE: </Text> {item.type} {'\n'}
                    <Text style={{fontWeight: 'bold' }}> CRUST: </Text>{item.crust}
                </Text>

                <Button
                    onPress={() => setModalOpen(true)}
                    icon={<Icon name='edit' color='teal' />}
                    type='outline'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 10}}
                    title='  Edit' />

                <Button
                    onPress={() => deletePizza(item.id)}
                    style={styles.deletebutton}
                    icon={<Icon name='delete' color='#FA1616' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 10}}
                    title='  Delete' />
            </Card>


            {/* <Modal visible={false}> */}
            <Modal visible={modalOpen} animationType='slide'>
                <MaterialIcons 
                        name='close'
                        size={24}
                        onPress={() => setModalOpen(false)}
                />

                <Text style={{marginTop: 20, marginBottom: 50, fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}> UPDATE ORDER  </Text> 
                <View style={styles.modalContent}> 
                    {/* <Text>Hello from Modal!</Text> */}

                        <Text style={{marginBottom: 5, fontSize: 15, fontWeight: 'bold', paddingRight: 20}}> Customer Name: </Text> 
                        <TextInput
                            style={{height: 40, borderColor: 'gray', borderBottomWidth: 1, marginBottom: 5 }}
                            defaultValue={item.customer_name}
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

                        <View style={styles.updateButton}>
                            <Button 
                                style={{marginBottom: 30}}
                                onPress={() =>  {pizzaHandler(customer_name, typeValue, crustValue), setModalOpen(false)}}
                                title="Update"
                            />
                        </View>

                        <Button
                            type='outline'
                            onPress={() => setModalOpen(false)}
                            title="Cancel"
                        />
                        
                </View>

            </Modal>
        </View>
        
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
    },
    deletebutton: {
        color: "red"
    },
    modalContent: {
        // flex: 1,
        padding: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    updateButton: {
        marginBottom: 10,
    }
});