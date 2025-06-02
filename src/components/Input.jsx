import { Description, Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'

export default function InputExample(props) {

    
    
    return (
        <div className="w-full max-w-md px-4">
            <Field>
                <Label className="text-sm/6 font-medium text-white">{props.name}</Label>

                {props.desc && (<Description className="text-sm/6 text-white/50">{props.desc}</Description>)}
                <Input
                name={props.name}
                onChange={props.inputFunc}
                    placeholder={props.placeholder}
                    className={clsx(
                        'mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
                        'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
                    )}
                />
                <Label className="text-sm/6 font-medium text-white">{props.name}</Label>
            </Field>
        </div>
    )
}