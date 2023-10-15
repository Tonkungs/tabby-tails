import React from 'react'
import Button from '../components/actions/button'
import Pagination from '../components/navigation/pagination'

export default function Page() {

    const lists = [
        {
            order: "1",
            name: "Cy Ganderton1",
            created_by: "ton",
            created_date: "2022-10-13",
            updated_by: "ton",
            updated_date: "2022-10-13",
        },
        {
            order: "2",
            name: "Cy Ganderton2",
            created_by: "ton",
            created_date: "2022-10-13",
            updated_by: "ton",
            updated_date: "2022-10-13",
        },
        {
            order: "3",
            name: "Cy Ganderton3",
            created_by: "ton",
            created_date: "2022-10-13",
            updated_by: "ton",
            updated_date: "2022-10-13",
        },
        {
            order: "4",
            name: "Cy Ganderton4",
            created_by: "ton",
            created_date: "2022-10-13",
            updated_by: "ton",
            updated_date: "2022-10-13",
        },
        {
            order: "5",
            name: "Cy Ganderton5",
            created_by: "ton",
            created_date: "2022-10-13",
            updated_by: "ton",
            updated_date: "2022-10-13",
        },
    ]

    return (
        <div className="flex flex-col ">
            <div className='flex justify-end'>
                <Button className='btn-primary '> เพิ่ม</Button>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>ลำดับ</th>
                                <th>ผ้า</th>
                                <th>คนสร้าง</th>
                                <th>เวลาสร้าง</th>
                                <th>คนอัพเดท</th>
                                <th>เวลาอัพเดท</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lists.map((list, index) => {
                                return <tr key={list.name} className="hover">
                                    <th>{list.order}</th>
                                    <td>{list.name}</td>
                                    <td>{list.created_by}</td>
                                    <td>{list.created_date}</td>
                                    <td>{list.updated_by}</td>
                                    <td>{list.updated_date}</td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                    <div className='flex justify-center'>
                        <Pagination />
                    </div>

                </div>
            </div>
            <div>?</div>
        </div>
    )
}
