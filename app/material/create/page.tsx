'use client'
import Button from '@/app/components/actions/button'
import CheckBox from '@/app/components/form/check-box'
import Date from '@/app/components/form/date'
import Input from '@/app/components/form/input'
import Select from '@/app/components/form/select'
import TextArea from '@/app/components/form/text-area'
// import Pagination from '@/app/components/navigation/pagination'
import React, { useEffect, useState } from 'react'
const lists = [
    {
        order: 0,
        date_buy: "2022-10-13",
        quantity: 10,
        price_per_unit: "1",
        total_price: "100",
        place_buy: "MISO",
        own_buy: "TOn",
        paid: true,
        note: ""
    },
    {
        order: 1,
        date_buy: "2022-10-13",
        quantity: 10,
        price_per_unit: "1",
        total_price: "100",
        place_buy: "MISO",
        own_buy: "TOn",
        paid: false,
        note: ""
    },
]
const listdSizes = [
    {
        name: 'S',
        value: 'SMAL',
    },
    {
        name: 'M',
        value: 'MIDDEL',
    },
    {
        name: 'L',
        value: 'LARGTH',
    },
    {
        name: '22 mm',
        value: '22 mm',
    }
]

const listdSelect = [
    {
        name: 'กระดุม',
        value: 'FABRIC',
    },
    {
        name: 'กุ๊น',
        value: 'RIBBIN',
    }
]

interface IState {
    name: string,
    size: string,
    type: string,
    note: string,
    list: IListFabric[]
}

interface IListFabric {
    order: number
    date_buy: string
    quantity: number
    price_per_unit: string
    total_price: string
    place_buy: string
    own_buy: string
    paid: boolean
    note: string
}

export default function Page() {
    const [fabric, setFabric] = useState<IState>({
        name: "ผ้า",
        size: "MILLIMETER",
        type: "FABRIC",
        note: "what",
        list: lists
    })

    const onSetData = (name: string, value: string) => {
        setFabric({
            ...fabric,
            [name]: value
        })
    }

    const addArr = () => {
        setFabric({
            ...fabric,
            list: [...fabric.list, {
                order: fabric.list.length + 1,
                date_buy: "",
                quantity: 0,
                // unit: "ton",
                price_per_unit: "",
                total_price: "",
                place_buy: "",
                own_buy: "",
                paid: false,
                note: ""
            }]
        })
    }

    const setDatainArray = (index: number, name: string, value: string | number | boolean) => {
        const newArr = fabric.list.map((item, i) => {
            if (i === index) {
                return {
                    ...item,
                    [name]: value
                }

            } else {
                return item
            }
        })
        setFabric({
            ...fabric,
            list: [...newArr]
        })
    }

    const deleteFabric = (id: number) => {
        setFabric({
            ...fabric,
            list: fabric.list.filter(a =>
                a.order !== id
            )
        })
    }

    const saveData = () => {
        console.log('fabric', fabric);
    }

    return (
        <div className='flex flex-col m-4'>
            <div className='flex justify-end'>
                <div className="grid grid-cols-2 gap-4">
                    <Button className=''>ยกเลิก</Button>
                    <Button className="btn-success" onClick={saveData}>บันทึก</Button>
                </div>

            </div>
            <div className='flex flex-col'>
                <h1 className="text-3xl text-center text-orange-700 font-bold m-4">วัสดุอุปกรณ์</h1>
                <div className="flex justify-around ">
                    <div className="from grid grid-cols-2 gap-4 basis-1/2">
                        <p className="text-base text-center">ชื่อวัสดุอุปกรณ์</p>
                        <Input name="name" className="input-sm" value={fabric.name}
                            onChange={(props: string) => onSetData('name', props)} />
                        <p className="text-base text-center">ขนาด</p>
                        <Select name="size" className="select-sm" lists={listdSizes} value={fabric.size}
                            onChange={(props: string) => onSetData('size', props)} />
                        <p className="text-base text-center">ประเภท</p>
                        <Select name="type" className="select-sm" lists={listdSelect} value={fabric.type}
                            onChange={(props: string) => onSetData('type', props)} />
                        <p className="text-base text-center">โน็ต</p>
                        <TextArea name="note" className="" value={fabric.note}
                            onChange={(props: string) => onSetData('note', props)} />
                    </div>
                    <div className='image basis-1/2 flex justify-center'>
                        <div className='grid content-center'>
                            <div className="box-border h-32 w-32 p-4 border-4 ">
                                รูปภาพ
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-end'>
                <Button className='' onClick={addArr}>เพิ่ม</Button>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-pin-rows">
                    <thead>
                        <tr>
                            <th >ลำดับ</th>
                            <th >วันที่ซื้อ</th>
                            <th>จำนวน</th>
                            <th >ราคาต่อหน่วย</th>
                            <th >ราคารวม</th>
                            <th >สถานที่ซื้อ</th>
                            <th >คนซื้อ</th>
                            <th >จ่ายแล้ว</th>
                            <th >note</th>
                            <th ></th>
                        </tr>
                    </thead>
                    <tbody>
                        {fabric.list.map((list, index) => (<tr key={index} className="hover">
                            <th>{list.order}</th>
                            <td><Date name="date_buy" value={list.date_buy} className='input-sm w-32'
                                onChange={(prop: string) => setDatainArray(index, 'date_buy', prop)} /></td>
                            <td> <Input name="quantity" valueType="number" className="input-sm w-16" value={list.quantity}
                                onChange={(props: string) => setDatainArray(index, 'quantity', props)} /></td>
                            <td><Input name="price_per_unit" valueType="number" className="input-sm w-16" value={list.price_per_unit}
                                onChange={(props: string) => setDatainArray(index, 'price_per_unit', props)} /></td>
                            <td>{Number(list.quantity) * Number(list.price_per_unit)}</td>
                            <td><Input name="place_buy" className="input-sm w-16" value={list.place_buy}
                                onChange={(props: string) => setDatainArray(index, 'place_buy', props)} /></td>
                            <td><Input name="own_buy" className="input-sm w-16" value={list.own_buy}
                                onChange={(props: string) => setDatainArray(index, 'own_buy', props)} /></td>
                            <td><CheckBox checked={list.paid} onChange={(props: boolean) => setDatainArray(index, 'paid', props)} /> </td>
                            <td><Input name="note" className="input-sm w-16" value={list.note}
                                onChange={(props: string) => setDatainArray(index, 'note', props)} /></td>
                            <td><Button className="btn-sm btn-info" onClick={() => deleteFabric(list.order)}> ลบ</Button></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <div className='flex justify-center'>
                    {/* <Pagination /> */}
                </div>
            </div>
            <div>?</div>
        </div>
    )
}
