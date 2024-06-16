'use client'

import Button from '@/components/button'


export default function HomePage() {

	return (
		<main>
			<p>
				Hello from next.js
			</p>
			<Button>Delete product</Button>
			<Button>Create product</Button>
			<Button>Update product</Button>
			<Button>Read product</Button>
			<button className="bg-gradient-to-b from-fuchsia-300 to-purple-300 hover:border-2 hover:border-zinc-300 hover:font-light rounded m-16 w-[200px] h-[40px]">
				Delete product
			</button>
		</main>
	)
}

