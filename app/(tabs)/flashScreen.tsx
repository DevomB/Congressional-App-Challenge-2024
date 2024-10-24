import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import FlipCard from 'react-native-flip-card';
import Questions from '@/constants/Questions'; // Update this path as necessary

export default function HomeScreen() {
  const navigation = useNavigation();
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  function handleCheckmarkPress() {
    setIsFlipped(false);
    if (currentQuestionIndex < Questions.flashcards.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  function handleXPress() {
    setIsFlipped(false);
    if (currentQuestionIndex < Questions.flashcards.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  const currentFlashcard = Questions.flashcards[currentQuestionIndex];

  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>US History</Text>
      </View>
      <View style={styles.container}>
        <FlipCard
          style={styles.flipCard}
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          flip={isFlipped}
          clickable={false}
        >
          {/* Front */}
          <View style={styles.blackButton}>
            <Text style={styles.topText}>Question</Text>
            <TouchableOpacity onPress={() => setIsFlipped(true)}>
              <Text style={styles.buttonText}>{currentFlashcard.question}</Text>
            </TouchableOpacity>
          </View>

          {/* Back */}
          <View style={styles.backButtonContainer}>
            <Text style={styles.topText}>Answer</Text>
            <TouchableOpacity onPress={() => setIsFlipped(false)}>
              <Text style={styles.buttonText}>{currentFlashcard.answer}</Text>
            </TouchableOpacity>
          </View>
        </FlipCard>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.checkmarkButton} onPress={handleCheckmarkPress}>
            <Ionicons name="checkmark" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.xButton} onPress={handleXPress}>
            <Ionicons name="close" size={40} color="white" />
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
  flipCard: {
    width: '85%',
    height: '80%',
    marginTop: 20,
  },
  blackButton: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  backButtonContainer: {
    flex: 1,
    backgroundColor: 'black', // Changed to black for the back side
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  topText: {
    color: 'white',
    fontSize: 40,
    marginBottom: 50,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '75%',
    marginTop: 20,
    marginBottom: 20,
  },
  checkmarkButton: {
    alignItems: 'center',
    backgroundColor: '#00A86B',
    padding: 10,
    borderRadius: 50,
  },
  xButton: {
    alignItems: 'center',
    backgroundColor: '#FF0000',
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
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '600',
  },
});
