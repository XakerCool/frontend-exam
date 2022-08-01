import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [text, setText] = useState("");
  let [isMistake, setIsMistake] = useState(true);
  let [mistakeMsg, setMistakeMsg] = useState("");
  return (
    <div>
      <div className='input-container'>
        <input type="text" value={text} onChange={(e) => {
          setText(e.target.value);
          console.log(text);
          if(e.target.value.length >= 5) {
            setMistakeMsg("");
            setIsMistake(false);
          } else {
            let resultBlock = document.getElementById('result_container');
            setMistakeMsg("Текст должен быть длиной не менее 5 символов! Поле не может быть пустым!");
            setIsMistake(true);
            if(resultBlock) {
              if(!isMistake) {
                resultBlock.style.display = 'none';
              }
            }
          }
        }} onBlur={(e) => {
          if(e.target.value.length >= 5) {
            setMistakeMsg("");
            setIsMistake(false);
          } else {
            let resultBlock = document.getElementById('result_container');
            setMistakeMsg("Текст должен быть длиной не менее 5 символов! Поле не может быть пустым!");
            setIsMistake(true);
            if(resultBlock) {
              if(!isMistake) {
                resultBlock.style.display = 'none';
              }
            }
          }
        }}/>
        <button disabled={isMistake} onClick={(e) => {
          e.preventDefault();
          let resultBlock = document.getElementById('result_container');
          if(resultBlock) {
            if(!isMistake) {
              resultBlock.style.display = 'block';
            }
          }
        }}>Click me</button>
      </div>
      <div className='mistakes-container'>
        {mistakeMsg}
      </div>
      <div className='result-container' id='result_container' style={{
        display: 'none'
      }}>
        Результат: {text}
      </div>
    </div>
  );
}

export default App;