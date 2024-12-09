import { Dispatch, SetStateAction, useState } from 'react';
import './style.css';

function Card({
  title,
  imageSrc,
  setCount,
  show,
}: {
  title: string;
  imageSrc: string;
  setCount: Dispatch<SetStateAction<number>>;
  show: boolean;
}) {
  const [active, setActive] = useState(false);

  return (
    <li
      className={active ? "wrapper active" : "wrapper"}
      style={{ display: show ? "block" : "none" }}
    >

      <button
        onClick={() => {
          setActive((active) => !active);
          if (!active) {
            setCount((count) => count + 1);
          } else {
            setCount((count) => count - 1);
          }
        }}>

        <img src={imageSrc} alt={"Carte" + title} />
        <span>{title}</span>

      </button>
    </ li >
  );
}

export default Card;