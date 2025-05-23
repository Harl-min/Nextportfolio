'use client';

import Jacob from './al-ameen.jpg';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
	hideName?: boolean;
}

const Logo = ({ hideName }: LogoProps) => {
	return (
		<Link href="/" passHref>
			<motion.div
				className="group relative flex items-center gap-4 whitespace-nowrap text-2xl font-bold transition duration-300 hover:transition"
				animate={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -10 }}
			>
				<Image
					src={Jacob}
					width={48}
					height={48}
					quality={100}
					alt="Vectorised image of Al-Ameen Ashimi"
					className="h-12 w-12"
				/>
				{!hideName && (
					<>
						<p className="flex flex-col text-sm opacity-100 transition duration-300 group-hover:opacity-0">
							<span>Al-Ameen</span>
							<span>Software Engineer</span>
						</p>
						<span className="absolute left-16 from-blue-400 to-blue-700 opacity-0 transition duration-300 group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent group-hover:opacity-100">
							@Al-Ameen Ashimi
						</span>
					</>
				)}
			</motion.div>
		</Link>
	);
};

export { Logo };
