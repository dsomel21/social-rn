import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import { fetchSocials } from './constants/api'

export default class App extends React.Component {
  static defaultProps = {
    fetchSocials
  }

  state = {
    loading: false,
    socials: []
  }

  async componentDidMount () {
    this.setState({ loading: true })
    const data = await this.props.fetchSocials()
    this.setState({ loading: false, socials: data.socials })
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text>Social</Text>

        {this.state.socials.map((social, i) => (
          <Text key={i}>{social.title}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
