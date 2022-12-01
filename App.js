/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Node} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Modal,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const nuevoUsuario: () => Node = () => {
  console.log('Nuevo usuario creado exitosamente wu');
};

const App: () => Node = () => {
  const [modalVisible, setModalVisible] = useState(false);
  console.log(modalVisible);
  setTimeout(() => {
    setModalVisible(true);
  }, 3000);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={backgroundStyle}>
      <Text style={styles.sectionTitle}>
        App de quemados
        <Text style={styles.sectionTitleBold}>UAM</Text>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={styles.btnNuevoUsuario}>
          <Text style={styles.btnTextoNuevoUsuario}>Nueva cita</Text>
        </Pressable>
      </Text>
      <Modal animationSlide="fade" visible={modalVisible}>
        <Text>Formulario de registro</Text>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: '#FFC145',
  },
  sectionTitleBold: {
    fontWeight: '900',
    color: '#5B5F97',
    textAlign: 'center',
  },
  btnNuevoUsuario: {
    backgroundColor: '#5B5F97',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  btnTextoNuevoUsuario: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
