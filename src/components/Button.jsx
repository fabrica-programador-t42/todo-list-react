export const Button = ({ text, typeButton = 'button', classCss, handleClick = () => ({}) }) => {
    return (
        <button
            type={typeButton}
            className={classCss}
            onClick={() => handleClick()}
        >
            {text}
        </button>
    )
}