import { reactive } from 'vue';

interface AboutType {
  id: number;
  createdAt: string;
  alterAt?: string;
  nome: string;
  cid: string;
}

interface AboutProps {
  list: AboutType[];
  about?: AboutType | null;
  visibleModal: boolean;
  aboutObject: 'create' | 'edit' | 'remove' | 'view';
  modalInfo: {
    title: string | undefined;
    button: 'ghost' | 'default' | 'link' | 'dashed' | 'primary' | 'danger' | undefined | null;
  };
}

export default function home() {
  const state = reactive<AboutProps>({
    list: [],
    about: null,
    visibleModal: false,
    aboutObject: 'create',
    modalInfo: { title: '', button: null },

  });

  const listRequestSampleAbout = () => console.log('listRequestSampleAbout');
  const removeRequestSampleAbout = () => console.log('removeRequestSampleAbout');
  const editRequestSampleAbout = () => console.log('editRequestSampleAbout');
  const createRequestSampleAbout = () => console.log('createRequestSampleAbout');

  return {
    state,
    listRequestSampleAbout,
    removeRequestSampleAbout,
    editRequestSampleAbout,
    createRequestSampleAbout,
  };
}
