import React from 'react'

function Table({ row }) {
    row = row ? row : [{ header1: 'value1', header2: 'value2', header3: 'vlaue3' }]
    return (

        <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-20 w-full md:w-2/3 mx-auto">
           <div className={`flex justify-between`}> {Object.keys(row[0])?.map((curr, i) => <input className='w-full mx-5'/>)}</div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {Object.keys(row[0])?.map((curr, i) => <th scope="col" class="py-3 px-6 ">
                            {curr}
                        </th>)}
                    </tr>
                </thead>
                <tbody>
                    {row?.map((value, i) => <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        {Object.values(value)?.map((curr) => <td class="py-4 px-6">{curr}</td>)}
                    </tr>)}

                </tbody>
            </table>
        </div>

    )
}

export default Table