import { useEffect, useState } from "react";

export default function Couter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((prevSecond) => prevSecond + 1);
    }, 1000);

    return () => clearTimeout(timer);
  });

  return <p>You have used {count} sconds on this website</p>;
}
