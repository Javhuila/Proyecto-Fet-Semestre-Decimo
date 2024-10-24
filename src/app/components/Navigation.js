import Link from 'next/link';
import './Navigation.css';

const links = [
	{
		label: 'Inicio',
		route: '/'
	},
	{
		label: 'Cursos',
		route: '/courses'
	},
	{
		label: 'Sobre',
		route: '/about'
	}
];

const linkLogin = [
	{
		label: 'Ingresa',
		route: '/login'
	}
];

const linkRegister = [
	{
		label: 'Regístrate',
		route: '/register'
	}
];

export function Navigation() {
	return (
		<header className='header-nav'>
			<h1 className='name-corp'>XUA HOMESCHOOL</h1>
			<nav>
				<ul>
					{links.map(({label, route}) => (
						<li key={route}>
							<Link href={route}>{label}</Link>
						</li>
					))}
          {linkLogin.map(({label, route}) => (
						<li key={route} className='li-login'>
							<Link href={route}>{label}</Link>
						</li>
					))}
          {linkRegister.map(({label, route}) => (
						<li key={route} className='li-register'>
							<Link href={route}>{label}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
