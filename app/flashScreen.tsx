import { useState } from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Questions from "@/constants/Questions"

export default function FlashcardScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.headerContainer}>
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>US History</Text>
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
    marginTop : -13,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '600',  
  },
});
