<!-- Please remove this file from your project -->
<template>
  <div
    class="mBox relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <!-- <canvas id="canvas" width="500" height="500"></canvas> -->
    <!-- <Fabric /> -->
    <Threejs />
  </div>
</template>

<script>
import Fabric from "@/pages/elem/fabric";
import Threejs from "@/pages/elem/threejs";
export default {
  name: "NuxtTutorial",
  components: {
    Fabric,
    Threejs,
  },
};
</script>
<style>
blockquote,
body,
button,
dd,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
input,
legend,
li,
ol,
p,
pre,
td,
textarea,
th,
ul {
  margin: 0;
  padding: 0;
}
body,
button,
input,
select,
textarea {
  font: 16px/1.5 tahoma, arial, "Hiragino Sans GB", "b8bf53", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
address,
cite,
dfn,
em,
var {
  font-style: normal;
}
code,
kbd,
pre,
samp {
  font-family: courier new, courier, monospace;
}
small {
  font-size: 12px;
}
ol,
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
sup {
  vertical-align: text-top;
}
sub {
  vertical-align: text-bottom;
}
legend {
  color: #000;
}
fieldset,
img {
  border: 0;
}
button,
input,
select,
textarea {
  font-size: 100%;
}
button {
  border-radius: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
.mBox {
  padding: 20px;
}
</style>
