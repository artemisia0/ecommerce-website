import InputClassName from '@/lib/inputclassname'


export default function Input(
	{ className="", ...props }:
	{ className?: string; [key: string]: any; }
) {
	return (
		<input className={ InputClassName + " " + className } {...props} />
	)
}
