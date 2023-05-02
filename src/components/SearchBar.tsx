import React, { useState } from "react";


interface Props {
  onButtonClick: (value: string) => void;
}

const SearchPokemon: React.FC<Props> = ({ onButtonClick }) => {
  const [inputValue, setInputValue] = useState("");
  const [clear, setClear] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    onButtonClick(inputValue);
    setClear(1);
  };

  const handleButtonEmptyValues = () => {
    setInputValue("");
    onButtonClick("");
    setClear(0);
  };

  return (
    <div className="flex">
      <div className="container">
        <input
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>Search</button>
      </div>
      {clear === 0 ? null : (
        <div className="end">
          <button onClick={handleButtonEmptyValues}>Clear</button>
        </div>
      )}
    </div>
  );
};

export default SearchPokemon;