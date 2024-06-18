import Form from '@/components/form'
import Input from '@/components/input'
import Textarea from '@/components/textarea'
import Button from '@/components/button'
import Select from '@/components/select'
import { Th, Td, Tr } from '@/components/tablecell'
import SelectOnWhiteBg from '@/components/selectonwhitebg'
import SmallButton from '@/components/smallbutton'


// Page for performing CRUD+L operations on products (for admin only)
export default function CRUDProductsPage() {
	return (
		<main>
			<Form>
				<Input placeholder="Name" name="name" />
				<Textarea placeholder="Description" name="description" />
				<table className="divide-y divide-zinc-300 bg-white rounded-lg max-w-96 w-full text-justify">
					<thead>
						<Tr>
							<Th className="font-normal">Property</Th>
							<Th className="font-normal">Value</Th>
						</Tr>
					</thead>
					<tbody className="divide-y divide-zinc-300">
						<Tr>
							<Td>
								Color
								<SmallButton>&#x2715;</SmallButton>
							</Td>
							<Td>
								<SelectOnWhiteBg>
									<option value="green">Green</option>
									<option value="red">Red</option>
									<option value="blue">Blue</option>
									<option value="yellow">Yellow</option>
								</SelectOnWhiteBg>
							</Td>
						</Tr>
						<Tr>
							<Td>
								Size
								<SmallButton>&#x2715;</SmallButton>
							</Td>
							<Td>
								<SelectOnWhiteBg>
									<option value="s">S</option>
									<option value="m">M</option>
									<option value="l">L</option>
									<option value="xl">XL</option>
								</SelectOnWhiteBg>
							</Td>
						</Tr>
						<Tr>
							<Td>
								<SmallButton>&#65291;</SmallButton>
							</Td>
						</Tr>
					</tbody>
				</table>
				<Button type="submit">Create Product</Button>
			</Form>
	</main>
	)
}
