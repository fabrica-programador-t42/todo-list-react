import './TodoList.css'
import {Text,Field, Button} from './../components'
import locales from './../locales/pt-br.json'
export const TodoList = () => {
    return (
        <>
            <Text value={locales.pageTitle} classCss={'title'}/>
            <div>
                <Field label={'Titulo Tarefa'} classCss={'text-field'}/>
                <Button text={'OK'} classCss={'button-ok'}/>
            </div>
        </>
    )
}