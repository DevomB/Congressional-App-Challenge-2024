import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

// Define the parameter list for your navigation
type HomeScreenNavigationProp = NavigationProp<ParamListBase, 'HomeScreen'>;

export default function HomeScreen() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const navigation = useNavigation<HomeScreenNavigationProp>();

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
    if (!buttonsDisabled) {
      setFacing(current => (current === 'back' ? 'front' : 'back'));
    }
  }

  function takePicture() {
    if (!buttonsDisabled) {
      setButtonsDisabled(true); // Disable buttons

      console.log('Picture taken!');

      // Navigate to Explore after 3 seconds
      setTimeout(() => {
        setButtonsDisabled(false);
      }, 3000);
    }
  }

  const buttonSize = 40;

  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          disabled={buttonsDisabled}
        >
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Camera</Text>
      </View>
      <View style={styles.container}>
        <CameraView style={styles.camera} facing={facing} />
        {buttonsDisabled && <View style={styles.overlay} />}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.checkmarkButton, buttonsDisabled && styles.disabledButton]}
            onPress={takePicture}
            disabled={buttonsDisabled}
          >
            <Ionicons name="checkmark" size={buttonSize} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.captureButton, buttonsDisabled && styles.disabledButton]}
            onPress={takePicture}
            disabled={buttonsDisabled}
          >
            <Ionicons name="camera-outline" size={buttonSize} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.flipButton, buttonsDisabled && styles.disabledButton]}
            onPress={toggleCameraFacing}
            disabled={buttonsDisabled}
          >
            <Ionicons name="camera-reverse-outline" size={buttonSize} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
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
    height: '80%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginTop: 16,
    width: '85%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkmarkButton: {
    alignItems: 'center',
    backgroundColor: '#00A86B',
    padding: 10,
    borderRadius: 50,
  },
  flipButton: {
    alignItems: 'center',
    backgroundColor: '#195b91',
    padding: 10,
    borderRadius: 50,
  },
  captureButton: {
    alignItems: 'center',
    backgroundColor: '#0a0a0a',
    padding: 10,
    borderRadius: 50,
  },
  headerContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: -13,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '600',
  },
  disabledButton: {
    opacity: 0.5,
  },
});
