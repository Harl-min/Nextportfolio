import { Container } from '@components/atoms/Container';
import {
	IconBsky,
	IconGithub,
	IconInstagram,
	IconLinkedin,
	IconThreads,
	IconX,
} from '@components/atoms/Icons';
import { SocialIcons } from '@components/molecules/SocialIcons';

const Footer = () => {
	return (
		<footer className="mt-8 py-8 md:mt-20">
			<Container className="flex flex-col-reverse gap-4 md:flex-row md:justify-between">
				<span className="text-center md:text-left">
					&copy; {new Date().getFullYear()} Al-Ameen Ashimi
				</span>
				<SocialIcons
					profiles={[
						{
							name: 'Github',
							url: 'https://www.github.com/Harl-min',
							icon: <IconGithub />,
						},
						{
							name: 'LinkedIn',
							url: 'https://www.linkedin.com/in/al-ameen-ashimi',
							icon: <IconLinkedin />,
						},
						// {
						// 	name: 'Instagram',
						// 	url: 'https://www.instagram.com/jakeherp',
						// 	icon: <IconInstagram />,
						// },
						// {
						// 	name: 'X.com',
						// 	url: 'https://twitter.com/harlmeen',
						// 	icon: <IconX />,
						// },
						{
							name: 'Threads',
							url: 'https://www.threads.net/@harlmin',
							icon: <IconThreads />,
						},
					]}
					className="justify-center md:justify-end"
				/>
			</Container>
		</footer>
	);
};

export { Footer };
