import tableCellClassName from '@/lib/tablecellclassname'


export function Th(
	{ children, className="", ...props }:
	{ children: React.ReactNode | string; className?: string;
		[key: string]: any;
	}
) {
	return (
		<th className={ tableCellClassName + " " + className } {...props}>
			{ children }
		</th>
	)
}

export function Td(
	{ children, className="", ...props }:
	{ children: React.ReactNode | string; className?: string;
		[key: string]: any;
	}
) {
	return (
		<td className={ tableCellClassName + " " + className } {...props}>
			{ children }
		</td>
	)
}

export function Tr(
	{ children, className="", ...props }:
	{ children: React.ReactNode | string; className?: string;
		[key: string]: any;
	}
) {
	const tableRowClassName = "divide-x divide-zinc-300"
	return (
		<tr className={ tableRowClassName + " " + className } {...props}>
			{ children }
		</tr>
	)
}

