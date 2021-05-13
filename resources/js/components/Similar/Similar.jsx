import React, { useEffect, useState } from 'react'
import { CardContain, Card, ImageBox, Img, Titlebox } from './Similar.element'
import API from '../Service/api'
import { useQuery } from 'react-query';
import { mostViews } from '../../service/postAPI';

const Similar = (props) => {
    const similar = props.similar;
    const { status, data } = useQuery(['similar',similar],()=>mostViews(similar));
        return (
            <>
            {status==="success" &&(<CardContain>
                {data.map((item,index)=>{
                    return <Card key={index} to={'/page/'+similar+'/'+item.e_name}>
                        <ImageBox><Img src={item.image}/></ImageBox>
                        <Titlebox>{item.title}</Titlebox>
                    </Card>
                })}
            </CardContain>)}

            </>
        )


}

export default Similar
