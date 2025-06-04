import { SanityLive } from '@lib/sanityLive';
import '@styles/globals.css';

import type { PropsWithChildren } from 'react';

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<head />
			<body>{children}</body>
			<SanityLive />
		</html>
	);
}
