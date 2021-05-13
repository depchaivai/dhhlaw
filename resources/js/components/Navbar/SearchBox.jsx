import React, { useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router';
const Search = styled.div`
    width:250px;
    height:80px;
    display:flex;
    align-items:center;
    flex-wrap:nowrap;

`
const Inputsearch = styled.input`
    height:30px;
    position: relative;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border: none;
    outline: none;
    width:220px;
`
const SearchButton = styled.button`
    width:30px;
    text-align:center;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    color:black;
    background-color:#fff;
    height:30px;
`
const SearchBox = () => {
    const h = useHistory();
    const [keyword,setKeyword] = useState('');
    const searchClick = () =>{
        h.push('/search/'+keyword);
    }
    return (
        <Search>
            <Inputsearch type='text' onChange={(e)=>setKeyword(e.target.value)}/>
            <SearchButton onClick={searchClick}><FaSearch style={{width:'100%',color:'black'}}/></SearchButton>
        </Search>
    )
}

export default SearchBox
