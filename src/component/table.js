import React, { useEffect, useState } from 'react';
import Button from './button';

function Table({ row, screen2 }) {
    row = row ? row : [{ header1: 'value1', header2: 'value2', header3: 'vlaue3' }];
    const [search, setSearch] = useState({});
    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [sortColumn, setSortColumn] = useState(-1)



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
            {screen2 && <span  onClick={refresh}><Button text={'Refresh'} /></span>}
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th  >
                            <input className='h-10' value={search?.search1} onChange={(e) => setSearch({ ...search, search1: e.target.value })} />
                        </th>
                        <th  >
                            <input className='h-10' onChange={(e) => setSearch({ ...search, search2: e.target.value })} />
                        </th>
                        <th  >
                            <input className='h-10' onChange={(e) => setSearch({ ...search, search3: e.target.value })} />
                        </th>
                        <th  >
                            <input className='h-10' onChange={(e) => setSearch({ ...search, search4: e.target.value })} />
                        </th>

                        {screen2 && <>
                            <th scope="col">
                                <input className='h-10' onChange={(e) => setSearch({ ...search, search5: e.target.value })} />
                            </th>
                            <th scope="col" >
                                <input className='h-10' onChange={(e) => setSearch({ ...search, search6: e.target.value })} />
                            </th>
                        </>}
                    </tr>
                    <tr>
                        <th scope="col" className="py-3 px-6 " onClick={() => setSortColumn(0)}>
                            col 1
                        </th>
                        <th scope="col" className="py-3 px-6 " onClick={() => setSortColumn(1)}>
                            col 2
                        </th>
                        <th scope="col" className="py-3 px-6 " onClick={() => setSortColumn(2)}>
                            col 3
                        </th>
                        <th scope="col" className="py-3 px-6 " onClick={() => setSortColumn(3)}>
                            col 4
                        </th>
                        {screen2 && <>
                            <th scope="col" className="py-3 px-6 " onClick={() => setSortColumn(4)}>
                                col 5
                            </th>
                            <th scope="col" className="py-3 px-6 " onClick={() => setSortColumn(5)}>
                                col 6
                            </th>
                        </>}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((value, i) => <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        {Object.values(value)?.map((curr) => <td className="py-4 px-6">{curr}</td>)}
                    </tr>)}

                </tbody>
            </table>
        </div>

    )
}

export default Table