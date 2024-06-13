
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { PostsProvider } from './context/PostsContext'
import { Home } from './page/Home'
import { Society } from './page/Society'
import { Technology } from './page/Technology'
import { Beauty } from './page/Beauty'
import { Travel } from './page/Travel'
import { Police } from './page/Police'
import { Item } from './page/Item'
import { Sport } from './page/Sport'
import { Social } from './page/Social'

function App() {
  return (
    <>
    <PostsProvider>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/society' element={<Society />}/>
      <Route path='/technology' element={<Technology />}/>
      <Route path='/beauty' element={<Beauty />}/>
      <Route path='/travel' element={<Travel />}/>
      <Route path='/policy' element={<Police />}/>
      <Route path='/sport' element={<Sport />}/>
      <Route path='/item/:id' element={<Item />}/>
      <Route path='/social' element={<Social />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </PostsProvider>

    </>
  )
}

export default App
