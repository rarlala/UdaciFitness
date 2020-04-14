import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import MetricCard from './MetricCard';
import { white } from '../utils/colors';
import TextButton from './TextButton';
import { addEntry } from '../actions';
import { removeEntry } from '../utils/api';

class EntryDetail extends Component {
  reset = () => {
    const { remove, goBack, entryId } = this.props;

    remove();
    goBack();
    removeEntry(entryId);
  };
  shouldComponentUpdate(nextProps) {
    return nextProps.metrics !== null && !nextProps.metrics.today;
  }
  render() {
    const { metrics } = this.props;
    return (
      <View style={styles.container}>
        <MetricCard metrics={metrics} />

        <TextButton style={{ margin: 20 }} onPress={this.reset}>
          RESET
        </TextButton>
      </View>
    );
  }
}

function mapStateToProps(state, { route }) {
  const { entryId } = route.params;

  return {
    entryId,
    metrics: state[entryId],
  };
}

export default connect(mapStateToProps)(EntryDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15,
  },
});
