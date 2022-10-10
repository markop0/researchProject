<template>
  <div class="test">
    <canvas width="200" height="200" id="c" class="canvas"></canvas>
    <!-- <img src="../../static/img/zg1.png" alt="" /> -->
  </div>
</template>

<script>
import { fabric } from "fabric";
let p1 = "https://s3.v.360xkw.com/yzb/photos/1663741133187_23ea7699.jpg";
let p2 = "https://s3.v.360xkw.com/yzb/photos/1663748022955_500e7a1c.png";
let zg = [
  "https://raw.githubusercontent.com/reedbf/researchProject/main/static/img/zg1.png",
  "https://raw.githubusercontent.com/reedbf/researchProject/main/static/img/zg2.png",
  "https://raw.githubusercontent.com/reedbf/researchProject/main/static/img/zg3.png",
  "https://raw.githubusercontent.com/reedbf/researchProject/main/static/img/zg4.png",
  "https://raw.githubusercontent.com/reedbf/researchProject/main/static/img/zg5.png",
  "https://raw.githubusercontent.com/reedbf/researchProject/main/static/img/zg6.png",
];
let pt = {
  // stroke: "#409eff", // 边框颜色
  // strokeWidth: 2, // 边框粗细px
  strokeDashArray: [20, 5, 14], // 边框虚线规则：填充20px 空5px 填充14px 空20px 填充5px ……
  borderColor: "#409eff", // 选中时，边框颜色
  borderScaleFactor: 2, // 选中时，边的粗细
  borderDashArray: [10, 5], // 选中时，虚线边的规则
  // shadow: "10px 20px 6px rgba(10, 20, 30, 0.4)", // 投影：右偏移10px，下偏移20px，羽化6px，投影颜色及透明度

  transparentCorners: false, // 选中时，控制点填充状态。true 空心；false 实心
  cornerColor: "#333333", // 选中时，控制点颜色
  cornerStyle: "circle", // 选中时，控制点属性。默认rect 矩形；circle 圆形
  cornerSize: 10, // 选中时，控制点大小
  cornerStrokeColor: "pink", // 选中时，控制点边框的颜色
  cornerDashArray: [10, 5], // 选中时，虚线角的规则
  selectionBackgroundColor: "#9b9b9b78", // 选中时，选框背景色
  // padding: 40, // 选中时，选择框离元素的内边距：40px
  borderOpacityWhenMoving: 0.6, // 当对象活动和移动时，对象控制边界的不透明度};
};
export default {
  name: "ResearchProjectFabric",

  data() {
    return {};
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      console.log("init*******");
      const canvas = new fabric.Canvas("c"); // 这里传入的是canvas的id

      // 创建一个长方形
      /* const rect = new fabric.Rect({
        ...{
          top: 30,
          left: 30,
          width: 100,
          height: 60,
          fill: "#45d4a1", // 填充色
          angle: 30, // 旋转30度
        },
        ...pt,
      });
      rect.setControlsVisibility({
        mt: false,
        mb: false,
        mr: false,
        ml: false,

        // bl: true,
        // br: true,
        // tl: true,
        // tr: true,
        // mtr: true,
      });
      canvas.add(rect); */
      /* const circle = new fabric.Circle({
        top: 100,
        left: 100,
        radius: 50, // 半径：50px
        // backgroundColor: "green", // 背景色
        fill: "orange", // 填充色
      });
      canvas.setBackgroundImage(p1, (img) => {
        // 设置背景图
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
          scaleX: canvas.width / img.width, // 计算出图片要拉伸的宽度
          scaleY: canvas.height / img.height, // 计算出图片要拉伸的高度
        });
      });
       const img0 = new fabric.Image.fromURL(p2, (oImg) => {
        oImg.scale(2).set("flipX", true); //缩小图像并翻转
        // oImg.left(10);
        canvas.add(oImg);
      });
      
      canvas.add(circle); */

      const img = new fabric.Image.fromURL(zg[0], (oImg) => {
        // oImg.scale(0.9); //缩小图像
        oImg.set({ left: 100, top: 100 });
        canvas.add(oImg);
      });

      /* fabric.Image.fromURL(zg[1], (oImg) => {
        canvas.add(oImg);
      });
      fabric.Image.fromURL(zg[2], (oImg) => {
        canvas.add(oImg);
      });
      fabric.Image.fromURL(zg[3], (oImg) => {
        canvas.add(oImg);
      }); */
      console.log("canvas stringify ", JSON.stringify(canvas));
      console.log("canvas toJSON", canvas.toJSON());
      console.log("canvas toObject", canvas.toObject());
      fabric.Object.prototype.set(pt);
    },
  },
};
</script>

<style  scoped>
canvas {
  border: 1px dashed red;
  box-sizing: border-box;
}
.test {
  position: relative;
}
.test::before {
  content: "";
  display: block;
  height: 200px;
  left: 100px;
  top: 0;
  border-left: 1px dashed red;
  position: absolute;
}
.test::after {
  content: "";
  display: block;
  width: 200px;
  top: 100px;
  left: 0;
  border-top: 1px dashed red;
  position: absolute;
}
</style>
