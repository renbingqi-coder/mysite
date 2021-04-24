<template>
  <div class="message-Container" ref="messageContainer">
    <MessageArea
      :isListLoading="isLoading"
       title="留言板"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :total="data.total"
      @submit="handlesSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import { getMessages, postMessage } from "@/api/message.js";
import fetchData from "@/mixin/fetchData.js";
import mainScroll from "@/mixin/mainScroll.js";
export default {
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  computed: {
    isMore() {
      return this.data.rows.length < this.data.total;
    },
  },
  mixins: [fetchData({ total: 0, rows: [] }),mainScroll("messageContainer")],
  components: {
    MessageArea,
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom) {
      if (this.isLoading || !dom) {
        // 目前正在加载更多
        return;
      }
      let height = Math.abs(
        dom.scrollHeight - dom.scrollTop - dom.clientHeight
      );
      if (height <= 100) {
        this.fetchMore();
      }
    },
    async fetchData() {
      let data = await getMessages(this.page, this.limit);
      return data;
    },
    async handlesSubmit(formdata, back) {
      let data = await postMessage(formdata);
      this.data.rows.unshift(data);
      this.data.total++;
      back("留言成功");
    },
    async fetchMore() {
      if (this.isMore) {
        this.isLoading = true;
        this.page++;
        let data = await this.fetchData();
        this.data.total = data.total;
        this.data.rows = this.data.rows.concat(data.rows);
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.message-Container {
  position: relative;
  box-sizing: border-box;
  height: 100%;
  .message-container {
    padding: 30px 150px;
  }
  overflow-y: auto;
  scroll-behavior: smooth;
}
</style>