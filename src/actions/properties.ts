'use server'

import defaultProperties from '@/lib/defaultproperties'


export async function fetchProperties() {
	const realData = {
		'color': ['green', 'brown', 'red', 'blue', 'yellow', 'black', 'white'],
		'size': ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
		'some_prop': ['fetched1', 'fetched2', 'fetched3'],
	}

	return {
		...realData,
		...defaultProperties,
	}
}

