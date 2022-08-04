import './App.css';
import PostsList from './components/PostsList';
import AddFormPosts from './components/AddFormPosts';

function App() {
  return (
    <div className="App">
      <AddFormPosts/>
      <PostsList/>
    </div>
  );
}

export default App;
