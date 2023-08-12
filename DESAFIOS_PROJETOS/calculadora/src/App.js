import { Container, Content, Row } from "./styles";
import { useState } from "react";

import Button from './components/Button';
import Input from './components/Input';

const App = () => {
  const [display, setDisplay] = useState('0')
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState('');

  const handleAddNumber = (number) => {
    setDisplay(prev => `${prev === '0' ? '' : prev}${number}`)
    
    if (firstNumber === '' && operation === '') {
      setFirstNumber(number)
    } else if (firstNumber !== '' && operation === '') {
        setFirstNumber(firstNumber + number)
    } else if (firstNumber === '0' && operation === '-') {
        setFirstNumber(-number)
    } else if (firstNumber < '0' && operation === '-') {
        setFirstNumber(firstNumber + number)
    } else if (firstNumber < '0' && operation === '--') {
        setSecondNumber(secondNumber + number)  
    } else if (firstNumber < '0' && (operation === '*-' || operation === '/-')) {
        setSecondNumber(secondNumber + number)
    } else if (firstNumber === '0' && operation !== '') {
        setSecondNumber(secondNumber + number)
    } else {
        setSecondNumber(secondNumber + number)
    }
  }

  const handleOperator = (operator) => {
    if (operation === operator) {
      setOperation('--');
    } else if (operation === '*' && operator === '-') {
        setOperation('*-')
    } else if (operation === '/' && operator === '-') {
        setOperation('/-')
    } else {
        setOperation(operator)
    }
    setDisplay(prev => `${prev === '0' ? '' : prev} ${operator} `)
  }

  const handleEquals = () => {
    const number1 = Number(firstNumber);
    const number2 = Number(secondNumber);
    switch (operation) {
      case '+':
        handleSumNumbers(number1, number2);
        break;
      case '-':
      case '--':
        handleSubNumbers(number1, number2);
        break;
      case '/':
        handleDivNumbers(number1, number2);
        break;
      case '*':
        handleMultNumbers(number1, number2);
        break;
      case '*-':
        handleMultNumbers(number1, -number2);
        break;
      case '/-':
        handleDivNumbers(number1, -number2);
        break;
      default:
        break;    
    } 
  }

  const handleSumNumbers = (number1, number2) => {
    const sum = number1 + number2;
    setDisplay(String(sum))
    setOperation('');
    setFirstNumber(String(sum))
    setSecondNumber('')
  }

  const handleSubNumbers = (number1, number2) => {
    const sub = number1 - number2;
    setDisplay(String(sub))
    setOperation('-');
    setFirstNumber(String(sub))
    setSecondNumber('')
  }

  const handleDivNumbers = (number1, number2) => {
    const div = number1 / number2;
    setDisplay(String(div))
    setOperation('');
    setFirstNumber(String(div))
    setSecondNumber('')
  }

  const handleMultNumbers = (number1, number2) => {
    const mult = number1 * number2;
    setDisplay(String(mult))
    setOperation('');
    setFirstNumber(String(mult))
    setSecondNumber('')
  }
  

  const HandleOnClear = () => {
    setDisplay('0');
    setFirstNumber('0');
    setSecondNumber('0');
    setOperation('');
  } 

  return (
    <Container>
      <Content>
        <Input value={display} />
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={() => handleOperator('-')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={() => handleOperator('+')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="/" onClick={() => handleOperator('/')}/>
        </Row>
        <Row>
          <Button label="C" onClick={HandleOnClear}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="=" onClick={handleEquals}/>
          <Button label="x" onClick={() => handleOperator('*')}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
