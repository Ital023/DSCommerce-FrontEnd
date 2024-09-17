/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function FormTextArea(props: any) {
    const {validation, invalid = "false", dirty = "false", onTurnDirty, ...textAreaProps} = props;

    function handleBlur() {
        onTurnDirty(props.name);
    }

    return(
        <textarea onBlur={handleBlur} {...textAreaProps} data-dirty={dirty} data-invalid={invalid} />
    );
}