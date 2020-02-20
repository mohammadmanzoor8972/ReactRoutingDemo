import React from "react";
import { Route, Link } from "react-router-dom";

import "./styles.css";
import { render } from "react-dom";

function App(props) {
  console.log(props);
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button
          onClick={() => {
            // console.log(this.props);
          }}
        >
          Page 1
        </button>
        <NavBar />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
        <Route path="/" exact component={() => <span>Page not found</span>} />
      </div>
    </>
  );
}

function NavBar() {
  return (
    <>
      <div>
        <a href="/page1">Page 1</a>&nbsp;
        <a href="/page2">Page 2</a>
        &nbsp;
        <Link to="/page3">Page 3</Link>
      </div>
      <div>
        <Link to="/page1"> Page 1 </Link>
        <Link to="/page2/:id"> Page 2 </Link>
        <Link to="/page3"> Page 3 </Link>
      </div>
    </>
  );
}

function Page1(props) {
  console.log(props);
  return (
    <>
      <h4>Page 1</h4>
      <button
        onClick={() => {
          props.history.push("/page2/?id=30");
        }}
      >
        Page 3
      </button>
    </>
  );
}

function Page2(props) {
  return <h4>Page 2</h4>;
}

function Page3(props) {
  return <h4>Page 3</h4>;
}

export default App;
