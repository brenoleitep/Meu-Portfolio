import { useEffect, useState } from "react";

const Texts = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count + 1);
    }, 70);

    return () => clearInterval(intervalId);
  }, []);

  // Verifica se a propriedade 'text' é uma string antes de chamar a função 'slice'
  const text = typeof props.text === "string" ? props.text : "";

  return text.slice(0, count);
};

export default Texts;
