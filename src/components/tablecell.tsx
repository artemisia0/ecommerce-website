import tableCellClassName from '@/lib/tablecellclassname'


export function Th(
	{ children, className="", ...props }:
	{ children: React.ReactNode | string; className?: string; }
) {
	return (
		<th className={ tableCellClassName + " " + className } {...props}>
			{ children }
		</th>
	)
}

export function Td(
	{ children, className="", ...props }:
	{ children: React.ReactNode | string; className?: string; }
) {
	return (
		<td className={ tableCellClassName + " " + className } {...props}>
			{ children }
		</td>
	)
}

export function Tr(
	{ children, className="", ...props }:
	{ children: React.ReactNode | string; className?: string; }
) {
	const tableRowClassName = "divide-x divide-zinc-300"
	return (
		<tr className={ tableRowClassName + " " + className } {...props}>
			{ children }
		</tr>
	)
}

