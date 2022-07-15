export default interface InputProps {
    name?: string,
    title?: string,
    placeholder?: string,
    errorType?: string,
    onChange: (value: string) => void,
    onValidChange: (name: string | undefined, value: string) => void
}
