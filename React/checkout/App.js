const App = () => {
  const { useState } = React;
  const [cartItemAmount] = useState(0);

  return (
    <div>
      <Header cartItemAmount={cartItemAmount} />
      <div className="main">
        <Checkout />
        <Footer cartItemAmount={cartItemAmount} />
      </div>
    </div>
  );
};
