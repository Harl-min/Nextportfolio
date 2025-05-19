import { TypeWriter } from '@components/atoms/TypeWriter';

import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
	const talkAbout = [
		'React',
		'TypeScript',
		'Angular',
		'Redux',
		'Ionic',
		'Next.js',
		'RESTful APIs',
		'HTML',
		'CSS',
		'AWS',
	];

	return (
		<section id="hero" className="relative isolate overflow-hidden pt-9">
			<div className="bg-gradient-from-t absolute inset-x-0 bottom-0 -z-10 h-24 from-off-white dark:from-slate-950 sm:h-32" />
			<div
				className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] dark:shadow-slate-700 sm:-mr-80 lg:-mr-96 lg:shadow-xl"
				aria-hidden="true"
			/>
			<div className="flex justify-between gap-5 px-5 xl:px-10">
				<div className="flex-col mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
					<div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
					<h1 className="headline max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl lg:col-span-2 xl:col-auto">
						Hey, I&apos;m Al-Ameen Ashimi
					</h1>
						<p className="text-lg leading-8 text-slate-600 dark:text-off-white">
							I am a passionate Software Engineer, specialised in front-end
							development using React and TypeScript. As an advocate for web
							performance and accessibility and an evangelist for the Jamstack,
							I create amazing web applications to make the internet a better
							place.
							<br />
							You can talk to me about <span className='text-blue-700 dark:text-blue-500 font-extrabold'>
								<TypeWriter strings={talkAbout} />.
								</span>	
						</p>
						<div className="mt-10 flex items-center gap-x-6">
							<Link
								href="/contact"
								className="rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							>
								Get in touch
							</Link>
							<Link
								href="/about"
								className="text-sm font-semibold leading-6 text-slate-900 transition-all hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-200"
							>
								Read more <span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
					</div>
					<div className="portfolio-image">
					<Image
						src="/assets/al-ameen.jpg"
						alt="Photo of Al-Ameen Ashimi"
						height={300}
						width={450}
						loading="eager"
						className="mt-10 aspect-[6/5] max-w-full rounded-l object-cover sm:mt-16 lg:ml-20 lg:mt-0 lg:max-w-none xl:row-span-2 xl:mt-0"
					/>
					</div>
			</div>
			<div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-off-white dark:from-slate-950 sm:h-32" />
		</section>
	);
};
