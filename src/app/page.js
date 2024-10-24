import './globals.css';
import xuaimg from './images/xuaimg.jpg'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="module-home">
      <div className="welcome-title">
        <h1 className='text-welcome-title'>Bienvenido a XUA HomeSchool</h1>
      </div>
      <div className="description-module-home">
        <div className="info-description-module-home">
          <div className="text-info-description-module-home">
            <a>Descubre nuestros cursos en linea y disfruta de la <br/> 
              experiencia de aprendizaje personalizada y adaptada a las <br/>
              necesidades de cada estudiante.
            </a>
          </div>
          <div className="btn-info-description-module-home">
            <div className="btn-show-courses">
              <Link href={"/courses"}>Ver cursos</Link>
              </div>
          </div>
        </div>
        <div className="img-logo-corp-module-home">
          <img src={xuaimg.src} alt='XuaHomeSchol'  width={400} height={320}></img>
        </div>
      </div>
    </div>
  );
}