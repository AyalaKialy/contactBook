import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './components/users'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
      </Routes>
    </BrowserRouter>);
}

export default App;
