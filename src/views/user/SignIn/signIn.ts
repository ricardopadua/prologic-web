import { reactive, toRaw } from 'vue';
import { useForm } from '@ant-design-vue/use';

export default function signIn() {
  const modelRef = reactive({
    username: undefined,
    password: undefined,
  });
  const rulesRef = reactive({
    username: [
      {
        required: true,
        message: 'Please input username',
      },
    ],
    password: [
      {
        required: true,
        message: 'Please input password',
      },
    ],
  });
  const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef);
  const onSubmit = () => {
    validate()
      .then(() => {
        console.log('rrr  ', toRaw(modelRef));
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  // const listRequestSampleAbout = () => console.log('listRequestSampleAbout');
  const listRequestSampleAbout = () => 'listRequestSampleAbout';

  return {
    modelRef,
    rulesRef,
    onSubmit,
    resetFields,
    validate,
    validateInfos,
    listRequestSampleAbout,
    labelCol: { span: 4 },
    wrapperCol: { span: 24 },
  };
}
