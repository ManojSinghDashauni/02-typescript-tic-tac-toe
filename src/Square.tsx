// import { useState } from "react";

interface propsItem {
  value: "X" | "O" | null;
  handleClick: () => void;
}

const Square: React.FC<propsItem> = (props) => {
  // const [value, setValue] = useState<"X" | "O" | null>(null);

  return (
    <div
      className="border-double border-2 border-black w-full h-full grid place-items-center text-5xl font-semibold bg-green-300"
      onClick={props.handleClick}
    >
      {props.value === "X" ? (
        <span className="bg-red-500 w-full h-full  grid place-items-center">
          💙
        </span>
      ) : null}
      {props.value === "O" ? (
        <span className="bg-blue-500 w-full h-full  grid place-items-center">
          ❤️
        </span>
      ) : null}
    </div>
  );
};

export default Square;
