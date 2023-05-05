import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Cardcontext from '../Context/CardContext';

const Form = () => {
    const c = useContext(Cardcontext);
    const { saveData } = c;

    const [data, setData] = useState({ image: "", title: "", desc: "" });
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const collectData = (e) => {
        e.preventDefault()

        const expenseData = {
            image: data.image,
            title: data.title,
            description: data.desc
        }

        saveData(expenseData);
        setData({ image: "", title: "", desc: "" })
        navigate("/");

    }

    return (
        <div className='container'>
            <h1 className='mt-5 text-center'>Add - The Category Item From Here</h1>
            <form className='my-4' onSubmit={collectData}>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input type="text" name='image' value={data.image} onChange={changeHandler} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" name='title' value={data.title} onChange={changeHandler} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" name='desc' value={data.desc} onChange={changeHandler} rows="3"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form
