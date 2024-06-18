export default function Form(
	{ children, className="", ...props }:
	{ children: React.ReactNode; className?: string; }

) {
	return (
		<form className={ "flex flex-col justify-center items-center align-center gap-y-3 p-3 m-3 bg-zinc-300 shadow-inner shadow-md rounded border-2 border-zinc-400" + " " + className } {...props}>
			{ children }
		</form>
	)
}
