import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './theme/Layout';
import Login from './theme/Login';
import SignUp from './theme/SignUp';
import ContactUs from './theme/ContactUs';

import Dashboard from './pages/Dashboard/Dashboard';
import Reports from './pages/Reports/Reports';
import StoryBoard from './pages/StoryBoard/StoryBoard';
import Users from './pages/Users/Users';
import LayoutOpen from './theme/LayoutOpen';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LayoutOpen />}>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
          <Route path="/app" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="reports" element={<Reports />} />
            <Route path="story-board" element={<StoryBoard />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
