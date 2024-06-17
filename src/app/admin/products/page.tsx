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
			label: "label",
			type: "text",
			name: "name",
			required: true,
			placeholder: "Hello placeholder",
		},
		{
			label: "label2",
			type: "textarea",
			name: "name2",
			required: true,
			placeholder: "Hello placeholder",
		},
		{
			label: "label4",
			type: "email",
			name: "name4",
			required: true,
			placeholder: "Hello placeholder",
		},
		{
			label: "label5",
			type: "password",
			name: "name5",
			required: true,
			placeholder: "Hello placeholder",
		},
		{
			label: "label6",
			type: "text",
			name: "name6",
		},
	]

	return (
		<main>
			<Form title="Create Product" fields={fields} onSubmit={onSubmit} />
		</main>
	)
}
