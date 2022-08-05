import './App.css';
import PostsList from './components/PostsList';
import AddFormPosts from './components/AddFormPosts';
import SinglePostPage from './components/SinglePostPage';
import EditPostForm from './components/EditPostForm';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        
        <Route index element={<PostsList/>}/>

        <Route path='post'>
          <Route index element={<AddFormPosts/>}/>
          <Route path=":postId" element={<SinglePostPage/>}/>
          <Route path="edit/:postId" element={<EditPostForm/>}/>
        </Route>
        
      </Route>
    </Routes>
  );
}

export default App;
