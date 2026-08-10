"use client";

import { motion } from "framer-motion";

function SkeletonLine({ className = "" }) {
	return (
		<div
			className={`animate-pulse rounded bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 ${className}`}
		/>
	);
}

function SkeletonCircle({ className = "" }) {
	return (
		<div
			className={`animate-pulse rounded-full bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 ${className}`}
		/>
	);
}

export function ProjectCardSkeleton() {
	return (
		<div className="theme-card overflow-hidden rounded-[1.5rem]">
			<div className="aspect-[16/10] animate-pulse bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800" />
			<div className="p-4 sm:p-5">
				<SkeletonLine className="h-3 w-24 mb-2" />
				<SkeletonLine className="h-5 w-full mb-2" />
				<SkeletonLine className="h-5 w-3/4 mb-3" />
				<SkeletonLine className="h-4 w-full mb-2" />
				<SkeletonLine className="h-4 w-5/6 mb-5" />
				<div className="flex gap-2">
					<SkeletonLine className="h-6 w-16 rounded-full" />
					<SkeletonLine className="h-6 w-20 rounded-full" />
					<SkeletonLine className="h-6 w-14 rounded-full" />
				</div>
			</div>
		</div>
	);
}

export function ProjectMosaicSkeleton() {
	return (
		<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
			{[...Array(5)].map((_, i) => (
				<ProjectCardSkeleton key={i} />
			))}
		</div>
	);
}

export function SectionSkeleton() {
	return (
		<div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10 lg:px-20">
			<SkeletonLine className="h-4 w-24 mb-3" />
			<SkeletonLine className="h-8 w-96 mb-3" />
			<SkeletonLine className="h-5 w-full mb-2" />
			<SkeletonLine className="h-5 w-3/4 mb-10" />
			<div className="grid grid-cols-1 gap-5 md:grid-cols-3">
				{[...Array(3)].map((_, i) => (
					<div key={i} className="theme-card rounded-[1.5rem] p-6">
						<SkeletonCircle className="h-12 w-12 mb-5" />
						<SkeletonLine className="h-5 w-32 mb-3" />
						<SkeletonLine className="h-4 w-full mb-2" />
						<SkeletonLine className="h-4 w-5/6" />
					</div>
				))}
			</div>
		</div>
	);
}

export function HeroSkeleton() {
	return (
		<div className="flex min-h-screen items-center px-4 pt-24 sm:px-6 md:px-10 lg:px-20">
			<div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 py-10 sm:py-12 lg:grid-cols-[1.05fr_0.95fr]">
				<div className="space-y-4">
					<SkeletonLine className="h-10 w-48" />
					<SkeletonLine className="h-14 w-full" />
					<SkeletonLine className="h-6 w-3/4" />
					<div className="space-y-2 pt-4">
						<SkeletonLine className="h-4 w-full" />
						<SkeletonLine className="h-4 w-full" />
						<SkeletonLine className="h-4 w-5/6" />
					</div>
					<div className="flex gap-3 pt-4">
						<SkeletonLine className="h-12 w-36 rounded-full" />
						<SkeletonLine className="h-12 w-36 rounded-full" />
					</div>
				</div>
				<div className="hidden lg:block">
					<SkeletonCircle className="aspect-[4/5] h-96 w-full rounded-[2rem]" />
				</div>
			</div>
		</div>
	);
}

export default function LoadingSpinner({ size = "md" }) {
	const sizeClasses = {
		sm: "h-4 w-4",
		md: "h-8 w-8",
		lg: "h-12 w-12",
	};

	return (
		<motion.div
			className={`${sizeClasses[size]} relative`}
			animate={{ rotate: 360 }}
			transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
			<div className="absolute inset-0 rounded-full border-2 border-emerald-500/30" />
			<div className="absolute inset-0 rounded-full border-2 border-transparent border-t-emerald-500" />
		</motion.div>
	);
}
