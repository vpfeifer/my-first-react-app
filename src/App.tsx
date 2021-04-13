import React from 'react';
import './App.css';
import Form from './Form';
import { Title } from './components/Title';
import { Subtitle } from './components/Subtitle';
import { ClickableText } from './components/ClickableText';

function App() {

  const onClick = () => {
    alert("Clicked!")
  }

  return (
    <div>
      <Title content="Register"/>
      <Subtitle>Fill the form</Subtitle>
      <ClickableText onClick={onClick}>Click me</ClickableText>
      <ClickableText color="red" onClick={onClick}>Click me</ClickableText>
      <Form/>
    </div>
  );
}

export default App;
