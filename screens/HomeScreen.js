import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import { SearchBar } from 'react-native-elements'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Search a medicament</Text>
          </View>
          <View style={styles.searchContainer}>
            <SearchBar showLoading platform="ios" cancelButtonTitle="Cancel" placeholder='Search'  placeholder='Type Here...' />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  contentContainer: {
    paddingTop: 100,
    flexDirection: 'column'
  },
  getStartedContainer: {
    marginHorizontal: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  searchContainer: {
    marginHorizontal: 50,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});
