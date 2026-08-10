import BlurImage from "@/public/image/placeholder/blur.jpg";

// Generate blur data URL for a placeholder
export function getBlurDataURL() {
	return BlurImage.src;
}

// Image size configurations for different use cases
export const imageSizes = {
	// Hero images - full width on mobile, constrained on larger screens
	hero: "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px",

	// Project thumbnails in grid
	projectGrid: "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw",

	// Project thumbnail in mosaic
	projectMosaic: "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",

	// Single project page hero
	projectHero: "(max-width: 1024px) 90vw, 46vw",

	// About page hero
	aboutHero: "(max-width: 1024px) 90vw, 42vw",

	// Standard card images
	card: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px",

	// Gallery images - full width
	gallery: "100vw",

	// Profile avatar
	avatar: "(max-width: 640px) 80px, 120px",

	// Default
	default: "100vw",
};

// Quality presets
export const imageQuality = {
	thumbnail: 75,
	preview: 80,
	hero: 85,
	default: 80,
};

// Priority hints
export const imagePriority = {
	hero: true,
	aboveFold: true,
	belowFold: false,
	default: false,
};

const imageUtils = {
	getBlurDataURL,
	imageSizes,
	imageQuality,
	imagePriority,
};

export default imageUtils;
