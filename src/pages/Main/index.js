import React from 'react';
import { WebView } from 'react-native-webview';

export default function Main() {
  return (
    <WebView
      style={{ flex: 1 }}
      source={{ uri: 'https://www.hep.com.br/condbr.html' }}
    />
  );
}
