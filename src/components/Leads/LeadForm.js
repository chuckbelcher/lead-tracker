import React, { useState } from 'react'

export default function LinkForm({refreshLinks}) {

    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')

    const resetForm = () => {
        setName('')
        setUrl('')
        setDescription('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {name, url, description}
        try {
            await fetch('/.netlify/functions/createLink', {
                method: 'POST',
                body: JSON.stringify(body)
            });
            resetForm();
            refreshLinks();
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="card">
            <div className="card-header">Add Link</div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            className="form-control" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">URL</label>
                        <input 
                            type="text" 
                            name="url" 
                            className="form-control" 
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input 
                            type="text" 
                            name="description" 
                            className="form-control" 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                    <button type="submit" onClick={resetForm} className="btn btn-danger mt-2 mx-2">Reset</button>
                </form>
            </div>
        </div>
    )
}