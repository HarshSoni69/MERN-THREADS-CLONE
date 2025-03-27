import React from 'react'
import Loading from './components/common/Loading'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/common/Header'
import Home from './pages/protected/Home'
import Search from './pages/protected/Search'
import ErrorPage from './pages/ErrorPage'
import Register from './pages/Register'
import { Box } from '@mui/material'
import ProtectedLayout from './pages/protected/ProtectedLayout'
import ProfileLayout from './pages/protected/profile/ProfileLayout'
import Threads from './pages/protected/profile/Threads'

import Repost from './pages/protected/profile/Repost';
import Replies from './pages/protected/profile/Replies';
import SinglePost from './pages/protected/SinglePost'

const App = () => {
  const data = true;
  return (
    <>
       <Box minHeight={'100vh'}>
        <BrowserRouter>
          <Routes>
            {
              data ?  <Route exact path='/' element={<ProtectedLayout/>}>
              <Route exact path='' element={<Home/>}/>
              <Route exact path='post/:id' element={<SinglePost/>}/>
              <Route exact path='search' element={<Search/>}/>
              <Route exact path='profile' element={<ProfileLayout/>}>
                <Route exact path='threads/:id' element={<Threads/>}/>
                <Route exact path='replies/:id' element={<Replies/>}/>
                <Route exact path='reposts/:id' element={<Repost/>}/>
              </Route>
              
            </Route>
            : 
            <Route exact path='/' element={<Register/>}/>
            }
            <Route exact path='*' element={<ErrorPage/>}/>
           
            
          </Routes>
        </BrowserRouter>
       </Box>
    </>
   

  )
}

export default App
