<template>
  <ul class="contact-container" v-if="data">
    <li>
      <a :href="data.github" target="_blank">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>Rbq</span>
      </a>
    </li>
    <li>
      <a target="_blank" :href="data.blog">
        <div class="icon">
          <Icon type="blog" />
        </div>
        <span>技术博客</span>
      </a>
    </li>
    <li>
      <a :href="`mailto:${data.qq}@qq.com`">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>{{ data.mail }}</span>
      </a>
    </li>
    <li>
      <a
        :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
      >
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>{{ data.qq }}</span>
      </a>
    </li>
    <li>
      <a>
        <div class="icon weixin">
          <Icon type="weixin" />
        </div>
        <span>{{ data.weixin }}</span>
      </a>
      <div class="pop">
        <img :src="data.weixinQrCode" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
  name: "Contact",
  components: { Icon },
  computed: {
    ...mapState("setting", ["loading", "data"]),
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/global.less";
@import "~@/style/var.less";
.contact-container {
  list-style: none;
  padding: 5px 20px;
  margin: 0;
  color: @gray;
  @itemHeight: 30px;
  li {
    height: @itemHeight;
    line-height: 30px;
    margin: 10px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .icon {
    .iconfont {
      font-size: 24px;
    }
    font-size: 26px;
    width: 36px;
    &.weixin {
      .iconfont {
        font-size: 28px;
      }
      font-size: 32px;
      text-indent: -2px;
    }
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    padding: 10px 15px;
    background: #fff;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    img {
      width: 100px;
      height: 100px;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: #fff;
      bottom: -4px;
    }
  }
}
</style>