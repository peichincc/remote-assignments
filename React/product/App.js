const App = () => {
  const { useState, useEffect } = React;
  const [cartItemAmount, setCartItemAmount] = useState(0);

  const checkLocalStorageItem = () => {
    if (localStorage.userSelectData) {
      const userSelectData = JSON.parse(localStorage.userSelectData);
      let sum = 0;
      for (let pid in userSelectData) {
        for (let color in userSelectData[pid]) {
          for (let size in userSelectData[pid][color]) {
            sum += userSelectData[pid][color][size];
          }
        }
      }
      console.log("Current Cart number:", sum);
      setCartItemAmount(sum);
    }
  };

  useEffect(() => {
    checkLocalStorageItem();
  }, []);

  return (
    <div>
      <Header cartItemAmount={cartItemAmount} />
      <div className="main">
        <Product checkLocalStorageItem={checkLocalStorageItem} />
        <Footer cartItemAmount={cartItemAmount} />
      </div>
    </div>
  );
};
