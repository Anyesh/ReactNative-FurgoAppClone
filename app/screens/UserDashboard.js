import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import TopBar from '../components/TopBar';
import Container from '../components/Container';
import Content from '../components/Content';
import ButtonLink from '../components/ButtonLink';

class UserDashboard extends Component {
  render() {
    return (
      <Container>
        <StatusBar translucent={false} />
        <TopBar title={'Mis anuncios'} firstActon={'settings'} secondAction={'new'} />
        <Content>
          <Text> No hay ningún anuncio en tu panel, puedes publicar uno pulsando en el botón. </Text>
          <ButtonLink url={'NewAd'} text={'Publicar anuncio'}/>
        </Content>
      </Container>
    );
  }
}

export default UserDashboard;