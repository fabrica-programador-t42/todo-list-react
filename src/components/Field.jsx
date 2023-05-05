export const Field = ({type = 'text', label, value, classCss}) => {
    return <input type={type} placeholder={label} value={value} className={classCss}/>
}