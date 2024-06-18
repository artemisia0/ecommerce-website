export default function SmallButton(
	{ children, className="", ...props }:
	{ children: React.ReactNode | string; className?: string; }
) {
	const smallButtonClassName = "inline-flex justify-center items-center align-center min-h-8 min-w-8 h-8 w-8 bg-white border-2 border-zinc-300 rounded-lg p-2 m-2 active:font-light outline-none hover:outline-zinc-200 active:outline-zinc-300"
	return (
		<button className={ smallButtonClassName + " " + className } {...props}>
			{ children }
		</button>
	)
}

