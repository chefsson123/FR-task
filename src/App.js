import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";

import Settings from "./components/Settings";

import Table from "./components/Table";

function App() {
  const [openSettings, setOpenSettings] = useState(false);
  const [fetchInfo, setFetchInfo] = useState([]);
  const openSettingsHandler = (event) => {
    setOpenSettings(true);
  };

  useEffect(() => {
    fetch("https://grid-app-dbeee-default-rtdb.firebaseio.com/Users.json")
      .then((res) => res.json())
      .then((data) => {
        const fetchedUsers = data.map((user) => {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            userStatus: user.userState,
          };
        });

        setFetchInfo(fetchedUsers);
      });
  }, []);

  return (
    <div>
      <Navbar />
      {openSettings ?  <Settings open={openSettingsHandler} /> : <Table fetched={fetchInfo} open={openSettingsHandler} />}
  </div>

     
     
        
     
    
  );
}

export default App;
