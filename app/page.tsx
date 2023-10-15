'use client'
import Button from './components/actions/button';
import Dropdown from './components/actions/dropdown';
import Modal from './components/actions/modal';
import Swap from './components/actions/swap';
import CheckBox from './components/form/check-box';
import Input from './components/form/input';
import Radio from './components/form/radio';
import Select from './components/form/select';
import TextArea from './components/form/text-area';
import Toggle from './components/form/toggle';
import Indicator from './components/layout/indicator';
import Toast from './components/layout/toast';
import Breadcrumbs from './components/navigation/breadcrumbs';
import Link from './components/navigation/link';
import Pagination from './components/navigation/pagination';
// import H1 from '../components/h1';

export default function Home() {
  return (
    <main >
      <div >
        ทดสอบ
        {/* <H1 size="5xl" color="success"/> */}
        <Input />
        <TextArea />
        <CheckBox />
        <Radio />
        <Select />
        <Toggle />
        <Pagination />
        <Breadcrumbs />
        <Link />
        <Indicator />
        <Toast />
        <Button/>
        <Dropdown />
        <Modal />
        <Swap />
      </div>
    </main>
  )
}
