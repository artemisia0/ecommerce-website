'use client'

import Form from '@/components/form'
import Input from '@/components/input'
import Textarea from '@/components/textarea'
import Button from '@/components/button'
import Select from '@/components/select'
import PropertiesEditor from '@/components/propertieseditor'
import { fetchProperties } from '@/actions/properties'
import { useEffect, useState } from 'react'
import defaultProperties from '@/lib/defaultproperties'
import ListEditor from '@/components/listeditor'
import { createProduct } from '@/actions/product'


// Page for performing CRUD+L operations on products (for admin only)
export default function CRUDProductsPage() {
	const [properties, setProperties] = useState(defaultProperties)

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formData = new FormData(event.target as HTMLFormElement)

		const propertyKeys = []
		const propertyValues = []
		for (let propertyKey of Object.keys(properties)) {
			if (propertyKey === '____' || propertyKey === '') { continue }
			const propertyValue = formData.get(propertyKey)
			if (propertyValue && propertyValue !== '' && propertyValue !== '____') {
				propertyKeys.push(propertyKey)
				propertyValues.push(formData.get(propertyKey))
			}
		}

		const jsonProduct = {
			name: formData.get('name'),
			description: formData.get('description'),
			propertyKeys,
			propertyValues,
			imageURLs: formData.getAll('image'),
		}

		createProduct(JSON.stringify(jsonProduct))
	}

	useEffect(
		() => {
			fetchProperties().then(res => setProperties(res))
		},
		[]
	)

	return (
		<main>
			<Form onSubmit={onSubmit}>
				<Input placeholder="Name" name="name" />
				<Textarea placeholder="Description" name="description" />
				<PropertiesEditor properties={properties}></PropertiesEditor>
				<ListEditor type="url" name="image" placeholder="Image URL" />
				<Button type="submit">Create Product</Button>
			</Form>
		</main>
	)
}
