import React, { Component } from "react";

class App extends Component {
  state = {
    active: false,
  };
  render() {
    // pierwszy sposób

    // const btn_off = {
    //   border: "2px solid black",
    //   padding: "10px 20px",
    //   fontFamily: "arial",
    //   fontSize: 30,
    //   display: "block",
    //   margin: "20px auto",
    //   backgroundColor: "white",
    // };

    // const btn_on = {
    //   border: "2px solid black",
    //   padding: "10px 20px",
    //   fontFamily: "arial",
    //   fontSize: 30,
    //   display: "block",
    //   margin: "20px auto",
    //   backgroundColor: "cadetblue",
    //   color: "white",
    // };

    // drugi sposób

    // const styles = {
    //   btn_off: {
    //     border: "2px solid black",
    //     padding: "10px 20px",
    //     fontFamily: "arial",
    //     fontSize: 30,
    //     display: "block",
    //     margin: "20px auto",
    //     backgroundColor: "white",
    //   },
    //   btn_on: {
    //     border: "2px solid black",
    //     padding: "10px 20px",
    //     fontFamily: "arial",
    //     fontSize: 30,
    //     display: "block",
    //     margin: "20px auto",
    //     backgroundColor: "cadetblue",
    //     color: "white",
    //   },
    // };

    // sposób trzeci

    let btn = {
      border: "2px solid black",
      padding: "10px 20px",
      fontFamily: "arial",
      fontSize: 30,
      display: "block",
      margin: "20px auto",
      backgroundColor: "white",
    };

    if (this.state.active) {
      btn.backgroundColor = "cadetblue";
      btn.color = "white";
    }
    return (
      <div>
        <button
          style={btn}
          onClick={() => this.setState({ active: !this.state.active })}
        >
          {this.state.active ? "Wyłącz" : "Włącz"}
        </button>
      </div>
    );
  }
}

export default App;
