import {
  Row, Col, Form, Input, Button, Checkbox,
} from 'ant-design-vue';
import { VueNode } from 'ant-design-vue/es/_util/type';
import { SettingOutlined, UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { defineComponent, watch } from 'vue';
import {
  DivStyled, CardStyled, ImgStyled, PStyled, H4Styled,
} from './style';
import useSignIn from './signIn';
import ongLogo from '../../../assets/img/logo.svg';

/**
 * @displayName Page Sample Home
 */

export default defineComponent({
  setup() {
    const signIn = useSignIn();

    watch(signIn.listRequestSampleAbout, () => console.log('watch listRequestSampleAbout'));
    // watch(signIn.state, () => console.log('watch change state'));

    const cardStyledTitle: VueNode = (
      <Row>
        <Col span={4}>
          <ImgStyled width="40" height="40" src={ongLogo}></ImgStyled>
        </Col>
        <Col span={20}>
          <H4Styled>PROLOGIC APP</H4Styled>
        </Col>
      </Row>
    );

    const cardStyledExtra: VueNode = (<SettingOutlined style={{ color: 'rgba(0,0,0,.25)' }} />);
    const usernamePrefixIcon: VueNode = (<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />);
    const passwordPrefixIcon: VueNode = (<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />);

    return () => (
      <>
        <DivStyled>
          <CardStyled bordered={false} title={cardStyledTitle} extra={cardStyledExtra}>
            <Form>
              <Form.Item v-bind={signIn.validateInfos.username} wrapper-col={signIn.wrapperCol} name="username" rules={signIn.rulesRef.username} hasFeedback>
                <Input v-model-value={signIn.modelRef.username} prefix={usernamePrefixIcon} placeholder="username"/>
              </Form.Item>
              <Form.Item v-bind={signIn.validateInfos.password} wrapper-col={signIn.wrapperCol} name="password" rules={signIn.rulesRef.password} hasFeedback>
                <Input v-model-value={signIn.modelRef.password} type="password" prefix={passwordPrefixIcon} placeholder="password"/>
              </Form.Item>
              <Form.Item wrapper-col={signIn.wrapperCol} name="remember">
                <Checkbox>remember me</Checkbox>
              </Form.Item>
              <Form.Item wrapper-col={signIn.wrapperCol}>
                <Button type="primary" block onClick={signIn.onSubmit}>Login</Button>
              </Form.Item>
              <Form.Item wrapper-col={signIn.wrapperCol}>
                <PStyled>Copyright Prologic App © {new Date().getFullYear()}</PStyled>
              </Form.Item>
            </Form>
          </CardStyled>
        </DivStyled>
      </>
    );
  },
});
