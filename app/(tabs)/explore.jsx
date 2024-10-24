import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function StorageScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Folders</Text>
      </View>

      <View style={styles.cardsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('flashScreen')} style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>US History</Text>
            <Text style={styles.cardDescription}>This set covers the founding of America.</Text>
          </View>
          <Text style={styles.cardUpdated}>Last updated: Now</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Physics</Text>
            <Text style={styles.cardDescription}>This set covers laws of motion and energy.</Text>
          </View>
          <Text style={styles.cardUpdated}>Last updated: 10-13-2024</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Chemistry</Text>
            <Text style={styles.cardDescription}>This set covers the periodic table and chemical reactions.</Text>
          </View>
          <Text style={styles.cardUpdated}>Last updated: 10-13-2024</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  cardsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: '90%',
    height: '25%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    padding: 20,
    justifyContent: 'space-between',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDescription: {
    fontSize: 16,
    marginVertical: 5,
    color: '#555',
  },
  cardUpdated: {
    fontSize: 14,
    color: 'gray',
    alignSelf: 'flex-start',
  },
});
