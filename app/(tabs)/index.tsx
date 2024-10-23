import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Camera Permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const buttonSize = 40;

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.checkmarkButton}>
          <Ionicons name="checkmark" size={buttonSize} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.flipButton} onPress={toggleCameraFacing}>
          <Ionicons name="camera-reverse-outline" size={buttonSize} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    width: '85%',
    height: '70%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginTop: 16,
    width: '85%',
    justifyContent: 'space-between', // Positions buttons on the left and right
  },
  checkmarkButton: {
    alignItems: 'center',
    backgroundColor: '#00A86B', // Green background for the checkmark button
    padding: 10,
    borderRadius: 50,
  },
  flipButton: {
    alignItems: 'center',
    backgroundColor: '#195b91',
    padding: 10,
    borderRadius: 50,
  },
});
