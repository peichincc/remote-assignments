const Color = ({ color, colorCorrector, selectColor, index }) => {
  const changeSpanState = () => {
    if (selectColor.selectIndex === index) {
      colorCorrector({
        theColor: null,
        selectIndex: null,
      });
    } else {
      console.log("color code: " + color.code);
      colorCorrector({
        theColor: color.code,
        selectIndex: index,
      });
    }
  };
  return (
    <div
      className={
        selectColor.selectIndex === index ? "colorSelectShow" : "colorSelect"
      }
    >
      <div
        className="colorBox"
        style={{ backgroundColor: "#" + color.code }}
        onClick={changeSpanState}
      ></div>
    </div>
  );
};
