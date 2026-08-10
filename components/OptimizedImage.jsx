import Image from "next/image";
import { getBlurDataURL, imageSizes } from "@/lib/image-utils";
import PropTypes from "prop-types";

export default function OptimizedImage({
	src,
	alt,
	sizes = imageSizes.default,
	priority = false,
	fill = true,
	className = "",
	...props
}) {
	const blurDataURL = getBlurDataURL();

	return (
		<Image
			src={src}
			alt={alt}
			fill={fill}
			sizes={sizes}
			priority={priority}
			placeholder="blur"
			blurDataURL={blurDataURL}
			className={`transition-opacity duration-300 ${className}`}
			{...props}
		/>
	);
}

OptimizedImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	sizes: PropTypes.string,
	priority: PropTypes.bool,
	fill: PropTypes.bool,
	className: PropTypes.string,
};
