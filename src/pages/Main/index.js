import React from 'react';
import { WebView } from 'react-native-webview';

export default function Main() {
  return (
    <WebView
      style={{ marginTop: 15 }}
      source={{ uri: 'https://www.hep.com.br/condbr.html' }}
    />    
  );
}
