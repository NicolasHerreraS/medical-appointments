import React, {useState} from 'react';
import {Text, Modal} from 'react-native';

export const Form = props => {
    const [modalVisible, setModalVisible] = useState(false);
    console.log(modalVisible);
    return (
        <Modal animationType ="slide" visible ={modalVisible}>
            <Text>Formulario de registro</Text>
        </Modal>
    )
}