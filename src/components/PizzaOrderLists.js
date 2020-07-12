import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList  } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

export default function PizzaOrderLists({ item }) {
    return (
        
        <View style={styles.card}>
            <Card title={item.customer_name}>
                <Text style={{marginBottom: 10}}>
                    <Text style={{fontWeight: 'bold' }}> TYPE: </Text> {item.type} {'\n'}
                    <Text style={{fontWeight: 'bold' }}> CRUST: </Text>{item.crust}
                </Text>

                <Button
                    icon={<Icon name='edit' color='teal' />}
                    type='outline'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 10}}
                    title='  Edit' />

                <Button
                    style={styles.deletebutton}
                    icon={<Icon name='delete' color='#FA1616' />}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 10}}
                    title='  Delete' />
            </Card>
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
});