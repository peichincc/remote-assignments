class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeMenu: false};
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState( prevState => ({
      activeMenu: !prevState.activeMenu
    }));
  }
  render() {
      return (
      <div className="wrapper">
      <header className="header">
        <h1 class="logo">Website / LOGO</h1>

        <div className={`hamburger ${this.state.activeMenu ? "active" : ""}`} onClick={this.toggleMenu}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>

        <ul className={`nav ${this.state.activeMenu ? "active" : ""}`} onClick={this.toggleMenu}>
          <li className="nav-item" />
            <li><a href="#">item1</a></li>
            <li><a href="#">item2</a></li>
            <li><a href="#">item3</a></li>
            <li><a href="#">item4</a></li>
        </ul>
      </header>
      </div>
    );
  }
};


class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (
      <h2 className="welcome" onClick={this.handleClick} style={{color: "Yellow"}}>
        {this.state.isToggleOn ? 'Welcome!' : 'Have a nice day!'}
      </h2>
    );
  }
}

class Content extends React.Component {
    state = {
      visable:true,
    };
    toggle = () =>{
      this.setState({
        visable: !this.state.visable,
      });
    };
  render (){
    const {visable} = this.state;
    return (
      <div>
        <h2 className="section">Content Section</h2>

        <div className="row" >
        {[1, 2, 3, 4].map((index) => {
            return (
              <div key={index} className="col">
                <h2>Content box{index}</h2>
                <p>this is the demo of content box{index}</p>
                <p>this is the demo of content box{index}</p>
                <p>this is the demo of content box{index}</p>
              </div>
            );
          })}
        </div>

        <div className="buttonAction">
        <button className="btn-toggle" onClick={this.toggle} >Call to Action</button>
        </div>

        <div className="row" style={{display:visable?'none':'flex'}} >
        {[5,6,7,8].map((index) => {
            return (
              <div key={index} className="col">
                <h2>Content box{index}</h2>
                <p>this is the demo of content box{index}</p>
                <p>this is the demo of content box{index}</p>
                <p>this is the demo of content box{index}</p>
              </div>
            );
          })}
        </div>

        <div className="main-footer">&copy; Appworks School Remote Assignments</div>

      </div>
    );
  }
};

const App = () => {
  return (
    <div>
    <Header />
    <Welcome />
    <Content />
    </div>
  );
};

ReactDOM.render(
  <App  />,
  document.getElementById('root')
);