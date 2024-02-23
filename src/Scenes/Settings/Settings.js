import React, { useState } from 'react';
import './Settings.css'; 
import Header from "../../Components/Header";
const SettingsPage = () => {
  const [settings, setSettings] = useState({
    theme: 'light',
    notifications: true,
    language: 'English',
  });

  const handleThemeChange = (event) => {
    setSettings({ ...settings, theme: event.target.value });
  };

  const handleNotificationChange = (event) => {
    setSettings({ ...settings, notifications: event.target.checked });
  };

  const handleLanguageChange = (event) => {
    setSettings({ ...settings, language: event.target.value });
  };

  const handleSaveSettings = () => {
  //  api
    console.log('Settings saved:', settings);
  };

  return (
    <div className="container">
    <Header title="Settings" />
      <form>
        <label>
          Select Theme:
          <select value={settings.theme} onChange={handleThemeChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
        <br />
        <label>
          Enable Notifications:
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={handleNotificationChange}
          />
        </label>
        <br />
        <label>
          Select Language:
          <select value={settings.language} onChange={handleLanguageChange}>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </label>
        <br />
        <button type="button" onClick={handleSaveSettings}>Save Settings</button>
      </form>
    </div>
  );
};

export default SettingsPage;
