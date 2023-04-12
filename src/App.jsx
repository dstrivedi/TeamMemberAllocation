import './App.css';
import Header from './Header';
import Footer from './Footer';
import Employees from './Employees';
import GroupedTeamMembers from './GroupedTeamMembers';
import Nav from './Nav';
import NotFound from './NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

export default function App() {
  return (
    <DataProvider>
      <Router>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Employees />}></Route>
          <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router >
    </DataProvider >
  )
}
