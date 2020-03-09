import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Posts from './Posts';
import Pagination from './pagination';

function App() {
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(false);
  const [currentpage,setCurrentpage]=useState(1);
  const [postPerPage]=useState(10);
  const paginate=(pageNumber)=> {
    setCurrentpage(pageNumber);
  }
  
  useEffect(()=>{
    const fetchPosts=async()=>
    {
      setLoading(true);
      const res=await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  },[])  //empty set of brackects to stop the infinite loop where we use componentdidmount mimic
//getting current posts
const indexOfLastPost=currentpage*postPerPage;
const indexOfFirstPost= indexOfLastPost-postPerPage;
const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost);
console.log(postPerPage)
  return (
    <div className="container">
      <h1>Posts</h1>
      <Posts posts={currentPosts} loading={loading}></Posts>
      <Pagination postPerpage={postPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentpage}></Pagination>
    </div>
  );
}

export default App;
