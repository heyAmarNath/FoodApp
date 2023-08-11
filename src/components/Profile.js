import { useEffect, useState } from "react";

const Profile = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    console.log("useEffect");

    //API Call
    getUserInfo();

    // *how to unmount component in functinal component?
    // const timer = setInterval(() => {
    //   console.log("Timer");
    // }, 1000);

    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  async function getUserInfo() {
    const data = await fetch("https://api.github.com/users/heyamarnath");
    const json = await data.json();
    console.log(json);

    setInfo(json);
  }

  if (info === null) return <h1>Loading...</h1>;
  return (
    <>
      <h1>{info.name}</h1>
      <h2>{info.location}</h2>
      <img src={info.avatar_url} alt="logo" />
    </>
  );
};

export default Profile;
