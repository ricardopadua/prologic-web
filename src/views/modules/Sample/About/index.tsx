import { defineComponent, watch } from 'vue';
import useAbout from './about';
import { StyledTitle } from './style';

/**
 * @displayName Page About
 */

export default defineComponent({

  setup() {
    const about = useAbout();

    watch(about.listRequestSampleAbout, () => console.log('watch change listRequestSampleAbout'));
    watch(about.state, () => console.log('watch change state'));

    return () => (
      <>
      <StyledTitle>StyledComponents</StyledTitle>
      </>
    );
  },
});
