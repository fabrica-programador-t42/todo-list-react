import lapis from './../assets/lapis.png'
import excluir from './../assets/excluir.png'

export const ListItem = ({title, tags = [], handleEdit = () => {}, handleDelete = () => {}}) => {
    return (
        <div className='list-item'>
            <div>
                <span className='list-item-title'>{title}</span>
            </div>
            <div>
                {
                    tags.map(tag => <span className={`list-item-tag list-item-tag-${tag.type}`}>{tag.label}</span>)
                }
            </div>
            <div>
                <button className='list-item-action-button'>
                    <img alt="" className='list-item-button-icon-lapis' src={lapis} onClick={() => handleEdit()} />
                </button>
                <button className='list-item-action-button'>
                    <img alt="" className='list-item-button-icon-lixeira' src={excluir} onClick={() => handleDelete()}/>
                </button>
            </div>
        </div>
    )
}
