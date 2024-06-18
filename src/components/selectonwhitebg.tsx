import Select from '@/components/select'


export default function SelectOnWhiteBg(
	{ children, className="", ...props }:
	{ children: React.ReactNode, className?: string;
		[key: string]: any;
	}
) {
	const selectClassName="border-2 border-zinc-300 hover:outline-zinc-200 focus:outline-zinc-300"
	return (
		<Select className={ selectClassName + " " + className } { ...props }>
			{ children }
		</Select>
	)
}

