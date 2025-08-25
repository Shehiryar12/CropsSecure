import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';

const Sheet = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Open Bottom Ssssssheet" onPress={() => setVisible(true)} />

      <Modal transparent visible={visible}  animationType="slide">
        <View style={styles.bottomSheet}>
          <Text style={{ fontSize: 18 }}>Hello! 👋</Text>
          <Button title="Close" onPress={() => setVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default Sheet;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  bottomSheet: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
