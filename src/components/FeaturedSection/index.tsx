import React from "react";
import BenefitImg1 from '../../img/beneficios/img-1.png';
import BenefitImg2 from '../../img/beneficios/img-2.png';
import BenefitImg1Webp from '../../img/beneficios/img-1.webp';
import BenefitImg2Webp from '../../img/beneficios/img-2.webp';
import { BenefitContainer, BenefitItem, FeaturedContainer } from "./styles";


const FeaturedSection = () => {
    return(
        <FeaturedContainer aria-label="presentacion">
            <article>
            <h2 tabIndex={0}>¿Por qué suscribirte?</h2>
                <ul>
                    <li><strong>Acceso VIP</strong> a sorteos, eventos y contenido premium.</li>
                    <li><strong>Entrevistas exclusivas</strong> con tus celebridades favoritas.</li>
                    <li><strong>Tendencias de moda</strong> antes de que salgan en las pasarelas.</li>
                    <li><strong>Crónicas de espectáculos</strong> y backstage de los grandes eventos.</li>
                </ul>
            </article>

            <BenefitContainer aria-label="benaficios">
                <BenefitItem>
                    <picture>
                        <source srcSet={BenefitImg1} type="image/png"/>
                        <source srcSet={BenefitImg1Webp} type="image/webp"/>
                        <img src={BenefitImg1Webp} alt="Entrevistas íntimas y reportajes de lujo" />
                    </picture>
                    <h3 tabIndex={0}>Acceso exclusivo a contenido premium</h3>
                    <p>Disfruta de entrevistas íntimas, reportajes de lujo y tendencias seleccionadas solo para nuestros suscriptores.</p>
                </BenefitItem>

                <BenefitItem>
                    <picture>
                        <source srcSet={BenefitImg2} type="image/png"/>
                        <source srcSet={BenefitImg2Webp} type="image/webp"/>
                        <img src={BenefitImg2Webp} alt="Últimas noticias de moda y cultura" />
                    </picture>
                    <h3 tabIndex={0}>Acceso exclusivo a las últimas noticias</h3>
                    <p>Mantente informado con actualizaciones diarias sobre moda, entretenimiento, cultura y mucho más.</p>
                </BenefitItem>
            </BenefitContainer>
        </FeaturedContainer>
    )
}

export default FeaturedSection;