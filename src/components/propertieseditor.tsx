'use client'

import { useReducer, useState } from 'react'
import { Th, Td, Tr } from '@/components/tablecell'
import SelectOnWhiteBg from '@/components/selectonwhitebg'
import SmallButton from '@/components/smallbutton'


type PropertiesState = Record<string, string>  // color: green; for example

interface PropertiesAction {
	action: 'add' | 'remove';
	key: string;  // key is a property key ('color' or 'size' for example)
	value: string;  // value is a property value ('green' or 'XS' for example)
}

function propertiesStateReducer(
	state: PropertiesState,
	action: PropertiesAction
) {
	if (action.action === 'remove') {
		const { [action.key]: removed, ...newState } = state
		return newState
	} else if (action.action === 'add') {
		return {
			...state,
			[action.key]: action.value,
		}
	} 
	return state
}

function notUsedPropertyKeys(propertyKeys: string[], state: PropertiesState) {
	return propertyKeys.filter(item => state[item] === undefined)
}

export default function PropertiesEditor(
	{ properties }:
	{ properties: Record<string, string[]>; }
) {
	const propertyKeys = Object.keys(properties)
	const [state, dispatch] = useReducer(propertiesStateReducer, {})
	const [addKeySelectorValue, setAddKeySelectorValue] = useState<string>(notUsedPropertyKeys(propertyKeys, state).length >= 1 ? notUsedPropertyKeys(propertyKeys, state)[0] : "____")
	const [addValueSelectorValue, setAddValueSelectorValue] = useState<string>(properties[addKeySelectorValue].length >= 1 ? properties[addKeySelectorValue][0] : "____")

	const onAddKeySelectorChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
	{
		event.preventDefault()
		setAddKeySelectorValue(event.target.value)
	}

	const onAddValueSelectorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		event.preventDefault()
		setAddValueSelectorValue(event.target.value)
	}

	return (
		<table className="text-center divide-y divide-zinc-300 bg-white rounded-lg max-w-96 w-full text-justify">
			<thead>
				<Tr>
					<Th className="font-normal">Property</Th>
					<Th className="font-normal">Value</Th>
					<Th className="font-normal">Action</Th>
				</Tr>
			</thead>
			<tbody className="divide-y divide-zinc-300">
				{Object.keys(state).length >= 1 && Object.keys(state).map(
					(key) => {
						return (
							<Tr key={key}>
								<Td className="capitalize">{key}</Td>
								<Td>
									<SelectOnWhiteBg defaultValue={state[key]} name={key}>
										{properties[key].map(
											(value) => {
												return (
													<option key={value} value={value}>
														{value}
													</option>
												)
											}
										)}
									</SelectOnWhiteBg>
								</Td>
								<Td>
									<SmallButton onClick={
									(event: React.MouseEvent<HTMLButtonElement>) => {
										event.preventDefault();
										dispatch({ action: 'remove', key, value: addValueSelectorValue });
									}}>&#x2715;</SmallButton></Td>
							</Tr>
						)
					}
				)}
				{addKeySelectorValue && notUsedPropertyKeys(propertyKeys, state).length > 1 &&
					<Tr>
						<Td>
							<SelectOnWhiteBg value={addKeySelectorValue} onChange={onAddKeySelectorChange}>
								{notUsedPropertyKeys(propertyKeys, state).map(
									(key) => {
										return (
											<option key={key} value={key}>
												{key}
											</option>
										)
									}
								)}
							</SelectOnWhiteBg>
						</Td>
						<Td>
							<SelectOnWhiteBg value={addValueSelectorValue} onChange={onAddValueSelectorChange}>
								{properties[addKeySelectorValue] ? properties[addKeySelectorValue].map(
									(value) => {
										return (
											<option key={value} value={value}>
												{value}
											</option>
										)
									}
								) :
									<option value={"____"}> ____ </option>
								}
							</SelectOnWhiteBg>
						</Td>
						<Td>
							<SmallButton onClick={(event: React.MouseEvent<HTMLButtonElement>) => { event.preventDefault(); if (addKeySelectorValue === '____') { return; } dispatch({ action: 'add', key: addKeySelectorValue, value: addValueSelectorValue }); setAddKeySelectorValue("____"); }}>&#65291;</SmallButton>
						</Td>
					</Tr>
				}
			</tbody>
		</table>
	)
}

