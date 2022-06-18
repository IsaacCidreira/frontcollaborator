import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/style/themes/default';
import GlobalStyle from '../assets/style/global';
import Home from '../pages/Home';
import Header from '../Header';
import NewContact from '../pages/NewContact';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newcontact" element={<NewContact />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
