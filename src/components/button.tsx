export default function Button(
	{ children, className="", ...props }:
	{ children: React.ReactNode | string, className?: string }
) {
	return (
		<button className={"hover:bg-black hover:text-white text-black bg-white border-2 border-black active:font-light m-2 min-w-[200px] min-h-[40px] shadow-sm font-medium" + " " + className} {...props}>
			{children}
		</button>
	)
}

