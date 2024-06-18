import InputClassName from '@/lib/inputclassname'


export default function Input(
	{ className="", ...props }:
	{ className?: string; }
) {
	return (
		<input className={ InputClassName + " " + className } {...props} />
	)
}
