import { useEffect, useState } from "react";
import "./App.css";
import { getProfile } from "./lib/get_profile";
import Profile from "./component/profile"

function App() {
  const [profile, setprofile] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getProfile(
          "https://670023444da5bd2375534f8b.mockapi.io/api/v1/test"
        );
        setprofile(response);
        console.log(profile);
      } catch (error) {
        console.log("Error");
      }
    }
    fetchData();
  }, []);

  return(
    <>
    {profile.map(profiles=> <Profile profiles={profiles} key={profiles.id}/>)}
    
    </>
  );
}

export default App;
