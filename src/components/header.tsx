import NavLinkText from '@/components/navlinktext'


export default function Header() {
	const signedIn = false
	return (
		<header>
			<nav className="flex-wrap border-b border-zinc-400 flex flex-row justify-center align-center items-center gap-x-4 sm:gap-x-8 md:gap-x-16 lg:gap-x-32 p-2">
				<a><NavLinkText>About</NavLinkText></a>
				<a><NavLinkText>News</NavLinkText></a>
				<a><NavLinkText>Home</NavLinkText></a>
				{signedIn ?
					<>
						<a><NavLinkText>Cart</NavLinkText></a>
						<a><NavLinkText>Profile</NavLinkText></a>
					</>
					:
					<>
						<a><NavLinkText>Login</NavLinkText></a>
						<a><NavLinkText>Register</NavLinkText></a>
					</>
				}
			</nav>
		</header>
	)
}
