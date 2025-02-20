import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { UserProvider } from './context/UserContext';

import Navbar from './components/Navbar'

import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Blogs from './pages/Blogs';
import PostDetails from './pages/PostDetails';


function App() {

   const [user, setUser] = useState({
    id: null,
    isAdmin: null
  });

  function unsetUser(){
    localStorage.clear();
  };

  useEffect(() => {
    fetch(`https://blogappapi-d0pa.onrender.com/users/details`, {
      headers: {
        Authorization: `Bearer ${ localStorage.getItem('token') }`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      console.log(data.auth !== "Failed")
      
      if (data.auth !== "Failed") {

        setUser({
          id: data._id,
          isAdmin: data.isAdmin
        });

      
      } else {

        setUser({
          id: null,
          isAdmin: null
        });

      }

    })
  }, [setUser])

  useEffect(() => {
    console.log(user);
    console.log(localStorage);
  }, [user])


return (
    <UserProvider value={{ user, setUser, unsetUser }}>
      <Router>
        <Navbar />
            <Container>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/blogs/:postId" element={<PostDetails />} />
                </Routes>
            </Container>

      </Router>
    </UserProvider>
  )
}





export default App;
