const getDriveFileId = (url = '') => {
	const match = url.match(/drive\.google\.com\/file\/d\/([^/?#]+)|[?&]id=([^&#]+)/i);
	return match ? match[1] || match[2] : null;
};

export const toDrivePreviewUrl = (url) => {
	const fileId = getDriveFileId(url);
	return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url;
};

export const toDriveImageUrl = (url) => {
	const fileId = getDriveFileId(url);
	return fileId
		? `https://drive.google.com/uc?export=view&id=${encodeURIComponent(fileId)}`
		: url;
};

export const toDriveDownloadUrl = (url) => {
	const fileId = getDriveFileId(url);
	return fileId
		? `https://drive.google.com/uc?export=download&id=${encodeURIComponent(fileId)}`
		: url;
};
