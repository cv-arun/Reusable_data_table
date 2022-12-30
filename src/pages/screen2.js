import React from 'react';
import Header from '../component/header';
import Table from '../component/table';
import data from '../assets/dataSet2'

function Screen2() {
   
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