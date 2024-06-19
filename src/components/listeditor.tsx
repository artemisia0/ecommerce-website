'use client'

import { useReducer, useState } from 'react'
import Input from '@/components/input'
import SmallButton from '@/components/smallbutton'


type State = string[]

interface ReducerAction {
	type: 'add' | 'remove';
	value: string;
}

function stateReducer(state: State, action: ReducerAction) {
	switch (action.type) {
		case 'add': {
			if (state.indexOf(action.value) > -1 || action.value.length === 0) {
				return state
			}
			const result = JSON.parse(JSON.stringify(state))
			result.push(action.value)
			return result
		} case 'remove': {
			const result = JSON.parse(JSON.stringify(state))
			const index = result.indexOf(action.value)
			if (index > -1) {
				result.splice(index, 1)
			}
			return result
		} default: {
			return state
		}
	}
}

export default function ListEditor(
	{ type="text", name, placeholder="" }:
	{ type?: string; name: string; placeholder?: string; }
) {
	const [state, dispatch] = useReducer(stateReducer, [])
	const [inputValueToAdd, setInputValueToAdd] = useState('')

	const onInputValueToAddChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault()
		setInputValueToAdd(event.target.value)
	}

	const createRow = (inputValue: string) => (
		<div key={inputValue} className="flex w-full justify-center align-center items-center">
			<Input readOnly name={name} placeholder={placeholder} type={type} value={inputValue}></Input>
			<SmallButton onClick={(event: React.MouseEvent<HTMLButtonElement>) => { event.preventDefault(); dispatch({type: 'remove', value: inputValue}); }}>&#x2715;</SmallButton>
		</div>
	)

	return (
		<div className="w-full max-w-96 flex flex-col justify-center items-center align-center">
			{state.map((inputValue: string) => (createRow(inputValue)))}
			<div className="flex w-full justify-center align-center items-center">
				<Input value={inputValueToAdd} onChange={onInputValueToAddChange} placeholder={placeholder} type={type}></Input>
				<SmallButton onClick={(event: React.MouseEvent<HTMLButtonElement>) => { event.preventDefault(); dispatch({type: 'add', value: inputValueToAdd}); setInputValueToAdd(""); }}>&#65291;</SmallButton>
			</div>
		</div>	
	)
}

