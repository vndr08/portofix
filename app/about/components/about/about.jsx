import Image from "next/image";
import { motion } from "framer-motion";
import Me1 from "@/public/image/me1.jpg";
import Me2 from "@/public/image/me2.jpg";
import Me3 from "@/public/image/me3.jpg";
import Hr from "@/components/Hr";

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5 ">
					<div className="images relative w-full  aspect-square">
						<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								className="w-full h-full">
								<Image
									src={Me1}
									alt="Ivander"
									fill={true}
									sizes="(max-width: 768px) 100vw, 50vw"
									placeholder="blur"
									className="w-full h-full object-cover"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{ delay: 0.3 }}
								className="w-full h-full">
								<Image
									src={Me2}
									alt="Ivander"
									fill={true}
									sizes="(max-width: 768px) 100vw, 30vw"
									placeholder="blur"
									className="w-full h-full object-cover"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{
									delay: 0.5,
								}}
								className="w-full h-full">
								<Image
									src={Me3}
									alt="Ivander"
									fill
									sizes="(max-width: 768px) 100vw, 40vw"
									placeholder="blur"
									className="w-full h-full object-cover"
								/>
							</motion.div>
						</div>
					</div>
				</div>
				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-10"
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.5,

						type: "spring",
					}}>
					<h2 className="text-2xl font-bold tracking-wider mb-3">
							Ivander Johana Pratama
					</h2>
					<p className="text-gray-600 text-justify title text-lg">
						Final year
						<span className="text-black font-medium">
							{" "}
							Information Systems student
						</span>{" "}
						at{" "}
						<span className="text-black font-medium">
							President University
						</span>{" "}
						specializing in
						<span className="text-black font-medium">
							{" "}
							Data Science, software development, and AI automation
						</span>
						. I have hands-on experience building internal AI systems, including an enterprise-level helpdesk chatbot for
						<span className="text-black font-medium">
							{" "}
							PT Jababeka Tbk
						</span>{" "}
						that integrates machine learning, NLP, OCR, and automated ticket creation.
					</p>
					<p className="text-gray-600 text-justify title text-lg mt-4">
						I am skilled in developing
						<span className="text-black font-medium">
							{" "}
							web applications, implementing data pipelines, and applying machine learning techniques
						</span>{" "}
						for analysis and automation. I enjoy working in
						<span className="text-black font-medium">
							{" "}
							cross-functional teams
						</span>{" "}
						and thrive in fast-paced environments where
						<span className="text-black font-medium">
							{" "}
							problem-solving and adaptability
						</span>{" "}
						are essential.
					</p>
				</motion.div>
			</div>
		</>
	);
}
