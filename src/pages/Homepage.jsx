import { useEffect, useState } from 'react';
import {
	AboutSection,
	ContactSection,
	ContentsSection,
	EducationSection,
	ExperienceSection,
	HeroSection,
	ProjectsSection,
	SkillsSection,
} from './home/PortfolioSections';

const Homepage = () => {
	const [pdf, setPdf] = useState(null);
	const [pdfLoading, setPdfLoading] = useState(false);
	const [lightbox, setLightbox] = useState(null);

	useEffect(() => {
		const modalOpen = Boolean(pdf || lightbox);
		document.body.style.overflow = modalOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [pdf, lightbox]);

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				setPdf(null);
				setLightbox(null);
			}
		};
		const pauseOtherVideos = (event) => {
			document.querySelectorAll('video').forEach((video) => {
				if (video !== event.target && !video.paused) video.pause();
			});
		};

		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('play', pauseOtherVideos, true);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('play', pauseOtherVideos, true);
		};
	}, []);

	const openPdf = (url, downloadUrl, title) => {
		setPdf({ url, downloadUrl, title });
		setPdfLoading(true);
	};

	return (
		<>
			<main className="page-wrapper">
				<HeroSection />
				<AboutSection onImageClick={(src, alt) => setLightbox({ src, alt })} />
				<ContentsSection />
				<EducationSection onImageClick={(src, alt) => setLightbox({ src, alt })} />
				<ExperienceSection onImageClick={(src, alt) => setLightbox({ src, alt })} />
				<ProjectsSection
					onOpenPdf={openPdf}
					onImageClick={(src, alt) => setLightbox({ src, alt })}
				/>
				<SkillsSection onImageClick={(src, alt) => setLightbox({ src, alt })} />
				<ContactSection />
			</main>

			{pdf && (
				<div
					className="modal-overlay active"
					role="dialog"
					aria-modal="true"
					aria-labelledby="pdfModalTitle"
					onClick={(event) => {
						if (event.target === event.currentTarget) setPdf(null);
					}}
				>
					<div className="modal-window pdf-modal-window">
						<div className="modal-header">
							<div className="modal-title-group">
								<i className="bi bi-file-earmark-text" aria-hidden="true" />
								<h3 className="modal-doc-title" id="pdfModalTitle">
									{pdf.title || 'Project Report'}
								</h3>
							</div>
							<div className="modal-actions">
								<a
									href={pdf.downloadUrl}
									download
									className="modal-icon-btn"
									title="Download PDF"
								>
									<i className="bi bi-download" aria-hidden="true" />
									<span className="btn-text">Download</span>
								</a>
								<button
									className="modal-close-btn"
									type="button"
									aria-label="Close PDF viewer"
									onClick={() => setPdf(null)}
								>
									<i className="bi bi-x-lg" aria-hidden="true" />
								</button>
							</div>
						</div>
						<div className="modal-body pdf-modal-body">
							{pdfLoading && (
								<div className="iframe-loader">
									<div className="spinner" />
									<span>Loading Document...</span>
								</div>
							)}
							<iframe
								key={pdf.url}
								src={pdf.url}
								className="pdf-iframe"
								title="PDF Document Viewer"
								onLoad={() => setPdfLoading(false)}
							/>
						</div>
					</div>
				</div>
			)}

			{lightbox && (
				<div
					className="modal-overlay active"
					role="dialog"
					aria-modal="true"
					aria-label="Image preview"
					onClick={(event) => {
						if (event.target === event.currentTarget) setLightbox(null);
					}}
				>
					<div className="modal-window lightbox-window">
						<button
							className="modal-close-btn lightbox-close"
							type="button"
							aria-label="Close image preview"
							onClick={() => setLightbox(null)}
						>
							<i className="bi bi-x-lg" aria-hidden="true" />
						</button>
						<div className="lightbox-img-wrap">
							<img src={lightbox.src} alt={lightbox.alt} />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Homepage;
