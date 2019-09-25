import React from 'react';

import QrCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

export default Menu = ({translateY}) => {
  return (
    <Container  style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange:[0, 1]
      })
    }}>
      <Code>
        <QrCode
          value="https://leozeradev.netlify.com/"
          size={80}
          fgColor="#FFF"
          bgColor="#8810AE"
        />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Meu perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Cofiguração do App</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={()=>{}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
