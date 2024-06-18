export default function NavLinkText(
	{ children, className="", ...props }:
	{ children: React.ReactNode | string; className?: string;
		[key: string]: any;
	} 
) {
	return (
		<span className={"text-lg  " + className} {...props}>
			{children}
		</span>
	)
}
