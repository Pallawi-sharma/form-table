import { useState, useEffect } from "react";

const Settings = ({ fields, setFields }) => {
  const { theme } = fields; // This is the initial theme from props
  const [activeTheme, setActiveTheme] = useState(theme); // Local state for active theme

  // Update the document's theme when the activeTheme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', activeTheme);
  }, [activeTheme]); // This will trigger when activeTheme changes

  // Handle theme change on radio button change
  const handleCheckbox = (e) => {
    const selectedTheme = e.target.name;
    setFields((prev) => ({ ...prev, theme: selectedTheme })); // Update global state
    setActiveTheme(selectedTheme); // Update local activeTheme state
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="light"
          checked={activeTheme === "light"} // Check if activeTheme is 'light'
          onChange={handleCheckbox} // OnChange updates the theme
        />
        Light
      </label>
      <label>
        <input
          type="radio"
          name="dark"
          checked={activeTheme === "dark"} // Check if activeTheme is 'dark'
          onChange={handleCheckbox} // OnChange updates the theme
        />
        Dark
      </label>
    </div>
  );
};

export default Settings;
