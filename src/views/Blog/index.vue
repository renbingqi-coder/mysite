<template>
    <Layout>
      <template #main>
            <BlogList />
      </template>
      <template #right>
            <BlogCategory />
      </template>
    </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogCategory from "./BlogCategory"
import BlogList from "./BlogList";
export default {
  components: {
    Layout,
    BlogCategory,
    BlogList,
  },
  created() {
  },
};
</script>

<style>
</style>