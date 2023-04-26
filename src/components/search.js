import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Search(props) {
  const [searchValue,setSearchValue] = useState('');  
  function handleSearchInput(e){
      setSearchValue(e.target.value);
      props.onSearch(e.target.value);
  }
  return (
    <div className="Search d-flex justify-content-center">
        <div className='w-50 m-5'>
            <h1 className='text-primary mb-5 text-center'> Search on post </h1>
            <input type='search' value={searchValue} className='form-control form-control-lg' onChange={handleSearchInput}/>
        </div>
        
    </div>
  );
}

export default Search;