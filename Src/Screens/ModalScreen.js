import React, { useState } from 'react';
import { View, Button, Modal, StyleSheet, Text } from 'react-native';

const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Open Button */}
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />

    
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>Hello! I am a Modal 😊</Text>
            <Button title="Close Modal" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // dim background
  },
  modalBox: {
    width: 250,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
});
