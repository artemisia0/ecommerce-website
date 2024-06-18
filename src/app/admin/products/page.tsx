import Form from '@/components/form'
import Input from '@/components/input'
import Textarea from '@/components/textarea'
import Button from '@/components/button'
import Select from '@/components/select'
import PropertiesEditor from '@/components/propertieseditor'
import { fetchProperties } from '@/actions/properties'


// Page for performing CRUD+L operations on products (for admin only)
export default async function CRUDProductsPage() {

	const properties = await fetchProperties()

	return (
		<main>
			<Form>
				<Input placeholder="Name" name="name" />
				<Textarea placeholder="Description" name="description" />
				<PropertiesEditor properties={properties}></PropertiesEditor>
				<Button type="submit">Create Product</Button>
			</Form>
		</main>
	)
}
