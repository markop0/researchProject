<!-- Please remove this file from your project -->
<template>
  <div
    class="
      relative
      flex
      items-top
      justify-center
      min-h-screen
      bg-gray-100
      sm:items-center sm:pt-0
    "
  >
    <!-- <canvas id="canvas" width="500" height="500"></canvas> -->
    <Fabric />
  </div>
</template>

<script>
import Fabric from "@/pages/elem/fabric";
export default {
  name: "NuxtTutorial",
  components: {
    Fabric,
  },
};
</script>
