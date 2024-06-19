import CreateProductForm from '@/components/createproductform'
import PropertiesEditorForm from '@/components/propertieseditorform'
import PropertyValuesEditorForm from '@/components/propertyvalueseditorform'


export default function Page() {
	return (
		<main>
			<CreateProductForm></CreateProductForm>
			<PropertiesEditorForm></PropertiesEditorForm>
			<PropertyValuesEditorForm></PropertyValuesEditorForm>
		</main>
	)
}


