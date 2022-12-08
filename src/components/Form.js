import React, {useState} from 'react';
import {Text, Modal, TextInput, Button, View} from 'react-native';
import DatePicker from 'react-native-date-picker';

export const Form = ({modalVisible, newUser}) => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dateP, setDateP] = useState(new Date());
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <Text>Formulario de registro</Text>
      <Text style={styles.text_label}>Nombre</Text>
      <TextInput
        style={styles.text_input}
        placeholder="Nombre"
        value={user}
        onChangeText={setUser}
        multiline={true}
        numberOfLines={5}
      />
      <Text style={styles.text_label}>Correo</Text>
      <TextInput
        style={styles.text_input}
        placeholder="Correo"
        value={email}
        onChangeText={setEmail}
        multiline={true}
        numberOfLines={5}
      />
      <Text style={styles.text_label}>Teléfono</Text>
      <TextInput
        style={styles.text_input}
        placeholder="Celular"
        value={phone}
        onChangeText={setPhone}
        multiline={true}
        numberOfLines={5}
      />
      <Text style={styles.text_label}>Fecha</Text>
      <DatePicker
        style={styles.content_date}
        date={dateP}
        locale="es"
        mode = "date"
        onDateChange={date =>setDateP(date)}
        multiline={true}
        numberOfLines={5}
      ><DatePicker/>
      <Button title="Aceptar" onPress={newUser}></Button>
      <Pressable
        style={styles.btnExit} 
        onPress={()=>setModalVisible(!modalVisible)}>Cancelar</Pressable>
    </Modal>
  );
};
