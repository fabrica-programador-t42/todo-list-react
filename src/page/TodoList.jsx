import './TodoList.css'
import { Text, Field, Button } from './../components'
import locales from './../locales/pt-br.json'
import lapis from './../assets/lapis.png'
import excluir from './../assets/excluir.png'

export const TodoList = () => {
    return (
        <>
            <Text value={locales.pageTitle} classCss={'title'} />
            <div className='container'>
                <Field label={'Titulo Tarefa'} classCss={'text-field'} />
                <Button text={'OK'} classCss={'button-ok'} />
            </div>

            <div className='container'>
                <div className='list-item'>
                    <div>
                        <span className='list-item-title'>Titulo Da Tarefa</span>
                    </div>
                    <div>
                        <span className='list-item-tag'>Importante</span>
                        <span className='list-item-tag'>Importante</span>
                    </div>
                    <div>
                        <button className='list-item-action-button'>
                            <img className='list-item-button-icon-lapis' src={lapis} />
                        </button>
                        <button className='list-item-action-button'>
                            <img className='list-item-button-icon-lixeira' src={excluir} />
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}