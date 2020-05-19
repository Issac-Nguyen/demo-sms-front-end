import React, {useState, useCallback} from 'react';
import Container from './components/container'
import Logo from './components/logoCpn'
import CloseBtn from './components/close-button'
import Header from './components/header'
import InputList from './components/input-list'
import Button from './components/button'
import Footer from './components/footer'
import HightlightText from './components/hightlightText'
import InvalidArea from './components/invalid-area'
import './App.scss'
import config from './config'

function App() {
  let [valid, setValid] = useState<boolean | undefined>(false);
  let [validActive, setValidActive] = useState<boolean>(false);
  const validFn = (vl?: boolean) => {
    setValidActive(true)
    setValid(vl);
  }
    
  return (
    <div className="App">
      <Container>
        <Logo/>
        <CloseBtn closeBtn={config.App.closeBtn}>X</CloseBtn>
        <div>
          <Header h3={config.App.h3} h4={config.App.h4}/>
          <InputList {...config.App.InputList} validFn={validFn}/>
          <div><InvalidArea {...config.App.InvalidMsg} show={(validActive && (valid == false)) ? true : false}>Only number allowed</InvalidArea> </div>
          <Button {...config.App.submitBtn} className={!valid ? 'disabled' : ''}>{config.App.submitBtn.content}</Button>
          <Footer>
            {config.App.footer.content}<HightlightText {...config.App.footer.hightlight}>{config.App.footer.hightlight.content}</HightlightText>
          </Footer>
        </div>
      </Container>
    </div>
  );
}

export default App;
