import './App.css'

import { Route, Routes } from 'react-router'
import CommonLayout from './layouts/CommonLayout'
import IndividualBlogPost from './blog/IndividualBlogPost'
import BlogPostsPage from './blog/BlogPostsPage'
import ContactPage from './blog/ContactPage'

function App() {
  return (
    <div>
      <Routes>
        <Route element = {<CommonLayout/>}>
          <Route path = "/" element = {<p>Home page</p>}/>
          <Route path = "/posts" element = {<BlogPostsPage/>}/>
          <Route path = "/posts/:post_id" element = {<IndividualBlogPost/>}/>
          <Route path = "/contact" element = {<ContactPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
