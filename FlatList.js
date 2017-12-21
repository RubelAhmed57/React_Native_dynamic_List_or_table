import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { List, ListItem,Card,Button,Divider } from "react-native-elements";
//import { Card, ListItem, Button,Divider } from 'react-native-elements'

class FlatListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  render() {
    return (
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }} >
        <Card title="Table Header">
        {
          this.state.data.map((u, i) => {
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
      </List>
    );
  }
}

export default FlatListDemo;