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

export default function About() {
  const state = reactive<AboutProps>({
    list: [],
    about: null,
    visibleModal: false,
    aboutObject: 'create',
    modalInfo: { title: '', button: null },

  });

  const listRequestSampleAbout = () => 'listRequestSampleAbout';
  const removeRequestSampleAbout = () => 'removeRequestSampleAbout';
  const editRequestSampleAbout = () => 'editRequestSampleAbout';
  const createRequestSampleAbout = () => 'createRequestSampleAbout';

  return {
    state,
    listRequestSampleAbout,
    removeRequestSampleAbout,
    editRequestSampleAbout,
    createRequestSampleAbout,
  };
}
