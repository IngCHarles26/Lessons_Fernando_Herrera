import { useState } from "react";

const oneDot = /^[^.]*\.?[^.]*$/;

interface TypeOperation{
  '/': (a:string,b:string)=>number,
  'x': (a:string,b:string)=>number,
  '+': (a:string,b:string)=>number,
  '-': (a:string,b:string)=>number,
  '':()=>void,
}

const typeOperation:TypeOperation = {
  '/': (a,b) =>+a / +b,
  'x': (a,b) =>+a * +b,
  '+': (a,b) =>+a + +b,
  '-': (a,b) =>+a - +b,
  '':()=>'holi',
}

type Operation = ''|'/'|'x'|'+'|'-';

export const useCalculator = ()=>{
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('');
  const [operation, setOperation] = useState<Operation>('');

  const clean = (input:string = '0') => {
    setNumber(input);
    setPrevNumber('');
    setOperation('');
  }

  const buildNumber = (input:string) => {
    let newNumber:string;
    if(number == '0' && input != '.'){
      newNumber = input
    }else if(number=='-0' && input != '.'){
      newNumber = '-' + input;
    }else{
      newNumber = number + input;
    }
    const validatedNumber = oneDot.test(newNumber) ? newNumber : number; 
    setNumber(validatedNumber)
  }

  const changeSign = () => {
    setNumber(
      number[0]=='-'
        ? number.slice(1)
        : '-'+number)
  }

  const deleteOneNumber = () =>{
    setNumber(
      number.length==1 || number.length==2 && number[0]=='-'
        ? '0' 
        : number.slice(0,-1) )
  }

  const changeOperation = (input:Operation) => {
    // if(!(!prevNumber && ['0','-0'].includes(number))){
    //   setOperation(input);
    //   if(!prevNumber){
    //     setPrevNumber(number);
    //     setNumber('0');
    //   }
    // }
    if(!['0','-0'].includes(number)){
      setOperation(input);
      if(prevNumber){
        setPrevNumber(`${typeOperation[operation](prevNumber,number)}`)
      }else{
        setPrevNumber(number);
      }
      setNumber('0');
    }
  }

  const solve = ()=>{
    if(number && prevNumber) {
      const result = typeOperation[operation](prevNumber,number);
      clean(`${result}`)
    }
  }

  return {
    clean,
    changeSign,
    changeOperation,
    deleteOneNumber,
    solve,
    buildNumber,
    number,
    prevNumber,
    operation
  }
}