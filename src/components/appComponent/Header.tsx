import { useEffect, useState } from "react";

const Header = () => {
  const [greeting, setGreeting] = useState<string>("");
  let hours = new Date().getHours();

  useEffect(() => {
    if (hours >= 4 && hours < 12) setGreeting("Good Morning ");
    else if (hours >= 12 && hours < 16) setGreeting("Good Afternoon ");
    else if (hours >= 16 && hours < 22) setGreeting("Good Evening ");
    else setGreeting("Good Night ");
  }, [hours]);

  return (
    <div className="flex h-20 justify-center items-center bg-blue-950 text-white w-180">
      <div className="text-2xl font-bold">{greeting} Ideator !!!</div>
    </div>
  );
};

export default Header;
