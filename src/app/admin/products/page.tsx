import Form from '@/components/form'


// Page for performing CRUD+L operations on products (for admin only)
export default function CRUDProductsPage() {

	const onSubmit = (formData: Record<string, string>) => {
		console.log(formData)
		for (key of Object.keys(formData)) {
			console.log(key + " = " + formData[key])
		}
	}

	const fields = [
		{
			label: "Name",
			type: "text",
			name: "name",
		},
		{
			label: "Description",
			type: "textarea",
			name: "description",
		},
		{
			label: "Size",
			type: "text",
			name: "size",
		},
		{
			label: "Color",
			type: "text",
			name: "color",
		},
		{
			label: "Sex",
			type: "text",
			name: "sex",
		},
	]

	return (
		<main>
			<Form title="Create Product" fields={fields} onSubmit={onSubmit} />
		</main>
	)
}
