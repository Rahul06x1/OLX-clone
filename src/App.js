import React,{useContext, useEffect} from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import CreatePage from './Pages/Create';
import './App.css';

import { AuthContext,FirebaseContext } from './store/Context';

import Home from './Pages/Home';
import ViewPost from './Pages/ViewPost';
import Post from './store/PostContext';

function App() {
  const {firebase} = useContext(FirebaseContext)
  const {setUser} = useContext(AuthContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  
  return (
    <div>
      <Post>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/create' element={<CreatePage />} />
            <Route path='/view' element={<ViewPost />} />
          </Routes>
        </Router>
      </Post>
    </div>
  );
}

export default App;
