import React from 'react'
import Table from '../component/table';
import Header from '../component/header';
import data from '../assets/dataSet1'
function Screen1() {
   
    return (
        <>
            <div className='bg-[#111827] min-h-screen'>
                <Header active1 />
                <Table row={data}/>
            </div>
        </>
    )
}

export default Screen1