<template>
  <div class="about-container" v-loading="loading">
    <a href="@/assets/jianli.pdf"></a>
    <iframe src="https://www.500d.me/cvresume/0712967978/" frameborder="0"></iframe>
    <Empty v-if="!data && !loading"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Empty from "@/components/Empty";
export default {
  components: {
    Empty,
  },
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
  computed: {
    ...mapState("about", ["loading", "data"]),
  },
};
</script>

<style>
.about-container {
  position: relative;
  height: 100%;
  width: 100%;
}
iframe {
  height: 100%;
  width: 100%;
}
</style>