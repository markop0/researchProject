<template>
  <section class="content">
    <!-- 左侧内容 -->
    <div class="left">
      <!-- <Menu /> -->
    </div>
    <!-- END -->

    <!-- 右侧内容 -->
    <div class="right">
      <Nuxt />
    </div>
    <!-- END -->
  </section>
</template>

<script>
// 建议通过组件的形式,完成左右的菜单和内容
// import Menu from "@/components/menu.vue"; //后面会提供源代码

export default {
  // components: { Menu },
  data() {
    return {};
  },
};
</script>

<style scoped>
/* 左右布局 */
.content {
  display: flex;
  justify-content: space-between;
}
.left {
  height: 100vh;
  width: 20%;
  overflow: scroll;
  background: rgb(236, 236, 236);
}
.right {
  height: 100vh;
  width: 80%;
  overflow: scroll;
}
</style>
