import React from "react";
import BenefitImg1 from '../../img/beneficios/img-1.png';
import BenefitImg2 from '../../img/beneficios/img-2.png';
import { BenefitContainer, BenefitItem, FeaturedContainer } from "./styles";


const FeaturedSection = () => {
    return(
        <FeaturedContainer>
            <article>
            <h4>¿Por qué suscribirte?</h4>
                <ul>
                    <li>Acceso exclusivo a contenido premium.</li>
                    <li>Las últimas noticias de moda, entretenimiento y cultura.</li>
                    <li>Promociones y eventos únicos.</li>
                </ul>
            </article>

            <BenefitContainer>
                <BenefitItem>
                    <img src={BenefitImg1} alt="contenido-exclusivo" />
                    <h5>Acceso exclusivo a contenido premium</h5>
                    <p>Disfruta de entrevistas íntimas, reportajes de lujo y tendencias seleccionadas solo para nuestros suscriptores.</p>
                </BenefitItem>

                <BenefitItem>
                    <img src={BenefitImg2} alt="contenido-exclusivo" />
                    <h5>Acceso exlusivo a las últimas noticias</h5>
                    <p>Mantente informado con actualizaciones diarias sobre moda, entretenimiento, cultura y mucho más.</p>
                </BenefitItem>
            </BenefitContainer>
        </FeaturedContainer>
    )
}

export default FeaturedSection;