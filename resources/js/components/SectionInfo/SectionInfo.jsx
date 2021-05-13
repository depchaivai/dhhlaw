import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyle';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { InfoSec,
        RowInfo,
        ColumnInfo,
        TextWrapper,
        Topline,
        Headline,
        Descript,
        ImgWrapper,
        Img
 } from "./Section.elements";

const SectionInfo = () => {
    useEffect(() => {
        Aos.init({duration:1000});
    }, [])
    return (
        <InfoSec>
            <Container>
                <RowInfo>
                    <ColumnInfo>
                        <TextWrapper data-aos="fade-right">
                            <Topline >"Luôn đồng hành cùng bạn"</Topline>
                            <Headline >DHHLAW - Niềm tin của mọi nhà, hãy kết nối với chúng tôi</Headline>
                            <Descript >Ông Hoàng Văn Huy tốt nghiệp đại học chính quy tại Đại học Luật Thành phố Hồ Chí Minh.

Ông đã từng làm việc trong cơ quan công tố. Sau đó, ông tốt nghiệp lớp đào tạo nghiệp vụ luật sư học viện tư pháp. Luật sư Huy hoạt động chuyên nghiệp trong lĩnh vực tư vấn đầu tư, doanh nghiệp và bất động sản, tranh chấp thương mại.</Descript>
                            <Link to="/SignUp">
                                <Button >Đăng nhập</Button>
                            </Link>
                        </TextWrapper>
                    </ColumnInfo>
                    <ColumnInfo>
                        <ImgWrapper data-aos="fade-left">
                            <Img src='https://data.1freewallpapers.com/download/red-autumn-leaves.jpg' alt='image'/>
                        </ImgWrapper>
                    </ColumnInfo>
                </RowInfo>
                <RowInfo ImgStart>
                    <ColumnInfo>
                        <TextWrapper data-aos="fade-right">
                            <Topline >"Luôn đồng hành cùng bạn"</Topline>
                            <Headline >DHHLAW - Niềm tin của mọi nhà, hãy kết nối với chúng tôi</Headline>
                            <Descript >Ông Hoàng Văn Huy tốt nghiệp đại học chính quy tại Đại học Luật Thành phố Hồ Chí Minh.

Ông đã từng làm việc trong cơ quan công tố. Sau đó, ông tốt nghiệp lớp đào tạo nghiệp vụ luật sư học viện tư pháp. Luật sư Huy hoạt động chuyên nghiệp trong lĩnh vực tư vấn đầu tư, doanh nghiệp và bất động sản, tranh chấp thương mại.</Descript>
                            <Link to="/SignUp">
                                <Button >Đăng nhập</Button>
                            </Link>
                        </TextWrapper>
                    </ColumnInfo>
                    <ColumnInfo data-aos="fade-left">
                        <ImgWrapper start='true'>
                        <Img src='https://data.1freewallpapers.com/download/red-autumn-leaves.jpg' alt='image'/>
                        </ImgWrapper>
                    </ColumnInfo>
                </RowInfo>
            </Container>
        </InfoSec>

    )
}

export default SectionInfo
