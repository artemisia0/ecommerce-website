export default function Footer() {
	return (
		<footer className="border-t-2 border-zinc-400 flex flex-col justify-content items-center align-center p-2 bg-zinc-300 shadow-inner">
			<p className="text-lg font-light mb-1">ecommerce-website</p>
			<p>(C) Copyright</p>
			<p>Contact us: our email</p>
			<p>Follow us on social media</p>
			<div className="flex flex-row justify-center align-center items-center gap-x-4">
				<a>Here</a>
				<a>Here</a>
				<a>And here</a>
			</div>
		</footer>
	)
}
