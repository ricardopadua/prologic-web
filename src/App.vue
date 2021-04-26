<template>
    <a-config-provider :locale="antdLocales">
      <router-view></router-view>
    </a-config-provider>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    return {};
  },
});
</script>
