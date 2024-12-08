// bug.js
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = []; // Initially empty array

const MyList = () => {
  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text> {/*Error here if item is undefined*/}
      </View>
    );
  };
  return (
    <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
  );
};

export default MyList;

// bugSolution.js
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = []; // Initially empty array

const MyList = () => {
  const renderItem = ({ item }) => {
    if(item){
        return (
          <View>
            <Text>{item.name}</Text>
          </View>
        );
    }
    return null;
  };
  return (
    <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item?.id} />
  );
};

export default MyList;