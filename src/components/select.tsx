import InputClassName from '@/lib/inputclassname'


export default function Select(
	{ children, className="", ...props }:
	{ children: React.ReactNode; className?: string; }
) {
	return (
		<select className={ InputClassName + " " + className } {...props}>
			{ children }
		</select>
	)
}
