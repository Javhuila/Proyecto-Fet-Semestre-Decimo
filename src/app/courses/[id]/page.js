'use client'
import Link from 'next/link';
import './course.css'
import xuapage from '../../images/xuaimg.jpg'
import { useSearchParams } from 'next/navigation';

export default function course ({ params }){
  const searchParams = useSearchParams()
  const data = JSON.parse(searchParams.get('data'))
  const {id} = params;
  const parrafos = data.step.split(/\d+\.\s+/).filter(Boolean);
  const parrafosConNumeros = parrafos.map((parrafo, index) => `${index + 1}. ${parrafo}`);

  return(
    <div className='modal-course-selected'>
      <div className='info-modal-course-selected'>
        <div className='title-info-modal-course-selected'>{(data.title).toUpperCase()}</div>
        <div className='description-info-modal-course-selected'>{data.description}</div>
        <div className='step-info-modal-course-selected'>
        {parrafosConNumeros.map((parrafo, index) => (
        <p key={index}>{parrafo}</p>
      ))}
          </div>
      </div>
      <div className='pay-modal-selected'>
        <div className='img-pay-modal-selected'>
          <img src={xuapage.src}  width={320} height={220}></img>
        </div>
        <div className='price-pay-modal-selected'>
          <div className='title-price-pay-modal-selected'>Precio del curso:</div>
          <div className='course-price-pay-modal-selected'>$ {data.price} COP</div>
          <button className='btn-buy-course-pay-modal-selected'>COMPRAR AHORA</button>
        </div>
      </div>
    </div>
  );
}