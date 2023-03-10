import Wrapper, {
  DataManager,
  Header,
  Navigation,
  Table,
  Head,
} from '@mylinks/dashboard';
import { MdTextFields } from 'react-icons/md';
import { HiLink } from 'react-icons/hi';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { BiTable } from 'react-icons/bi';

import logo from './assets/logo.png';

const List = () => {
  return (
    <>
      <Header logo={logo} />
      <Navigation />
      <Table>
        <Head name='id'>ID</Head>
        <Head name='title' editable={true}>
          <MdTextFields />
          제목
        </Head>
        <Head name='url' editable={true}>
          <HiLink />
          URL
        </Head>
        <Head name='created_at'>
          <BsFillCalendarDateFill />
          추가한 날짜
        </Head>
        <Head name='table_id'>
          <BiTable />
          소속
        </Head>
        <Head name='description' editable={true}>
          <MdTextFields />
          설명
        </Head>
      </Table>
    </>
  );
};

export default List;
