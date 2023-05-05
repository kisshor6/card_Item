import React, { useContext, useRef, useState } from 'react'
import Cardcontext from '../Context/CardContext';
import CardItem from './CardItem'

const Card = (props) => {
    const a = useContext(Cardcontext);
    const { UpdateCard, allDettails } = a;

    const ref = useRef(null);
    const refClose = useRef(null);
    const [edit, setEdited] = useState({ id: "", uimage: "", utitle: "", udescription: "" });

    const Update = (items) => {
        ref.current.click();
        setEdited({ id: items.id, uimage: items.image, utitle: items.title, udescription: items.description });
    }
    const Modify = () => {
        const CollectData = {
            id: edit.id,
            image: edit.uimage,
            title: edit.utitle,
            description: edit.udescription
        }
        UpdateCard(CollectData);
        refClose.current.click();
    }
    const onChange = (e) => {
        setEdited({ ...edit, [e.target.name]: e.target.value });
    }

    return (
        <>
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">Update data from here</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Image </label>
                                    <input type="text" value={edit.uimage} name="uimage" onChange={onChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input type="text" value={edit.utitle} name="utitle" onChange={onChange} className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea type="text" value={edit.udescription} name="udescription" onChange={onChange} rows="4" cols="50" className="form-control" />

                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" onClick={Modify} className="btn btn-success">Update Card</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    {
                        allDettails.map(
                            details => (
                                <CardItem
                                    EditNote={Update}
                                    key={details._id}
                                    id={details._id}
                                    image={details.image}
                                    title={details.title}
                                    description={details.description}
                                />
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Card
