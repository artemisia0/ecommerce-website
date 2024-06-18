import InputClassName from '@/lib/inputclassname'


export default function Select(
	{ children, className="", ...props }:
	{ children: React.ReactNode; className?: string;
		[key: string]: any;
	}
) {
	return (
		<select className={ InputClassName + " " + className } {...props}>
			{ children }
		</select>
	)
}
