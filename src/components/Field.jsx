export const Field = ({type = 'text', label, value, classCss, handleOnChange = () => {}}) => {
    return <input type={type} placeholder={label} value={value} className={classCss} onChange={(event) => handleOnChange(event)}/>
}