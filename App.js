const users = [
  {
    name: 'brynn',
    age: 23,
    sex: 'male'
  },

  {
    name: 'brynn',
    age: 23,
    sex: 'male'
  },
  {
    name: 'brynn',
    age: 90,
    sex: 'male'
  },
  {
    name: 'Don',
    age: 98,
    sex: 'male'
  },

  {
    name: 'Cynn',
    age: 23,
    sex: 'female'
  },
  {
    name: 'rynn',
    age: 83,
    sex: 'female'
  },
  {
    name: 'ca hax',
    age: 23,
    sex: 'male'
  },

  {
    name: 'dee',
    age: 23,
    sex: 'male'
  },
  {
    name: 'jon',
    age: 23,
    sex: 'male'
  },
  {
    name: 'brynn',
    age: 23,
    sex: 'male'
  },

  {
    name: 'brynn',
    age: 23,
    sex: 'male'
  },
  {
    name: 'brynn',
    age: 90,
    sex: 'male'
  },
  {
    name: 'Don',
    age: 98,
    sex: 'male'
  },

  {
    name: 'Cynn',
    age: 23,
    sex: 'female'
  },
]
import React from 'react'
import { View, ScrollView,Text, Image } from 'react-native'
import { Card, ListItem, Button,Divider } from 'react-native-elements'
import FlatListDemo from './FlatList'

export default class App extends React.Component {
  render() {
    return (

      <ScrollView>
<FlatListDemo />

            {/*
      <Card title="Table Header">
        {
          users.map((u, i) => {
            return (
              <View key={i} >
                {Object.keys(u).map((k, i) => <Text key={i}>{k + ' : ' + u[k]}</Text>)}
                <Button
                large
                backgroundColor='#ffffff'
                color='#4286f4'
                title='Edit' />
                <Divider style={{ backgroundColor: '#afb8d3', height: 0.5 }} />
                
              </View>
            );
          })
        }
      </Card>
       */}
      </ScrollView>
    );
  }
}
{/*
*/}