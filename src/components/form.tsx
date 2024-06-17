import Button from '@/components/button'


interface FieldType {
	label: string;
	type: 'text' | 'email' | 'textarea' | 'password';
	name: string;
	required?: boolean;
	placeholder?: string;
}

interface FormProps {
	title: string;
	fields: FieldType[];
	onSubmit: (date: Record<string, string>) => void;
}

export default function Form(
	{ title, fields, onSubmit }: FormProps
) {
	return (
		<form className="p-3 m-3 bg-zinc-300 shadow-inner shadow-md rounded border-2 border-zinc-400 flex flex-col justify-center items-center align-center gap-y-3">
			<p className="flex flex-row justify-center items-center align-center text-lg">{title}</p>

			{fields && fields.map(
				({ label, name, type, placeholder="", required=true }
					: FieldType) =>
					<div key={title+name} className="w-full flex flex-row justify-center items-center align-center gap-x-3 p-2">
						<label htmlFor={title+name}>{label}</label>
						{type === "textarea" ?
							<textarea id={title+name} placeholder={placeholder} required={required} name={name} className="w-full resize-y rounded p-2 outline-none focus:outline-zinc-400 hover:outline-zinc-200" />
							:
							<input id={title+name} placeholder={placeholder} required={required} name={name} type={type} className="w-full rounded p-2 outline-none focus:outline-zinc-400 hover:outline-zinc-200" />
						}
					</div>
				)
			}

			<Button type="submit">Submit</Button>
		</form>
	)
}
