import React from "react";
import { v4 as uuid } from "uuid";

interface Props {
  onSelectBoardSize: (size: string) => void;
}
const SelectBoardSize = ({ onSelectBoardSize }: Props) => {
  const availableSizes = Array(17 - 3).fill(undefined);

  return (
    <select onChange={(e) => onSelectBoardSize(e.target.value)}>
      {availableSizes.map((_, i) => {
        if (i === 0) {
          return <option key={uuid()}>Select Board Size</option>;
        }
        const size = 3 + i - 1;
        return <option key={uuid()} value={size}>{`${size} X ${size}`}</option>;
      })}
    </select>
  );
};
export default SelectBoardSize;
