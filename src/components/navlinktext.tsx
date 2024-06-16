export default function NavLinkText(
	{ children, className="", ...props }:
	{ children: React.ReactNode | string; className?: string } 
) {
	return (
		<span className={"font-light text-lg" + " " + className} {...props}>
			{children}
		</span>
	)
}
