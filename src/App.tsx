import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Login from './pages/login';
import Register from './pages/register';
import ForgotPasswordPage from './pages/forgot-password';
import DiscordCommunityPage from './pages/Community';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/community" element={<DiscordCommunityPage />} />
      </Routes>
    </Router>
  );
}
