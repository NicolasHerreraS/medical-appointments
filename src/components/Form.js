import React, {useState} from 'react';
import {Text, Modal, Button, View} from 'react-native';

export const Form = ({modalVisible, newUser}) => {|
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <Text>Formulario de registro</Text>
      <Button title="Aceptar" onPress={newUser}></Button>
    </Modal>
  );
};
