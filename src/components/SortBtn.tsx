import { ReactNode } from "react";

interface SortBtnProps {
  children: ReactNode;
  onClick: () => void;
}

const SortBtn = ({ children, onClick}: SortBtnProps) => {
  return (
    <button className="text-xs md:text-base rounded-md flex gap-1 items-center shadow-md border px-2 py-1" onClick={onClick} >
      {children}
    </button>
  );
};

export default SortBtn;
