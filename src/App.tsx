 import React from 'react';
import './styles/index.scss'
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <Button className="testetest" autoFocus onClick={
        e => console.log('333')
      }>hello</Button>
      <Button btnType={ButtonType.Danger}>危险</Button>
      <Button size={ButtonSize.Large}>大大大</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>111</Button>
      <Button disabed>heheh</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com" target='_blank'>www.baidu.com</Button>
      <Button disabed btnType={ButtonType.Link} href="https://www.baidu.com">www.baidu.com</Button>
    </div>
  );
}

export default App;
