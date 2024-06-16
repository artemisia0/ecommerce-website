import NavLinkText from '@/components/navlinktext'


export default function Header() {
	const signedIn = false
	return (
		<header>
			<nav className="shadow-md flex-wrap border-b-2 border-zinc-400 flex flex-row justify-center align-center items-center gap-x-4 sm:gap-x-8 md:gap-x-16 lg:gap-x-32 p-2">
				<a><NavLinkText>About Us</NavLinkText></a>
				<a><NavLinkText>News</NavLinkText></a>
				<a><NavLinkText className="text-xl">ecommerce-website</NavLinkText></a>
				{signedIn ?
					<>
						<a><NavLinkText>Shopping Bag</NavLinkText></a>
						<a><NavLinkText>My Profile</NavLinkText></a>
					</>
					:
					<>
						<a><NavLinkText>Sign In</NavLinkText></a>
						<a><NavLinkText>Sign Up</NavLinkText></a>
					</>
				}
			</nav>
		</header>
	)
}
