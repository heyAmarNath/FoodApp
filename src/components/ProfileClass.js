import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      avatar_url: "",
    };
    console.log("Constructor-" + this.props.name);
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/heyamarnath");
    const json = await data.json();
    console.log("data-" + this.props.name);

    this.setState(json);

    // * Learn the concept of componentDidMount and componentWillUnmount with the help of setInterval() and Clear interval
    // this.timer = setInterval(() => {
    //   console.log("Hey Amar");
    // }, 1000);

    console.log("Component Did Mount-" + this.props.name);
  }

  componentDidUpdate() {
    console.log("component Did Update");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("component Will Unmount");
  }

  render() {
    console.log("Render-" + this.props.name);

    return (
      <>
        <h1>Profile Class Component</h1>
        <img
          src={this.state.avatar_url}
          alt="User Avatar"
          style={{ width: "100px", borderRadius: "50%" }}
        />
        <h2>Name:{this.state.name}</h2>
        <h2>Location:{this.state.location}</h2>
      </>
    );
  }
}

export default Profile;
