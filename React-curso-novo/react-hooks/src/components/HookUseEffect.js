import { useEffect, useState } from "react";

const HookUseEffect = () => {
  //1- useEffect sem dependencias

  useEffect(() => {
    //console.log("Estou sendo executado");
  });

  const [number, setNumber] = useState(1);

  const ChangeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - useEffect com dependencias
  useEffect(() => {
    //console.log("Serei Executado só uma vez");
  }, []);

  // 3 - item no array de dependencias

  const [outronumero, setOutroNumero] = useState(0);

  const ChangeNumber = () => {
   //setOutroNumero(outronumero + 1);
  };

  {/*}useEffect(() => {
   if (outronumero < 0) {
      console.log("só irei executar quando o  outronumero mudar");
    }
  }, [outronumero]); {*/}

  // 4 - cleanup useEffect

  // useEffect(() => {

  //  const timer = setTimeout(() =>{
      //  console.log("Hello World");
        
    //    setOutroNumero(number + 1)
   // }, 2000)

    // return() => clearTimeout(timer)
 // }, [outronumero]);

  return (
    <div>
      <h2>UseEffect</h2>
      <p>Numero: {number}</p>
      <button onClick={ChangeSomething}>Acrecentar</button>
      <p>Outro numero: {outronumero}</p>
      <button onClick={ChangeNumber}>Diminuir</button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
