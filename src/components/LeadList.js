import React from 'react'
import LeadCard from './LeadCard';

export default function LeadList({leads, refreshLeads}) {
    return (
        <div>
            <h3>Active Leads</h3>
                {leads && leads.filter(lead => !lead.archived)
                    .map(lead => <LeadCard key={lead._id} lead={lead} refreshLeads={refreshLeads}/>)}
                
                <h3 className="mt-5">Archived Leads</h3>
                {/* {links && links.filter(link => link.archived).map(link => <LinkCard key={link._id} link={link} refreshLinks={refreshLinks}/>)} */}
        </div>
    )
}