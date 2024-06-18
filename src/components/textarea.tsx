import InputClassName from '@/lib/inputclassname'



export default function Textarea(
	{ className="", ...props }:
	{ className?: string; [key: string]: any; }
) {
	return (
		<textarea className={ InputClassName + " " + className } {...props}>
		</textarea>
	)
}
