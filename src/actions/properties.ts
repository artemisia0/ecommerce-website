'use server'


export async function fetchProperties() {
	return {
		'color': ['green', 'brown', 'red', 'blue', 'yellow', 'black', 'white'],
		'size': ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
		'some_prop': ['fetched1', 'fetched2', 'fetched3'],
		'____': ['____'],
	}
}
