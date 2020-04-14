import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

class Live extends Component {
  state = {
    coords: null,
    status: null,
    direction: '',
  };

  render() {
    const { status, coords, direction } = this.state;

    if (status === null) {
      return <ActivityIndicator style={{ marginTop: 30 }} />;
    }

    if (status === 'denied') {
      <View>
        <Text>Denied</Text>
      </View>;
    }

    if (status === 'undetermined') {
      <View>
        <Text>undetermined</Text>
      </View>;
    }

    return (
      <View>
        <Text>Live</Text>
      </View>
    );
  }
}

export default Live;
