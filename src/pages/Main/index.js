import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';

import { Loading } from './styles';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  hideSpinner() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          incognito={true}
          onLoad={() => {
            setInterval(() => {
              this.hideSpinner()
            }, 2300); 
          }}
          style={{ flex: 1 }}
          source={{ uri: 'https://www.hep.com.br/condbr.html'  }}
        />
        {this.state.visible && (
          <Loading
            style={{ height: "100%"}}
            size="large"
          />
        )}
      </View>
    );
  }
}
