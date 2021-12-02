import './App.css';
import axios from 'axios'
import {useEffect, useState} from "react";
import Posts from './Posts'
import Pagination from './Pagination'
function App() {
    const[posts,setPosts]= useState([])
    const[loading,setLoading]= useState(false)
    const[currentPage,setCurrentPage]= useState(1)
    const[postsPerPage,setPostsPerPage]= useState(10)

    useEffect(()=>{
        const fetchPosts = async () => {
            setLoading(true)
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            setPosts(res.data)
            setLoading(false)
        }
        fetchPosts()
    },[])
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

  return (
    <div className="App">
      <header className="App-header">
        <Posts posts={currentPosts} loading={loading}/>
          <Pagination postPerPage={postsPerPage} totalPosts={posts.length} paginate={(val=>setCurrentPage(val))}/>
      </header>
    </div>
  );
}

export default App;
