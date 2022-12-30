import React from 'react';
import Header from '../component/header';
import Table from '../component/table';

function Screen2() {
    const data = [
        { name: 'arun', place: 'calicut', email: 'cvarun@gmail.com', state: 'kerala', country: 'india' ,Position:'MERN stack developer' },
        { name: 'arun2', place: 'calicut', email: 'cvarun@gmail.com2', state: 'kerala', country: 'india1',Position:'MERN stack developer'  },
        { name: 'arun3', place: 'calicut', email: 'cvarun@gmail.com3', state: 'kerala', country: 'india2',Position:'MERN stack developer'  },
        { name: 'arun4', place: 'calicut', email: 'cvarun@gmail.com4', state: 'kerala', country: 'india3',Position:'MERN stack developer'  },
        { name: 'arun5', place: 'calicut', email: 'cvarun@gmail.com5', state: 'kerala', country: 'india4',Position:'MERN stack developer'  },
        { name: 'arun6', place: 'calicut', email: 'cvarun@gmail.com6', state: 'kerala', country: 'india5',Position:'MERN stack developer'  },
        { name: 'arun7', place: 'calicut', email: 'cvarun@gmail.com7', state: 'kerala', country: 'india6',Position:'MERN stack developer'  },
    ]
    return (
        <>
           <div className='bg-[#111827] min-h-screen'>
                <Header />
                <Table screen2 row={data} />
            </div>
        </>
    )
}

export default Screen2