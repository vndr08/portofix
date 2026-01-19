import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import BlurImage from "@/public/image/placeholder/blur.jpg";

export default function ProjectCard({ project, index, activeCategory }) {
	return (
		<>
			{project.category.includes(parseInt(activeCategory)) && (
				<Link href={"projects/" + project.slug}>
					<motion.div
						className="z-10 relative flex justify-center items-start flex-col mb-5 md:px-10 w-full h-auto bg-gray-400 group/tes py-20 px-5 md:py-2 aspect-video cursor-pointer overflow-hidden rounded-lg shadow-lg"
						initial={{
							opacity: 0,
							x: -200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						whileHover={{
							scale: 1.02,
							y: -5,
						}}
						transition={{
							type: "spring",
							stiffness: 100,
							damping: 12,
						}}>
						<Image
							src={project.thumbnail}
							alt={project.title}
							fill={true}
							sizes="(max-width: 768px) 100vw, 50vw"
							placeholder="blur"
							className="bg-slate-950 opacity-10 group-hover/tes:opacity-100 transition-all ease duration-500 object-cover"
							blurDataURL={BlurImage.src}
						/>
						<motion.div 
							className="absolute top-0 left-0 bg-gradient-to-r from-gray-700 to-gray-600 px-4 py-2"
							whileHover={{ x: 5 }}
						>
							<h4 className="text-white font-semibold">{project.year}</h4>
						</motion.div>
						<motion.div 
							className="transition-all ease duration-500 opacity-100 content text-center group-hover/tes:opacity-0 z-10"
							initial={{ opacity: 1 }}
							whileHover={{ opacity: 0 }}
						>
							<motion.h1 
								className="text-3xl font-bold mb-3"
								initial={{ y: 0 }}
								whileHover={{ y: -10 }}
								transition={{ type: "spring" }}
							>
								{project.title}
							</motion.h1>
							<motion.p
								initial={{ opacity: 0.8 }}
								whileHover={{ opacity: 1 }}
							>
								{project.desc[0].length > 125
									? `${project.desc[0].slice(0, 125)}...`
									: project.desc[0]}
							</motion.p>
							<motion.div 
								className="flex justify-center items-center flex-row mt-5 flex-wrap"
								initial={{ opacity: 0.8 }}
								whileHover={{ opacity: 1 }}
							>
							{project.tech.map((t, idx) => (
								<motion.span
									key={t}
									className="m-1 px-4 py-2 bg-gray-600 text-white rounded transition-colors hover:bg-gray-500"
									initial={{ scale: 0.9, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ delay: idx * 0.05 }}
									whileHover={{ scale: 1.05 }}
								>
									{t}
								</motion.span>
								))}
							</motion.div>
						</motion.div>
					</motion.div>
				</Link>
			)}
		</>
	);
}

ProjectCard.propTypes = {
	project: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	activeCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
};
