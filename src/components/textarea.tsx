import InputClassName from '@/lib/inputclassname'



export default function Textarea(
	{ className="", ...props }:
	{ className?: string; }
) {
	return (
		<textarea className={ InputClassName + " " + className } {...props}>
		</textarea>
	)
}
