import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Interest from "./components/Interest";
import Settings from "./components/Settings";

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [fields, setFields] = useState({
    name: "pallawi",
    age: "26",
    email: "chiku@gmail.com",
    interests: ["coding", "react"],
    theme: "dark",
  });
  const tabs = [
    {
      name: "Profile",
      Component: Profile,
    },
    {
      name: "Interest",
      Component: Interest,
    },
    {
      name: "Settings",
      Component: Settings,
    },
  ];

  const ActiveTabComponent = tabs[activeTab].Component;

  return (
    <>
      <div className="tab-container">
        {tabs.map((t, index) => (
          <div className="tab" key={index} onClick={() => setActiveTab(index)}>
            {t.name}
          </div>
        ))}
      </div>
      <div>
        <ActiveTabComponent fields={fields} setFields={setFields}/>
      </div>
    </>
  );
}

export default App;
