
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage  from './component/login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
