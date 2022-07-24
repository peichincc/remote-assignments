const Size = ({ size, sizeCorrector, selectSize, index }) => {
  const changeSizeState = () => {
    if (selectSize.selectIndex === index) {
      sizeCorrector({
        theSize: null,
        selectIndex: null,
      });
    } else {
      console.log("size: " + size);
      sizeCorrector({
        theSize: size,
        selectIndex: index,
      });
    }
  };
  return (
    <div
      className={
        selectSize.selectIndex === index
          ? "productSize_Selected"
          : "productSize_Select"
      }
      onClick={changeSizeState}
    >
      {size}
    </div>
  );
};
