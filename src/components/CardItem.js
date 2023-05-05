import React, { useContext } from 'react'
import Cardcontext from '../Context/CardContext'
const CardItem = (props) => {
    const b = useContext(Cardcontext)
    const { DeleteCard } = b;


    const UpdateNote = () => {
        const data = {
            id: props.id,
            image: props.image,
            title: props.title,
            description: props.description
        }
        props.EditNote(data);
    }

    const url = `https://source.unsplash.com/500x500/?${props.image}`;
    return (
        <>
            <div className='col-md-3'>
                <div className="card my-5" style={{ width: "18rem" }}>
                    <img src={url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title.slice(0, 25)}</h5>
                        <p className="card-text"> {props.description.slice(0, 120)}</p>
                        {/* <Link to={"./UpdateCard/" + props.id} className="btn btn-primary" >Edit Card</Link> */}
                        <button className="mx-2 btn btn-danger" onClick={() => DeleteCard(props.id)}>Delete Card </button>
                        <button className="mx-2 btn btn-primary" onClick={UpdateNote}>Edit Card </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardItem
