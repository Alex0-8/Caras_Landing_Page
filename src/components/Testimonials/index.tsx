import React from "react";
import PorfileImg1 from'../../img/fotos-de-perfil/comentario-1.jpg';
import PorfileImg2 from'../../img/fotos-de-perfil/comentario-2.jpg';
import PorfileImg3 from'../../img/fotos-de-perfil/comentario-3.jpg';
import PorfileImg4 from'../../img/fotos-de-perfil/comentario-4.jpg';
import PorfileImg1Webp from'../../img/fotos-de-perfil/comentario-1.webp';
import PorfileImg2Webp from'../../img/fotos-de-perfil/comentario-2.webp';
import PorfileImg3Webp from'../../img/fotos-de-perfil/comentario-3.webp';
import PorfileImg4Webp from'../../img/fotos-de-perfil/comentario-4.webp';
import { FeaturedContainer } from "../FeaturedSection/styles";
import { CommentContainer, CommentContent, PorfileImg } from "./styles";

const Testimonials = () => {
    return (
        <FeaturedContainer>
            <h2 tabIndex={0}>Lo que dicen nuestros suscriptores</h2>
            
            <CommentContainer>
                <div>
                    <PorfileImg>
                        <picture>
                            <source srcSet={PorfileImg1} type="image/jpg"/>
                            <source srcSet={PorfileImg1Webp} type="image/webp"/>
                            <img src={PorfileImg1Webp} alt="María Fernández" loading="lazy"/>
                        </picture>
                    </PorfileImg>
                </div>
                <CommentContent>
                    <div>
                        <p className="user-name">María Fernández</p>
                    </div>
                    <p className="comment-txt">Recibir el <span lang="en">newsletter</span> de CARAS es como tener acceso a un mundo exclusivo todos los días. Amo estar al tanto de las últimas tendencias en moda y estilo de vida.</p>
                </CommentContent>
            </CommentContainer>

            <CommentContainer>
                <div>
                    <PorfileImg>
                        <picture>
                            <source srcSet={PorfileImg2} type="image/jpg"/>
                            <source srcSet={PorfileImg2Webp} type="image/webp"/>
                            <img src={PorfileImg2Webp} alt="Luis Ramírez" loading="lazy"/>
                        </picture>
                    </PorfileImg>
                </div>
                <CommentContent>
                    <div>
                        <p className="user-name">Luis Ramírez</p>
                    </div>
                    <p className="comment-txt">El contenido es increíble. Siempre hay entrevistas y artículos que no encuentro en ningún otro lugar. Definitivamente vale la pena suscribirse.</p>
                </CommentContent>
            </CommentContainer>

            <CommentContainer>
                <div>
                    <PorfileImg>
                        <picture>
                            <source srcSet={PorfileImg3} type="image/jpg"/>
                            <source srcSet={PorfileImg3Webp} type="image/webp"/>
                            <img src={PorfileImg3Webp} alt="Juan Torres" loading="lazy" />
                        </picture>
                    </PorfileImg>
                </div>
                <CommentContent>
                    <div>
                        <p className="user-name">Juan Torres</p>
                    </div>
                    <p className="comment-txt">Gracias al <span lang="en">newsletter</span> de CARAS, me siento más informado sobre eventos y promociones especiales. Además, siempre me sorprenden con contenido único.</p>
                </CommentContent>
            </CommentContainer>

            <CommentContainer>
                <div>
                    <PorfileImg>
                        <picture>
                            <source srcSet={PorfileImg4} type="image/jpg"/>
                            <source srcSet={PorfileImg4Webp} type="image/webp"/>
                            <img src={PorfileImg4Webp} alt="Sofía Herrera" loading="lazy"/>
                        </picture>
                    </PorfileImg>
                </div>
                <CommentContent>
                    <div>
                        <p className="user-name">Sofía Herrera</p>
                    </div>
                    <p className="comment-txt">Me encanta comenzar mi día con las noticias más interesantes de entretenimiento y cultura. ¡Es mi lectura favorita!</p>
                </CommentContent>
            </CommentContainer>
        </FeaturedContainer>
    )
}

export default Testimonials;