import { Button, Row, Col } from 'ant-design-vue';
import { defineComponent, watch } from 'vue';
import useHome from './home';
import { StyledTitle } from './style';

/**
 * @displayName Page Sample Home
 */

export default defineComponent({

  setup() {
    const home = useHome();

    watch(home.listRequestSampleAbout, () => console.log('watch listRequestSampleAbout'));
    watch(home.state, () => console.log('watch change state'));

    return () => (
      <>
      <StyledTitle>StyledComponents</StyledTitle>
      <Row type="flex" justify="space-around">
        <Col span="4"><Button type="primary" onClick={() => home.listRequestSampleAbout()}>listRequestSampleAbout</Button></Col>
        <Col span="4"><Button type="primary" onClick={() => home.editRequestSampleAbout()}>editRequestSampleAbout</Button></Col>
        <Col span="4"><Button type="primary" onClick={() => home.createRequestSampleAbout()}>createRequestSampleAbout</Button></Col>
        <Col span="4"><Button type="primary" onClick={() => home.removeRequestSampleAbout()}>removeRequestSampleAbout</Button></Col>
      </Row>
      </>
    );
  },
});
