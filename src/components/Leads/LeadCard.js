import React from 'react'

export default function LeadCard({lead, refreshLeads}) {

    const archiveLead = async () => {
        lead.archived = true;
        try {
            await fetch('/.netlify/functions/updateLead', {
                method: 'PUT',
                body: JSON.stringify(lead)
            });
            refreshLeads();
        } catch (err) {
            console.error(err);
        }
    }

    const deleteLead = async () => {
        try {
            const id = lead._id
            await fetch('/.netlify/functions/deleteLead', {
                method: 'DELETE',
                body: JSON.stringify({id})
            });
            refreshLeads();
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="card my-3">
            <div className="card-header">
                {lead.name}
            </div>
            <div className="card-body">
                <p>Source: {lead.source}</p>
                <p>Description: {lead.description}</p>
                <h5>Location</h5>
                <p>
                    {lead.city}
                    {lead.phoneNumber}
                </p>
                <p>Comment: {lead.comment ? lead.comment: 'No comments'}</p>

            </div>
            <div className="card-footer">
                <button className="btn btn-primary mx-2" onClick={archiveLead}>Archive</button>
                <button className="btn btn-danger" onClick={deleteLead}>Delete</button>
            </div>
        </div>
    )
}