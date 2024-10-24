import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

export function Footer() {
	return (
		<div className='modal-footer'>
			<div className='about-modal-footer'>
				<div className='description-modal-footer'>
					<div className='title-description-modal-footer'>Sobre Nosotros:</div>
					<div className='text-description-modal-footer'>
						<a>
							XuaHomeSchool es una empresa que se dedica a brindar una experiencia de <br />
							aprendizaje personalizada y adaptada a las necesidades de cada estudiante. <br />
						</a>
					</div>
				</div>
				<div className='contacto-modal-footer'>
          <div className="title-contacto-modal-footer">Contacto:</div>
          <div className="info-contacto-modal-footer">
            <div className="email-info-contacto-modal-footer">
              <a>Email: xuahome@gmail.com</a>
            </div>
            <div className="celphone-info-contacto-modal-footer">
              <a>Teléfono: +56 9923123456</a>
            </div>
          </div>
        </div>
				<div className='redes-modal-footer'>
          <div className="title-redes-modal-footer">
            <a>Redes Sociales:</a>
          </div>
          <div className="iconos-redes-modal-footer">
					<FaFacebook className='all-icons' />
					<FaInstagram className='all-icons' />
					<FaTwitter className='all-icons' />
					<FaTiktok className='all-icons' />
					</div>
        </div>
			</div>
			<div className='copyright-modal-footer'>
        <a>© 2024 XuaHomeSchool. Todos los derechos reservados.</a>
      </div>
		</div>
	);
}
