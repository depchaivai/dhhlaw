import React,{useEffect} from 'react'
import { Container } from '../../globalStyle';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { 
    TextboxS,
    Line,
    Destextbox,
    Vote,
    Votebanner,
    AuthL,
    Customerbox,
    TextboxContainer
 } from "./TexboxSection.elements";

const TexboxSection = () => {
    useEffect(() => {
        Aos.init({duration:1000});
    }, [])
    return (
        <TextboxS data-aos="fade-up">
            <TextboxContainer>
                <Line>...........</Line>
                <Destextbox>
                De UX experts van Online Department verrassen ons steeds weer met eigen ideeën en inzichten die ze van onze gebruikers verkrijgen. Ik kan niet wachten tot we het nieuwe product aan onze klanten kunnen presenteren.
                </Destextbox>
                <Vote>
                    <Votebanner/>
                </Vote>
                <hr></hr>
                <AuthL>Đại Huy Hoàng</AuthL>
                <Customerbox>
                    
                </Customerbox>
            </TextboxContainer>
        </TextboxS>
    )
}

export default TexboxSection
