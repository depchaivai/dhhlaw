import React, { useEffect } from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { Container } from '../../globalStyle'
import { searchpost } from '../../service/postAPI'
import API from '../Service/api'
import Thepost from '../ThePost/Thepost'
import { SearchWrap } from './SearchResult.element'

export const SearchPageContainer = styled(Container)`
    margin-top: 100px;
    min-height: 90vh;
    ${Container}

`

const SearchResult = () => {
    const { searchKey } = useParams();
    const [serachrs,setsearch] = useState([]);
    const { data,status,error } =useQuery(['searchpost',searchKey],()=>searchpost(searchKey),{onSuccess: (data)=>{
        setsearch([...data]);
    }});
    if (serachrs.length < 1) {
        return <h1>không thấy kết quả tìm kiếm phù hợp</h1>
    }
    return (
        <SearchPageContainer>
            <SearchWrap>
            {serachrs.map((item,index)=>{
               return <Thepost key={index} post={item} topath='search'/>
            })}
            </SearchWrap>
        </SearchPageContainer>
    )
}

export default SearchResult
