import { useState } from 'react';
import { VIDEO_LINKS } from '../../constants/videoLinks';
import { DOCUMENT_LINKS } from '../../constants/documentLinks';
import {
	toDriveDownloadUrl,
	toDrivePreviewUrl,
} from '../../utils/googleDriveLinks';

const image = (name) => `/images/${encodeURIComponent(name)}`;
const video = (name) => `/videos/${name}`;
const document = (name) =>
	toDrivePreviewUrl(DOCUMENT_LINKS[name]?.trim()) || `/documents/${name}`;
const documentDownload = (name) =>
	toDriveDownloadUrl(DOCUMENT_LINKS[name]?.trim()) || `/documents/${name}`;

const PortfolioVideo = ({ src }) => {
	const driveUrl = toDrivePreviewUrl(VIDEO_LINKS[src]?.trim());

	if (driveUrl) {
		return (
			<iframe
				src={driveUrl}
				className="portfolio-video portfolio-video-embed"
				title={`Portfolio video: ${src}`}
				allow="autoplay; fullscreen"
				allowFullScreen
			/>
		);
	}

	return (
		<video controls playsInline preload="metadata" className="portfolio-video">
			<source src={video(src)} type="video/mp4" />
			Trình duyệt không hỗ trợ video HTML5.
		</video>
	);
};

const BrandMark = ({ className = '' }) => (
	<svg
		className={className}
		width="22"
		height="22"
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

export const HeroSection = () => (
	<section className="section hero-section" id="home">
		<div className="hero-container">
			<div className="hero-card">
				<div className="hero-content">
					<div className="hero-brand-tag">
						<BrandMark />
						<span>TanGie</span>
					</div>
					<h1 className="hero-title">
						<span className="serif-title line-1">Creative</span>
						<span className="serif-title line-2">Portfolio</span>
					</h1>
					<div className="hero-author-badge">
						<span className="badge-role">MULTIMEDIA COMMUNICATION</span>
						<h2 className="author-name">GIẢNG NGỌC ANH THƯ</h2>
					</div>
				</div>
				<div className="hero-portrait-wrapper">
					<div className="hero-portrait-bg" />
					<img
						src={image('Gemini_Generated_Image_9qu4eo9qu4eo9qu4.jpg')}
						alt="Giảng Ngọc Anh Thư (TanGie)"
						className="hero-portrait-img"
						style={{ objectPosition: 'center top' }}
					/>
				</div>
			</div>
		</div>
	</section>
);

export const AboutSection = ({ onImageClick }) => (
	<section className="section about-section" id="about">
		<div className="about-container">
			<div className="about-grid">
				<div className="about-col-left">
					<h2 className="section-title serif-huge">
						<span className="title-sub">Về</span>
						<span className="title-main">Anh Thư</span>
					</h2>
					<div className="about-tagline-block">
						<p className="about-quote">
							Aside from designing, Anh Thư also finds time to enjoy nature and explore
							creative trends where she gets fresh inspiration for future projects.
						</p>
					</div>
				</div>
				<div className="about-col-right">
					<div className="about-bio-card">
						<p className="bio-lead">
							<strong>Giảng Ngọc Anh Thư</strong> is a multidisciplinary creative
							practitioner and Multimedia Communication student at{' '}
							<strong>Van Lang University</strong> with a passion for visual storytelling
							and digital production.
						</p>
						<p className="bio-text">
							She creates compelling visual experiences through graphic design, brand
							strategy, content planning, and video production — blending analytical
							communication strategy with artistic sensibilities.
						</p>
					</div>
					<div className="about-image-wrapper">
						<div className="image-frame">
							<img
								src={image('D___9595.jpg')}
								alt="Giảng Ngọc Anh Thư enjoying a garden"
								className="about-img interactive-img"
								onClick={() => onImageClick(image('D___9595.jpg'), 'Giảng Ngọc Anh Thư enjoying a garden')}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

const contents = [
	['about', 'INTRODUCTION'],
	['education', 'EDUCATION BACKGROUND'],
	['experience', 'WORKING EXPERIENCE'],
	['projects', 'PREVIOUS PROJECTS'],
	['skills', 'SKILLS & CONTACT'],
];

export const ContentsSection = () => (
	<section className="section toc-section" id="toc">
		<div className="toc-container">
			<div className="toc-grid">
				<div className="toc-list">
					{contents.map(([id, title], index) => (
						<a href={`#${id}`} className="toc-item" key={id}>
							<span className="toc-num">{String(index + 1).padStart(2, '0')}</span>
							<span className="toc-name">{title}</span>
						</a>
					))}
				</div>
				<div className="toc-title-wrapper">
					<h2 className="toc-title serif-huge">
						<span>Table</span>
						<span className="toc-title-sub">of Contents</span>
					</h2>
				</div>
			</div>
		</div>
	</section>
);

export const EducationSection = ({ onImageClick }) => (
	<section className="section education-section" id="education">
		<div className="education-container">
			<h2 className="section-title serif-large">Education</h2>
			<div className="education-grid">
				<div className="education-card">
					<div className="edu-item">
						<div className="edu-num-badge">01</div>
						<div className="edu-details">
							<div className="edu-school">Trường Đại học Văn Lang</div>
							<h3 className="edu-major">Truyền thông đa phương tiện</h3>
							<span className="edu-period">2023 - hiện nay</span>
						</div>
					</div>
					<div className="edu-divider" />
					<div className="edu-item">
						<div className="edu-num-badge">02</div>
						<div className="edu-details">
							<div className="edu-school">Trường Đại học Văn Lang</div>
							<h3 className="edu-major">Công Nghệ Truyền thông</h3>
							<span className="edu-period">2024 - hiện nay</span>
						</div>
					</div>
				</div>
				<div className="education-image-card">
					<img
						src={image('image (4).png')}
						alt="Van Lang University campus"
						className="edu-campus-img interactive-img"
						onClick={() => onImageClick(image('image (4).png'), 'Van Lang University campus')}
					/>
					<div className="campus-caption">
						<span>Cơ sở 3 — Trường Đại học Văn Lang</span>
					</div>
				</div>
			</div>
		</div>
	</section>
);

const VideoCard = ({ src, tag, title }) => (
	<div className="video-card">
		<div className="video-player-wrap">
			<PortfolioVideo src={src} />
		</div>
		<div className="video-meta">
			<span className="video-tag">{tag}</span>
			<h5 className="video-title">{title}</h5>
		</div>
	</div>
);

const MetricCard = () => (
	<div className="metrics-card">
		<div className="metrics-header">
			<span className="project-tag">Dự án 40</span>
			<span className="project-name">Chiến dịch truyền thông "Trợ Lý Em Ơi"</span>
		</div>
		<div className="metrics-grid">
			{[
				['+267%', 'Lượt xem (25.9K)'],
				['+675.7%', 'Tương tác (>2K)'],
				['+983.3%', 'Người theo dõi mới'],
				['26', 'Bài đăng & 1 TVC'],
			].map(([value, label]) => (
				<div className="metric-box" key={label}>
					<span className="metric-val">{value}</span>
					<span className="metric-lbl">{label}</span>
				</div>
			))}
		</div>
	</div>
);

const ExperienceHeader = ({ number, company, position, children }) => (
	<div className="exp-headline-row">
		<div className="exp-role-info">
			<div className="exp-index">{number}</div>
			<div className="exp-title-group">
				<h3 className="exp-company">{company}</h3>
				<div className="exp-position">{position}</div>
			</div>
		</div>
		{children}
	</div>
);

export const ExperienceSection = ({ onImageClick }) => (
	<section className="section experience-section" id="experience">
		<div className="experience-container">
			<div className="experience-header">
				<h2 className="section-title serif-large">EXPERIENCE</h2>
				<span className="exp-badge">2026</span>
			</div>

			<article className="exp-block" id="exp-emoi">
				<ExperienceHeader
					number="01"
					company="Công ty dịch vụ trợ lý Em ơi"
					position="Leader Content"
				>
					<div className="exp-logo-badge emoi-brand-pill">
						<span className="emoi-logo-text">em ơi!</span>
						<span className="emoi-logo-sub">YOUR PERSONAL ASSISTANT</span>
					</div>
				</ExperienceHeader>
				<div className="exp-body-grid">
					<div className="exp-responsibilities">
						<h4 className="block-subtitle">Key Responsibilities &amp; Leadership</h4>
						<ul className="editorial-list">
							<li>Lên campaign, pillar content, calendar content, kế hoạch sản xuất nội dung đa nền tảng.</li>
							<li>Quản lý và đốc thúc tiến độ xuất bản nội dung, đảm bảo định hướng truyền thông thương hiệu.</li>
							<li>Quản lý trang và theo dõi chặt chẽ các chỉ số tăng trưởng (Reach, Engagement, Followers).</li>
						</ul>
						<MetricCard />
					</div>
					<div className="exp-visuals-col">
						<div className="exp-gallery">
							<div className="gallery-item" style={{ gridColumn: '1 / -1' }}>
								<img
									src={image('image (2).png')}
									alt="Em Ơi content campaign"
									className="interactive-img"
									onClick={() => onImageClick(image('image (2).png'), 'Em Ơi content campaign')}
								/>
							</div>
						</div>
						<div className="exp-wide-photo">
							<img
								src={image('image (3).png')}
								alt="Em Ơi campaign visual"
								className="interactive-img"
								onClick={() => onImageClick(image('image (3).png'), 'Em Ơi campaign visual')}
							/>
							<div className="img-badge">Sự kiện: Đêm Sắc Màu x Em Ơi</div>
						</div>
					</div>
				</div>
				<div className="exp-video-showcase">
					<h4 className="video-showcase-title">Featured Video Production — Em Ơi Campaigns</h4>
					<div className="video-cards-grid">
						<VideoCard
							src="emoi-company-service.mp4"
							tag="Short Video / Reels"
							title="Mở công ty chỉ cần đăng ký kinh doanh?"
						/>
						<VideoCard
							src="emoi-business-guide.mp4"
							tag="Educational Video"
							title="Khi bắt đầu kinh doanh — Khởi nghiệp cùng Em Ơi"
						/>
						<VideoCard
							src="emoi-recap-event.mp4"
							tag="Event Recap"
							title="Recap: Em Ơi x Đêm Sắc Màu (Chương trình Khởi nghiệp)"
						/>
					</div>
				</div>
			</article>

			<article className="exp-block" id="exp-vltv">
				<ExperienceHeader number="02" company="Văn Lang TV" position="CTV Biên tập">
					<div className="exp-logo-badge vltv-brand-pill">
						<div className="vltv-badge-circle">
							<span className="vltv-text">VĂN LANG</span>
							<span className="vltv-sub">TV</span>
						</div>
					</div>
				</ExperienceHeader>
				<div className="exp-body-grid">
					<div className="exp-responsibilities">
						<h4 className="block-subtitle">Editorial &amp; Scriptwriting</h4>
						<ul className="editorial-list">
							<li>Biên tập các số phát sóng hàng tuần về sinh viên và các hoạt động học thuật, văn hóa tại trường.</li>
							<li>Viết kịch bản Viral Clip 20/11 và Viral Clip Tết.</li>
							<li>Tham gia trực tiếp vào quá trình tiền kỳ, sản xuất (production) và planning.</li>
							<li>
								<strong>Thành tích:</strong> Thu hút hơn <strong>5.000+ lượt xem</strong> và{' '}
								<strong>1.000+ lượt tương tác</strong> cho Viral Clip ngày Tết; duy trì lượng người xem
								ổn định các số phát sóng từ 300 đến 1.000 lượt.
							</li>
						</ul>
					</div>
					<div className="exp-visuals-col">
						<div className="vltv-frame-card">
							<img
								src={image('image.png')}
								alt="Văn Lang TV campus production"
								className="interactive-img"
								onClick={() =>
									onImageClick(
										image('image.png'),
										'Văn Lang TV campus production',
									)
								}
							/>
							<div className="img-badge">Behind The Scenes / Campus Video</div>
						</div>
					</div>
				</div>
				<div className="exp-video-showcase">
					<h4 className="video-showcase-title">Featured Broadcast &amp; Production — Văn Lang TV</h4>
					<div className="video-cards-grid single-focus">
						<VideoCard
							src="lop-hoc-xinh-reel.mp4"
							tag="Văn Lang TV Feature"
							title="Chương trình phát sóng Văn Lang TV — Biên tập & Sản xuất"
						/>
					</div>
				</div>
			</article>
		</div>
	</section>
);

const projects = [
	{
		category: 'marketing',
		bar: 'MARKETING & STRATEGY',
		year: '2024',
		type: 'Brand Management & Campaign',
		title: 'CEE HOUSE — O2B Origin of Beauty',
		description:
			'Chiến dịch Quản trị Thương hiệu & Kế hoạch Truyền thông toàn diện cho dòng sản phẩm chăm sóc sắc đẹp O2B - CEE House. Xây dựng Brand Persona, định vị phân khúc, chiến lược thông điệp và kế hoạch kích hoạt bán hàng đa kênh.',
		image: 'cee-house-o2b-preview.png',
		imageAlt: 'CEE HOUSE O2B Origin of Beauty',
		pdf: 'cee-house-o2b.pdf',
		pdfTitle: 'CEE HOUSE O2B — Kế hoạch Quản trị Thương hiệu',
	},
	{
		category: 'marketing',
		bar: 'MARKETING & HERITAGE',
		year: '2024',
		type: 'Cultural Heritage & Public Relations',
		title: 'Xây dựng Kế hoạch Truyền thông Đình thần An Khánh',
		description:
			'Dự án khảo sát thực địa và lập kế hoạch truyền thông bảo tồn, quảng bá giá trị di sản văn hóa tâm linh Đình thần An Khánh. Tái cấu trúc tư liệu lịch sử thành nội dung số tương tác thu hút giới trẻ.',
		cover: ['ĐÌNH THẦN AN KHÁNH', 'Cultural Heritage Communication Plan', 'Project Report', 'heritage-accent'],
		pdf: 'dinh-than-an-khanh.pdf',
		pdfTitle: 'Kế hoạch Truyền thông Di sản Đình thần An Khánh',
	},
	{
		category: 'marketing',
		bar: 'MARKETING & COMMUNICATION CAMPAIGN',
		year: '2026',
		type: 'Marketing Communication & Campaign Planning',
		title: 'ROLAPETPAL — Next to Paws',
		description:
			'Xây dựng kế hoạch truyền thông tích hợp cho ROLAPETPAL với định hướng “Next to Paws”, tập trung vào hành trình Awareness – Engagement – Conversion. Dự án triển khai chiến lược nội dung đa nền tảng, KOL/KOC, social media, activation và sự kiện nhằm gia tăng nhận diện, tương tác và thúc đẩy chuyển đổi.',
		cover: ['ROLAPETPAL', 'Integrated Marketing Communication Campaign', 'Marketing Communication Plan', ''],
		pdf: 'BÀI CUỐI KÌ - ROLAPETPAL (2).pdf',
		pdfTitle: 'ROLAPETPAL — Marketing Communication Plan',
	},
	{
		category: 'design',
		bar: 'DESIGN & EDITORIAL',
		year: '2024',
		type: 'Editorial & Visual Arts',
		title: 'Đồ án Thiết kế Đồ họa 1',
		description:
			'Tuyển tập các tác phẩm thiết kế đồ họa thị giác: nghiên cứu cấu trúc Typography, xử lý bố cục lưới (Grid system), đồ họa vector và các ấn phẩm in ấn sáng tạo.',
		cover: ['GRAPHIC DESIGN I', 'Typography, Grid Systems & Editorial Layout', 'Academic Studio Project', 'graphic-accent'],
		pdf: 'graphic-design-1.pdf',
		pdfTitle: 'Thiết kế Đồ họa 1 — Báo cáo Đồ án',
	},
	{
		category: 'design',
		bar: 'DESIGN & MULTIMEDIA',
		year: '2024',
		type: 'Multimedia Communication Studio',
		title: 'Báo cáo Đồ án Thiết kế Truyền thông',
		description:
			'Tổng hợp bài thi kết thúc học phần thiết kế đa phương tiện. Thể hiện năng lực sáng tạo trong nghệ thuật thị giác số, xử lý chất liệu đồ họa và storytelling.',
		cover: ['MULTIMEDIA DESIGN', 'Final Examination Portfolio & Visual Showcase', 'Examination Portfolio', 'exam-accent'],
		pdf: 'multimedia-design-exam.pdf',
		pdfTitle: 'Báo cáo Đồ án Thiết kế Truyền thông',
	},
	{
		category: 'video',
		bar: 'VIDEO & MOTION GRAPHICS',
		year: '2024',
		type: '2D / 3D Animation & VFX',
		title: 'Motion Design & 2D/3D Animation',
		description:
			'Tạo chuyển động đồ họa 2D & 3D không gian trừu tượng, hiệu ứng ánh sáng (glow lighting) và nhịp điệu motion tương tác sống động.',
		video: 'animation.mp4',
		tags: ['After Effects', '3D Motion', 'Visual Storytelling'],
	},
	{
		category: 'video',
		bar: 'VIDEO & KINETIC TYPOGRAPHY',
		year: '2024',
		type: 'Kinetic Typography Video',
		title: 'Typographic Lyric Video Production',
		description:
			'Video chuyển động chữ Kinetic Typography kết hợp âm nhạc, điều chỉnh nhịp điệu (pacing) và visual dynamic mang lại trải nghiệm cảm xúc đa giác quan.',
		video: 'typographic-lyric.mp4',
		tags: ['Kinetic Typography', 'Premiere Pro', 'Sound Sync'],
	},
	{
		category: 'video',
		bar: 'VIDEO & SOCIAL REELS',
		year: '2024',
		type: 'Social Video / Short-form Storytelling',
		title: 'Lớp Học Xinh — Share Your Mind',
		description:
			'Series video ngắn định dạng dọc dành cho nền tảng Reels / TikTok, khai thác câu chuyện sinh viên, lan tỏa năng lượng tích cực và sự đồng cảm cộng đồng.',
		video: 'lop-hoc-xinh-reel.mp4',
		tags: ['Short-form Reels', 'Directing & Editing', 'Social Engagement'],
		vertical: true,
	},
];

const ProjectCard = ({ project, onOpenPdf, onImageClick }) => (
	<article className="project-item" data-category={project.category}>
		<div className={`project-category-bar ${project.category}-bar`}>
			<span>{project.bar}</span>
		</div>
		<div className="project-card-layout">
			<div className="project-media-col">
				{project.image ? (
					<div className="project-media-frame">
						<img
							src={image(project.image)}
							alt={project.imageAlt}
							className="project-preview-img interactive-img"
							onClick={() => onImageClick(image(project.image), project.imageAlt)}
						/>
					</div>
				) : project.video ? (
					<div className={`video-container-card${project.vertical ? ' vertical-reel' : ''}`}>
						<PortfolioVideo src={project.video} />
					</div>
				) : (
					<div className={`pdf-cover-card ${project.cover[3]}`}>
						<div className="pdf-badge-icon">
							<i className="bi bi-file-earmark-richtext" aria-hidden="true" />
						</div>
						<h4 className="pdf-cover-title">{project.cover[0]}</h4>
						<p className="pdf-cover-sub">{project.cover[1]}</p>
						<span className="pdf-tag">{project.cover[2]}</span>
					</div>
				)}
			</div>
			<div className="project-info-col">
				<div className="project-meta-top">
					<span className="project-year">{project.year}</span>
					<span className="project-type-tag">{project.type}</span>
				</div>
				<h3 className="project-title serif-title">{project.title}</h3>
				<p className="project-desc">{project.description}</p>
				{project.tags && (
					<div className="project-tags-list">
						{project.tags.map((tag) => (
							<span className="tech-tag" key={tag}>
								{tag}
							</span>
						))}
					</div>
				)}
				{project.pdf && (
					<div className="project-actions">
						<button
							className="btn btn-primary"
							type="button"
							onClick={() =>
								onOpenPdf(
									document(project.pdf),
									documentDownload(project.pdf),
									project.pdfTitle,
								)
							}
						>
							<i className="bi bi-file-earmark-text" aria-hidden="true" />
							VIEW PROJECT REPORT
						</button>
						<a href={documentDownload(project.pdf)} download className="btn btn-secondary">
							<i className="bi bi-download" aria-hidden="true" />
							DOWNLOAD PDF
						</a>
					</div>
				)}
			</div>
		</div>
	</article>
);

export const ProjectsSection = ({ onOpenPdf, onImageClick }) => {
	const [filter, setFilter] = useState('design');
	const categories = ['design', 'video', 'marketing'];

	return (
		<section className="section projects-section" id="projects">
			<div className="projects-container">
				<div className="projects-header-row">
					<h2 className="section-title serif-huge">Project</h2>
					<div className="project-filters" aria-label="Filter projects">
						{categories.map((category) => (
							<button
								className={`filter-pill${filter === category ? ' active' : ''}`}
								type="button"
								aria-pressed={filter === category}
								key={category}
								onClick={() => setFilter(category)}
							>
								{category[0].toUpperCase() + category.slice(1)}
							</button>
						))}
					</div>
				</div>
				<div className="editorial-projects-list">
					{projects
						.filter((project) => project.category === filter)
						.map((project) => (
							<ProjectCard
								key={project.title}
								project={project}
								onOpenPdf={onOpenPdf}
								onImageClick={onImageClick}
							/>
						))}
				</div>
			</div>
		</section>
	);
};

export const SkillsSection = ({ onImageClick }) => (
	<section className="section skills-section" id="skills">
		<div className="skills-container">
			<h2 className="section-title serif-huge">SKILL</h2>
			<div className="skills-grid">
				<div className="skills-photo-col">
					<div className="skills-photo-frame">
						<img
							src={image('chân dung.jpg')}
							alt="Giảng Ngọc Anh Thư portrait"
							className="skills-portrait-img interactive-img"
							onClick={() =>
								onImageClick(
									image('chân dung.jpg'),
									'Giảng Ngọc Anh Thư portrait',
								)
							}
						/>
					</div>
				</div>
				<div className="skills-list-col">
					{[
						['Giao tiếp và đàm phán', 'pastel-lime'],
						['Quản lý thời gian', 'minimal-item'],
						['Tư duy phản biện', 'pastel-peach'],
						['Brand Strategy & Content Planning', 'minimal-item'],
						['Photoshop, Illustrator, Premiere, After Effects', 'pastel-yellow'],
						['Animation 2D, 3D & Motion Graphics', 'minimal-item'],
					].map(([skill, style]) => (
						<div className={`skill-item ${style}`} key={skill}>
							<span className="skill-text">{skill}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	</section>
);

export const ContactSection = () => (
	<section className="section contact-section" id="contact">
		<div className="contact-banner-strip">
			<div className="contact-strip-inner">
				<div className="strip-brand">
					<BrandMark />
					<span>TanGie</span>
				</div>
				<span className="strip-action">WORK WITH ME</span>
			</div>
		</div>
		<div className="contact-main-card">
			<div className="contact-card-inner">
				<div className="contact-left">
					<h2 className="contact-cta-title serif-huge">
						<span>Let’s</span>
						<span>get started.</span>
					</h2>
					<p className="contact-subtext">
						Sẵn sàng hợp tác cho các dự án Thiết kế Thương hiệu, Sáng tạo Nội dung và Sản xuất Video.
					</p>
				</div>
				<div className="contact-right">
					<div className="contact-details">
						<a href="mailto:anhthu.creative@gmail.com" className="contact-detail-link">
							<i className="bi bi-envelope" aria-hidden="true" />
							<span>anhthu.creative@gmail.com</span>
						</a>
						<a href="tel:+84900000000" className="contact-detail-link">
							<i className="bi bi-telephone" aria-hidden="true" />
							<span>(09x) xxx-xxxx</span>
						</a>
						<div className="contact-detail-item">
							<i className="bi bi-geo-alt" aria-hidden="true" />
							<span>Ho Chi Minh City, Vietnam</span>
						</div>
					</div>
					<div className="contact-social-icons">
						{[
							['facebook', 'Facebook'],
							['instagram', 'Instagram'],
							['linkedin', 'LinkedIn'],
						].map(([icon, label]) => (
							<a
								href={`https://${icon}.com`}
								target="_blank"
								rel="noopener noreferrer"
								className="social-circle-btn"
								aria-label={label}
								key={icon}
							>
								<i className={`bi bi-${icon}`} aria-hidden="true" />
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	</section>
);

