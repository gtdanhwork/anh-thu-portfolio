import { useEffect, useState } from 'react';

const navigation = [
	['home', 'ANH THƯ'],
	['about', 'ABOUT'],
	['toc', 'CONTENTS'],
	['education', 'EDUCATION'],
	['experience', 'EXPERIENCE'],
	['projects', 'PROJECTS'],
	['skills', 'SKILLS'],
	['contact', 'CONTACT'],
];

const BrandMark = ({ className = 'brand-logo' }) => (
	<svg
		className={className}
		width="28"
		height="28"
		viewBox="0 0 32 32"
		fill="currentColor"
		aria-hidden="true"
	>
		<polygon points="0,0 14,0 6,14 0,14" />
		<polygon points="18,0 32,0 24,14 10,14" />
		<polygon points="0,18 14,18 6,32 0,32" />
		<polygon points="18,18 32,18 24,32 10,32" />
	</svg>
);

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState('home');

	useEffect(() => {
		const updateScroll = () => setScrolled(window.scrollY > 40);
		updateScroll();
		window.addEventListener('scroll', updateScroll, { passive: true });

		const sections = document.querySelectorAll('main section[id]');
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActiveSection(entry.target.id);
				});
			},
			{ rootMargin: '-20% 0px -60% 0px', threshold: 0 },
		);
		sections.forEach((section) => observer.observe(section));

		return () => {
			window.removeEventListener('scroll', updateScroll);
			observer.disconnect();
		};
	}, []);

	useEffect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [menuOpen]);

	const renderLink = ([id, label], mobile = false) => (
		<a
			key={id}
			href={`#${id}`}
			className={
				mobile
					? 'mobile-nav-link'
					: `nav-link${activeSection === id ? ' active' : ''}${id === 'contact' ? ' contact-pill' : ''}`
			}
			aria-current={activeSection === id ? 'location' : undefined}
			onClick={() => setMenuOpen(false)}
		>
			{label}
		</a>
	);

	return (
		<header className={`site-header${scrolled ? ' scrolled' : ''}`}>
			<div className="nav-container">
				<a href="#home" className="nav-brand" aria-label="TanGie Home">
					<BrandMark />
					<span className="brand-name">TanGie</span>
				</a>
				<nav className="desktop-nav" aria-label="Main navigation">
					<ul className="nav-links">
						{navigation.map((item) => (
							<li key={item[0]}>{renderLink(item)}</li>
						))}
					</ul>
				</nav>
				<button
					className={`mobile-menu-btn${menuOpen ? ' open' : ''}`}
					type="button"
					aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
					aria-expanded={menuOpen}
					onClick={() => setMenuOpen((open) => !open)}
				>
					<span className="bar bar-1" />
					<span className="bar bar-2" />
					<span className="bar bar-3" />
				</button>
			</div>
			<nav
				className={`mobile-drawer${menuOpen ? ' open' : ''}`}
				aria-label="Mobile navigation"
				aria-hidden={!menuOpen}
			>
				<ul className="mobile-nav-links">
					{navigation.map((item) => (
						<li key={item[0]}>{renderLink(item, true)}</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
