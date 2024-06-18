export default function Button(
	{ children, className="", ...props }:
	{ children: React.ReactNode | string, className?: string }
) {
	return (
		<button className={"rounded-lg shadow-inner shadow-sm hover:bg-zinc-800 hover:text-white text-black bg-white border-2 border-zinc-500 active:font-light m-2 min-w-[200px] min-h-[40px]" + " " + className} {...props}>
			{children}
		</button>
	)
}

