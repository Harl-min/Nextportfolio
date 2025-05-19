import { AnimatePage } from '@components/atoms/AnimatePage';
import { Container } from '@components/atoms/Container';
import { Service } from '@components/atoms/Service/Service';
import { HeroSection } from '@components/molecules/HeroSection/HeroSection';

import { sanityClient } from '@lib/sanity';

import { servicesQuery } from '@queries/services';

import LogoAngular from '@root/public/assets/tools/angular-icon.svg';
import LogoFigma from '@root/public/assets/tools/figma.svg';
import LogoAWS from '@root/public/assets/tools/aws-2.svg';
import LogoReactNative from '@root/public/assets/tools/react-native-1.svg';
import LogoNext from '@root/public/assets/tools/nextjs.svg';
import LogoTailwind from '@root/public/assets/tools/tailwindcss.svg';
import LogoIonic from '@root/public/assets/tools/ionic-1.svg';
import LogoPostman from '@root/public/assets/tools/postman.svg';
import LogoVercel from '@root/public/assets/tools/vercel.svg';

import type { Service as ServiceType } from '@types';

const getData = async () => {
	const services: ServiceType[] = await sanityClient.fetch(servicesQuery);

	return { services };
};

export const metadata = {
	title: 'Software Engineer and Consultant Al-Ameen Ashimi',
	description:
		'A Front-End Software Engineer with a focus on JavaScript and React. I have more than 10 years experience working in software engineering and consulting.',
	keywords: [
		'Software Engineer',
		'Al-Ameen Ashimi',
		'Software Consulting',
		'Front-End',
		'Full-Stack',
		'React',
		'TypeScript',
		'JavaScript',
		'GraphQL',
		'CSS',
		'Tailwind',
	],
};

const HomePage = async () => {
	const { services } = await getData();

	return (
		<AnimatePage>
			<HeroSection />
			<section id="tools" className="my-40">
				<Container>
  <h2 className="headline mt-24 text-center text-xl md:text-2xl lg:text-3xl">
    Some of my favourite tools
  </h2>

  <div className="mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-6">
    <div className="h-16 w-32 flex items-center justify-center">
      <LogoAngular className="h-full object-contain" aria-label="Cypress" />
    </div>
    <div className="h-16 w-32 flex items-center justify-center">
      <LogoNext className="h-full object-contain" aria-label="Next.js" />
    </div>
    <div className="h-16 w-32 flex items-center justify-center">
      <LogoPostman className="h-full object-contain" aria-label="SvelteKit" />
    </div>
    <div className="h-16 w-32 flex items-center justify-center">
      <LogoReactNative className="h-full object-contain" aria-label="Hygraph" />
    </div>
    <div className="h-16 w-32 flex items-center justify-center">
      <LogoIonic className="h-full object-contain" aria-label="Sanity" />
    </div>
    <div className="h-16 w-32 flex items-center justify-center">
      <LogoTailwind className="h-full object-contain" aria-label="Storybook" />
    </div>
    <div className="h-16 w-32 flex items-center justify-center">
      <LogoAWS className="h-full object-contain" aria-label="GraphQL" />
    </div>
    <div className="h-16 w-32 flex items-center justify-center">
      <LogoVercel className="h-full object-contain" aria-label="Vercel" />
    </div>
    <div className="h-16 w-32 flex items-center justify-center">
      <LogoFigma className="h-full object-contain" aria-label="Figma" />
    </div>
  </div>
</Container>

			</section>
			<section id="services">
				<Container>
					<h2 className="headline mt-20 text-2xl md:text-4xl lg:text-5xl">
						Services I provide
						<span className="mt-2 block text-xl font-bold text-off-black dark:text-off-white md:text-2xl">
							as a software architect with a passion for creating applications
							and websites that people love.
						</span>
					</h2>

					{services.map((service, i) => (
						<Service key={service.slug} {...service} isReversed={i % 2 !== 0} />
					))}
				</Container>
			</section>
		</AnimatePage>
	);
};

export default HomePage;
