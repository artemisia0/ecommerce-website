export default function Header() {
	const signedIn = false
	return (
		<header>
			<nav>
				<a>About Us</a>
				<a>News</a>
				<a>ecommerce-website</a>
				{signedIn ?
					<>
						<a>Shopping Bag</a>
						<a>My Profile</a>
					</>
					:
					<>
						<a>Sign In</a>
						<a>Sign Up</a>
					</>
				}
			</nav>
		</header>
	)
}
