import Form from '@/components/form'
import Input from '@/components/input'
import Textarea from '@/components/textarea'
import Button from '@/components/button'
import Select from '@/components/select'


// Page for performing CRUD+L operations on products (for admin only)
export default function CRUDProductsPage() {
	return (
		<main>
			<Form>
				<Input placeholder="Name" name="name" />
				<Textarea placeholder="Description" name="description" />
				<Select name="select">
					<option value="First value">First value</option>
					<option value="Second value">Second value</option>
					<option value="And so on">And so on.....</option>
				</Select>
				<Button type="submit">Create Product</Button>
			</Form>
	</main>
	)
}
