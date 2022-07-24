const Counter = ({ number, setNumber, max, updateProductNumber }) => {
  return (
    <div className="counterWrapper">
      <button
        onClick={() => {
          if (number >= 1) {
            let newNumber = number - 1;
            setNumber(newNumber);
            updateProductNumber(newNumber);
          } else {
            alert("Number cannot be minus!");
          }
        }}
      >
        -
      </button>
      <div className="number">{number}</div>
      <button
        onClick={() => {
          if (number >= max) {
            alert("There is no more stock.");
            setNumber(max);
            updateProductNumber(max);
          } else {
            let newNumber = number + 1;
            setNumber(newNumber);
            updateProductNumber(newNumber);
          }
        }}
      >
        +
      </button>
    </div>
  );
};
