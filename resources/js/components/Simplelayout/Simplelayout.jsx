import React, { useEffect } from 'react';
import { Container } from '../../globalStyle';
import { 
    SimpleSection,
    RowSimple,
    Imagecontain,
    ImgSimple,
    TexboxContent,
    Sologan,
    HeadSection,
    DescritpSec,
    ContinueIcon
} from "./Simplelayout.elements";

const Simplelayout = () => {
    return (
        <SimpleSection>
            <Container>
                <RowSimple>
                    <Imagecontain>
                        <ImgSimple src="https://c.wallhere.com/photos/f3/8e/1366x768_px_Croatia_landscape_nature_path_river_Trees-1075542.jpg!d" alt="image"/>
                    </Imagecontain>
                    <TexboxContent>
                        <Sologan>"I'm here, don't worry"</Sologan>
                        <HeadSection>Welcom to Dai Huy Hoang Law</HeadSection>
                        <DescritpSec>This is the test of Description on this tamplate</DescritpSec>
                        <ContinueIcon/>
                    </TexboxContent>
                </RowSimple>
            </Container>
        </SimpleSection>
    )
}

export default Simplelayout
