import { Avatar } from "antd";
import { useState } from "react";


export function Logo() {
  const [characterIndex, setCharacterIndex] = useState(0);
  const characters: Array<string> = [
    "avengers",
    "beast",
    "cyclops",
    "deadpool",
    "groot",
    "human-torch",
    "jessica-jones",
    "logan",
    "luke-cage",
    "magneto",
    "rogue",
    "spider-man",
    "storm",
    "thanos",
    "venom"
  ];

  const handleClick = () => {
    setCharacterIndex((characterIndex + 1) % characters.length);
  };

  const currentCharacter = characters[characterIndex] ?? "deadpool";

  return (
    <Avatar src={ `./characters/${ currentCharacter }.svg` } onClick={ handleClick }/>
  );
}

export default Logo;