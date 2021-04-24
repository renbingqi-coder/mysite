<template>
  <nav class="menu-container">
    <router-link
      v-for="item in items"
      :key="item.link"
      :to="{name:item.link}"
      :exact="item.exact"
      active-class="selected"
      active-exact-class=""
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </router-link>
  </nav>
</template>

<script>
import Icon from '../../Icon'
export default {
  components:{
      Icon
  },
  data() {
    return {
      items: [
        {
          link: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          link: "Blog",
          title: "文章",
          icon: "blog",
          exact: false, //是否精确匹配
        },
        {
          link: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          link: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          link: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
  name: "Menu",
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
  a {
    &.selected {
      background: darken(@words, 3%);
    }
    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
  }
}
</style>