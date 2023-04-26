import Search  from "./components/search"
import Posts from './components/posts';
import { useEffect, useState } from 'react';
function Layouts() {
  const [posts, setPosts] = useState([]);
  const [query,setQuery] = useState("");
  const handleSearch = (value) => {
    setQuery(value);
  };
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts?q=${query}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data));
      
  }, [query]);
  return (
    <div className="Layouts">
        <Search onSearch={handleSearch} />
        <Posts posts={posts} /> 
    </div>
  );
}

export default Layouts;