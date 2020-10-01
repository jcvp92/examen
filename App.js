import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Compone item1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Compone item2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Compone item3',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Compone item4',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = (props) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
       <Image

style = {styles.imgStyle}
source = {require('./img/react.png') }

>
</Image>


      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

       
  imgStyle: {
    width: 360,
    height: 300,
    marginTop: 30
    

  }
});



export default App;
