"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
	faHome,
	faUser,
	faFolderOpen,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => {
	const handleMoveToSection = (index) => {
		fullpage_api.moveTo(index);
		fullpage_api.getActiveSection();
	};

	const containIsActive = (index) => {
		if (fullpage_api.getActiveSection().index === index) {
			return "bg-gray-500";
		}
		return "";
	};

	const containerVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -20, scale: 0.8 },
		visible: {
			opacity: 1,
			x: 0,
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 12,
			},
		},
		hover: {
			scale: 1.2,
			transition: { type: "spring", stiffness: 400, damping: 10 },
		},
		tap: { scale: 0.95 },
	};

	return (
		<motion.div 
			className="hidden md:flex fixed z-40 bg-gray-700 h-[50vh] w-14  flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl"
			initial={{ opacity: 0, x: -50 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
		>
			<motion.ul
				id="sidebar"
				className="flex flex-col justify-evenly items-center h-full  text-gray-50"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.li 
					data-menuanchor="home" 
					className="active"
					variants={itemVariants}
					whileHover="hover"
					whileTap="tap"
				>
					<button 
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							handleMoveToSection(1);
						}}
						type="button"
						aria-label="Navigate to home"
						className="p-2 hover:bg-gray-600 rounded transition-colors"
					>
						<FontAwesomeIcon icon={faHome} className="text-xl" />
					</button>
				</motion.li>
				<motion.li 
					data-menuanchor="about"
					variants={itemVariants}
					whileHover="hover"
					whileTap="tap"
				>
					<button 
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							handleMoveToSection(2);
						}}
						type="button"
						aria-label="Navigate to about"
						className="p-2 hover:bg-gray-600 rounded transition-colors"
					>
						<FontAwesomeIcon icon={faUser} className="text-xl" />
					</button>
				</motion.li>
				<motion.li 
					data-menuanchor="projects"
					variants={itemVariants}
					whileHover="hover"
					whileTap="tap"
				>
					<button 
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							handleMoveToSection(3);
						}}
						type="button"
						aria-label="Navigate to projects"
						className="p-2 hover:bg-gray-600 rounded transition-colors"
					>
						<FontAwesomeIcon
							icon={faFolderOpen}
							className="text-xl"
						/>
					</button>
				</motion.li>
				<motion.li 
					data-menuanchor="contact"
					variants={itemVariants}
					whileHover="hover"
					whileTap="tap"
				>
					<button 
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							handleMoveToSection(4);
						}}
						type="button"
						aria-label="Navigate to contact"
						className="p-2 hover:bg-gray-600 rounded transition-colors"
					>
						<FontAwesomeIcon
							icon={faEnvelope}
							className="text-xl"
						/>
					</button>
				</motion.li>
			</motion.ul>
		</motion.div>
	);
};

export default Sidebar;
