import React from 'react'
import Table from '../component/table';
import Header from '../component/header';
function Screen1() {
    const data = [
        { name: 'arun', place: 'calicut', email: 'cvarun@gmail.com', state: 'kerala', country: 'india' },
        { name: 'arun2', place: 'calicut', email: 'cvarun@gmail.com2', state: 'kerala', country: 'india' },
        { name: 'arun3', place: 'calicut', email: 'cvarun@gmail.com3', state: 'kerala', country: 'india' },
        { name: 'arun4', place: 'calicut', email: 'cvarun@gmail.com4', state: 'kerala', country: 'india' },
        { name: 'arun5', place: 'calicut', email: 'cvarun@gmail.com5', state: 'kerala', country: 'india' },
        { name: 'arun6', place: 'calicut', email: 'cvarun@gmail.com6', state: 'kerala', country: 'india' },
        { name: 'arun7', place: 'calicut', email: 'cvarun@gmail.com7', state: 'kerala', country: 'india' },
    ]
    return (
        <>
            <div className='bg-[#111827] min-h-screen'>
                <Header  />
                <Table row={data}/>
            </div>
        </>
    )
}

export default Screen1