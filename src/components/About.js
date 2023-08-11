import { Component } from "react";
import Profile from "./ProfileClass";
import ProfileFun from "./Profile";

// !Functional Component
// const About = () => {
//   return (
//     <>
//       <h1>This is about us page. Now go back.</h1>
//       <Profile name={"Amar Nath"} />
//     </>
//   );
// };

// export default About;

// Class Component
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upspeed: 0,
      downspeed: 0,
    };
    console.log("constructor-parent");
  }

  componentDidMount() {
    console.log("component Did Mount-parent");
  }

  render() {
    console.log("render-parent");

    return (
      <div
        style={{
          border: "2px solid tomato",
          backgroundColor: "dodgerblue",
          margin: "10px",
        }}
      >
        <h1>Welcome to About Us Page</h1>
        <ProfileFun />
        {/* <Profile name={"Child"} /> */}
      </div>
    );
  }
}

export default About;
