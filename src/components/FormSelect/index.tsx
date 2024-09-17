/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from 'react-select'


export default function FormSelect(props: any) {
    const {className, validation, invalid = "false", dirty = "false", onTurnDirty, ...selectProps} = props;

    function handleBlur() {
        onTurnDirty(props.name);
    }

    return(
        <div data-dirty={dirty} data-invalid={invalid} className={className}>
            <Select onBlur={handleBlur} {...selectProps}  />
        </div>
    );
}