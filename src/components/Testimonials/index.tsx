import React from "react";
import PorfileImg1 from'../../img/fotos-de-perfil/comentario-1.jpg';
import PorfileImg2 from'../../img/fotos-de-perfil/comentario-2.jpg';
import PorfileImg3 from'../../img/fotos-de-perfil/comentario-3.jpg';
import PorfileImg4 from'../../img/fotos-de-perfil/comentario-4.jpg';
import { FeaturedContainer } from "../FeaturedSection/styles";
import { CommentContainer, CommentContent, PorfileImg } from "./styles";

const Testimonials = () => {
    return (
        <FeaturedContainer>
            <h2 tabIndex={0}>Lo que dicen nuestros suscriptores</h2>
            
            <CommentContainer>
                <div>
                    <PorfileImg>
                    <img src={PorfileImg1} alt="María Fernández" />
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
                    <img src={PorfileImg2} alt="Luis Ramírez" />
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
                    <img src={PorfileImg3} alt="Juan Torres" />
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
                    <img src={PorfileImg4} alt="Sofía Herrera" />
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