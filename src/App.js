import React, { useEffect } from 'react';
import Navigate from './components/navigate/Navigate';
import { BrowserRouter } from "react-router-dom"
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
// !89yhST2Z!Sz9.L

function App() {

  useEffect(() => {
    // Initialize language from localStorage if available
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage);
    }
  }, []);

  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Navigate />
      </I18nextProvider>,
    </BrowserRouter>
  );
}

export default App;
