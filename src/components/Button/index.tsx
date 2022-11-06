import React, { ReactNode } from "react";

const BUTTON_TYPES = ["filled", "outlined"] as const;
type ButtonType = typeof BUTTON_TYPES[number];

type Props = {
  children: ReactNode;
  onClick: () => void;
  height?: string;
  type?: ButtonType;
};

const style: { [key in ButtonType]: string } = {
  filled: "bg-gradient-to-r from-[#83D9F0] to-[#9688E9] text-white",
  outlined: "bg-white border-2	text-black",
};

export const Button = (props: Props) => {
  const className =
    "w-full shadow-md rounded-md h-[50px] font-bold " +
    style[props.type ?? "filled"];
  return (
    <button className={className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

// TODO borderの色指定
// border-image-source: linear-gradient(270deg, #9688E9 0.8%, #90A0EB 30.59%, #83D9F0 100%);
