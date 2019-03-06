<template>
  <div>
    <continue-watching/>
    <div class="main">
      <recommended/>
      <h1>APPLE</h1>
    </div>
  </div>
</template>

<script>
import ContinueWatching from '../components/ContinueWatching';
import Recommended from '../components/Recommended';

export default {
  name: 'home',
  components: {
    ContinueWatching,
    Recommended,
  },
};
</script>
<style scoped lang="scss">
.main {
  transform: translateY(-6vw);
}
</style>
