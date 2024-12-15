import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Layout from '@/components/Container'

const fontRoboto = Roboto({
	weight: ['100', '300', '400', '500', '700', '900'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Farm boys',
	description: 'Farm boys dashboard',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pt-br'>
			<body className={`${fontRoboto.className}`}>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
