import './courses.css';
import Link from 'next/link';
import xuapage from '../images/xuaimg.jpg';
import { connectDB } from '@/utils/mongoose';
import courses from '@/models/courses';

async function loadCourses() {
	connectDB();
	const allCoursesDB = await courses.find();
	return allCoursesDB;	
}

export default async function coursesPage() {
	const allCourses = await loadCourses();
	return (
		<div className='modal-courses'>
			<div className='title-modal-courses'>Nuestros Cursos</div>
			<div className='all-courses'>
				{allCourses.map(({id, title, description, img}) => (
					<div key={id} className='card-course'>
						<div className='img-card-course'>
							<img className='img-def-card-course' src={xuapage.src} width={320} height={200}></img>
						</div>
						<div className='title-card-course'>
							<a>{title.toUpperCase()}</a>
						</div>
						<div className='description-card-course'>
							<a>{description}</a>
						</div>
						<div className='link-card-course'>
							<Link
								href={{
									pathname: `/courses/${id}`,
									query: {data: JSON.stringify(allCourses.find(item => item.id === id))}
								}}>
								Ver más...
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
