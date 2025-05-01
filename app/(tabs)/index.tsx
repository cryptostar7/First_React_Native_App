import { Alert, Image, StyleSheet, Platform, View, Text, Button, FlatList } from 'react-native';
import { Icon } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const onPressButton = () => {
    Alert.alert('Welcome to React Native Tutorial');
  }

  return (
    <View style = {listViewStyle.container}>
      {/* <Button onPress = {onPressButton} title="Press Me" color="green" />
      <StatusBar style='auto' /> */}
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={listViewStyle.item}>{item.key}</Text>
            <Icon name='eye-outline' type='ionicon' color='green' size={20} />
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

const customStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title : {
    color: 'green',
    fontSize: 20,
  },
  subTitle: {
    color: 'red'
  }
})

const alertStyle = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const listViewStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});