import React, { useEffect, useState } from 'react';
import Button from './button';

function Table({ row, screen2 }) {
    //setting a deafult value to avoid error if no props passed
    row = row ? row : [{ header1: 'value1', header2: 'value2', header3: 'vlaue3' }];

    let initialEnd = !screen2 ? 5 : row.length

    const [search, setSearch] = useState({});
    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [sortColumn, setSortColumn] = useState(-1)
    const [globalSerach, setGlobalSerach] = useState('');
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(initialEnd);

    useEffect(() => {
        let result = row?.filter((value) => (search?.search1 !== '' && value[Object.keys(value)[0]].indexOf(search?.search1) > -1)
            || (search?.search2 !== '' && value[Object.keys(value)[1]].indexOf(search?.search2) > -1)
            || (search?.search3 !== '' && value[Object.keys(value)[2]].indexOf(search?.search3) > -1)
            || (search?.search4 !== '' && value[Object.keys(value)[3]].indexOf(search?.search4) > -1)
            || (screen2 && (search?.search5 !== '' && value[Object.keys(value)[4]].indexOf(search?.search5) > -1))
            || (screen2 && (search?.search6 !== '' && value[Object.keys(value)[5]].indexOf(search?.search6) > -1))

        )
        result.length ? setFiltered(result) : setFiltered(row)
        result.length ? setData(result) : setData(row)
        console.log(result, search)
    }, [search])

    useEffect(() => {
        let result = row?.filter((value) => (value[Object.keys(value)[0]]?.indexOf(globalSerach) > -1)
            || (value[Object.keys(value)[1]]?.indexOf(globalSerach) > -1)
            || (value[Object.keys(value)[2]]?.indexOf(globalSerach) > -1)
            || (value[Object.keys(value)[3]]?.indexOf(globalSerach) > -1)
            || (value[Object.keys(value)[4]]?.indexOf(globalSerach) > -1)
            || (value[Object.keys(value)[5]]?.indexOf(globalSerach) > -1)
        )
        !globalSerach == '' ? setFiltered(result) : setFiltered(row)
        !globalSerach == '' ? setData(result) : setData(row)
        console.log(result, globalSerach)
    }, [globalSerach])

    const sortData = () => {
        let sorted = filtered.length ? filtered?.sort(compare) : row?.sort(compare)
        console.log(sorted, "sort")
        sorted ? setData(sorted) : setData(row)

        function compare(a, b) {
            if (a[Object.keys(a)[sortColumn]] < b[Object.keys(b)[sortColumn]]) {
                return -1;
            }
            if (a[Object.keys(a)[sortColumn]] > b[Object.keys(b)[sortColumn]]) {
                return 1;
            }
            return 0;
        }

    }

    useEffect(() => {
        screen2 && sortData()
    }, [sortColumn])

    const refresh = () => {
        setData(row)
    }







    return (

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-20 w-full md:w-2/3 mx-auto">
            {screen2 && <span className='my-2' onClick={refresh}><Button text={'Refresh'} /></span>}
            {!screen2 && <input placeholder='Global search...' className='h-10 my-4' value={globalSerach} onChange={(e) => setGlobalSerach(e.target.value)} />}

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th  >
                            <input placeholder='col search...' className='h-10' value={search?.search1} onChange={(e) => setSearch({ ...search, search1: e.target.value })} />
                        </th>
                        <th  >
                            <input placeholder='col search...' className='h-10' onChange={(e) => setSearch({ ...search, search2: e.target.value })} />
                        </th>
                        <th  >
                            <input placeholder='col search...' className='h-10' onChange={(e) => setSearch({ ...search, search3: e.target.value })} />
                        </th>
                        <th  >
                            <input placeholder='col search...' className='h-10' onChange={(e) => setSearch({ ...search, search4: e.target.value })} />
                        </th>

                        {screen2 && <>
                            <th scope="col">
                                <input placeholder='col search...' className='h-10' onChange={(e) => setSearch({ ...search, search5: e.target.value })} />
                            </th>
                            <th scope="col" >
                                <input placeholder='col search...' className='h-10' onChange={(e) => setSearch({ ...search, search6: e.target.value })} />
                            </th>
                        </>}
                    </tr>
                    <tr>
                        <th scope="col" className="py-3 px-6" onClick={() => setSortColumn(0)}>
                            col 1 {<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                            }
                        </th>
                        <th scope="col" className="py-3 px-6 " onClick={() => setSortColumn(1)}>
                            col 2{<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                            }
                        </th>
                        <th scope="col" className="py-3 px-6 " onClick={() => setSortColumn(2)}>
                            col 3{<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                            }
                        </th>
                        <th scope="col" className="py-3 px-6 " onClick={() => setSortColumn(3)}>
                            col 4{<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                            }
                        </th>
                        {screen2 && <>
                            <th scope="col" className="py-3 px-6 " onClick={() => setSortColumn(4)}>
                                col 5{<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                            }
                            </th>
                            <th scope="col" className="py-3 px-6 " onClick={() => setSortColumn(5)}>
                                col 6{<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                            }
                            </th>
                        </>}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((value, i) => i >= start && i < end ? <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        {Object.values(value)?.map((curr) => <td className="py-4 px-6">{curr}</td>)}
                    </tr> : null)}

                </tbody>
            </table>
            {!screen2 && <span className='text-white w-full'>{`Page ${end / 5} of ${Math.floor(data.length / 5) + 1}`}</span>}
            {!screen2 && <div className='flex justify-between w-full'>
                {start > 0 ? <spaan onClick={() => { setEnd(end - 5); setStart(start - 5) }}><Button text='Prev' /></spaan> : <span></span>}
                {end < data.length ? <span onClick={() => { setEnd(end + 5); setStart(start + 5) }}> <Button text='Next' /></span> : <span></span>}
            </div>}
        </div>

    )
}

export default Table