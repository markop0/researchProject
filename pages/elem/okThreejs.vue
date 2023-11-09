<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <el-button type="primary">button</el-button> -->
    <div id="threejs-example"></div>
  </div>
</template>

<script>
import * as THREE from "three";
import * as dat from "dat.gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

var scene = new THREE.Scene();
var geometry, mesh, moonMesh;
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    // this.one();
    this.init();
  },
  methods: {
    one() {
      console.log("one+++++++");

      /**
       * 创建网格模型
       */
      // var geometry = new THREE.SphereGeometry(60, 40, 40); //创建一个球体几何对象
      var geometry1 = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
      var material = new THREE.MeshLambertMaterial({
        color: 0x0000ff,
      }); //材质对象Material
      var mesh = new THREE.Mesh(geometry1, material); //网格模型对象Mesh
      // scene.add(mesh); //网格模型添加到场景中

      /* var geometry = new THREE.CircleBufferGeometry(100, 32);
      var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
      var cubeMesh = new THREE.Mesh(geometry, material);
      scene.add(cubeMesh); */

      const geometry = new THREE.BoxGeometry(100, 100, 100);
      const material1 = new THREE.MeshBasicMaterial({ color: 0x19658b });
      const cubeMesh = new THREE.Mesh(geometry, material1);
      scene.add(cubeMesh);

      /**
       * 光源设置
       */
      //点光源
      var point = new THREE.PointLight(0xffffff);
      point.position.set(400, 200, 300); //点光源位置
      scene.add(point); //点光源添加到场景中
      //环境光
      var ambient = new THREE.AmbientLight(0x444444);
      scene.add(ambient);
      // console.log(scene)
      // console.log(scene.children)
      /**
       * 相机设置
       */
      var width = window.innerWidth; //窗口宽度
      var height = window.innerHeight; //窗口高度
      var k = width / height; //窗口宽高比
      var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
      //创建相机对象
      var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
      camera.position.set(200, 300, 200); //设置相机位置
      camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
      /**
       * 创建渲染器对象
       */
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height); //设置渲染区域尺寸
      renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
      document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
      //执行渲染操作   指定场景、相机作为参数

      function render() {
        renderer.render(scene, camera); //执行渲染操作
      }
      render();
      var controls = new OrbitControls(camera, renderer.domElement); //创建控件对象
      controls.addEventListener("change", render); //监听鼠标、键盘事件
      console.log("all done");

      /**
       * Debug
       */
      // const gui = new dat.GUI();
      const gui = new dat.GUI({
        // closed: true,
        width: 400,
      });
      // gui.hide() // press H to show

      gui
        .add(cubeMesh.position, "y")
        .min(-3)
        .max(3)
        .step(0.01)
        .name("cubeMesh Y"); // 别名
      gui.add(cubeMesh.position, "x").min(-3).max(3).step(0.01);
      gui.add(cubeMesh.position, "z").min(-3).max(3).step(0.01);

      gui.add(cubeMesh, "visible"); // boolean
      gui.add(cubeMesh.material, "wireframe"); // boolean

      const debugObj = {
        color: 0x607d8b,
        spin() {
          gsap.to(cubeMesh.rotation, {
            duration: 1,
            y: cubeMesh.rotation.y + Math.PI * 2,
          });
        },
      };

      gui.addColor(debugObj, "color").onChange((e) => {
        cubeMesh.material.color.set(e);
      });

      gui.add(debugObj, "spin"); // function
    },
    async init() {
      // 设置相机
      var camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      // 构造渲染器，这里使用WebGL渲染器
      var renderer = new THREE.WebGLRenderer();
      // 设置背景色
      renderer.setClearColor(new THREE.Color(0x272822));
      renderer.setSize(window.innerWidth, window.innerHeight);

      // 向场景中添加坐标轴
      var axes = new THREE.AxesHelper(20);
      scene.add(axes);

      /*   // 新建一个平面plane
      var planeGeometry = new THREE.PlaneGeometry(60, 20); // 长60，宽20的平面
      var planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
      var plane = new THREE.Mesh(planeGeometry, planeMaterial);

      // 确定平面坐标
      plane.rotation.x = -0.5 * Math.PI; // 沿x轴旋转90度
      plane.position.x = 15; // 在x，y，z三个方向上的偏移
      plane.position.y = 0;
      plane.position.z = 0;

      // 向场景中添加平面
      scene.add(plane); */

      /* // 创建一个方块cube
      var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
      var cubeMaterial = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true // 显示物体的结构框架
      });
      var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.set(-4, 3, 0); // 确定方块坐标
      scene.add(cube); */

      // 创建一个球体sphere
      var sphereGeometry = new THREE.SphereGeometry(10, 20, 20);
      var sphereMaterial = new THREE.MeshBasicMaterial({
        color: "#e63e31",
        wireframe: true,
      });
      var son = new THREE.Mesh(sphereGeometry, sphereMaterial);
      son.position.set(0, 0, 0);
      scene.add(son);

      // 创建一个球体sphere
      var sg = new THREE.SphereGeometry(6, 10, 10);
      var sphereMaterial = new THREE.MeshBasicMaterial({
        color: "#b68904",
        wireframe: true,
      });
      var jupiter = new THREE.Mesh(sphereGeometry, sphereMaterial);
      jupiter.position.set(0, 0, 60);
      scene.add(jupiter);

      // 创建earth
      var sphereGeometry = new THREE.SphereGeometry(6, 10, 10);
      var sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x4783ff,
        wireframe: true,
      });
      var earth = new THREE.Mesh(sphereGeometry, sphereMaterial);
      earth.position.set(90, 0, 0);
      scene.add(earth);

      var moon = new THREE.SphereGeometry(2, 10, 10);
      var moonMaterial = new THREE.MeshBasicMaterial({
        color: "#767676", //材质颜色
        // wireframe: true, //将几何图形渲染为线框
        specular: "#ffff00", //球体网格模型的高光颜色
        shininess: 60, //光照强度的系数
      }); //材质对象Material

      moonMesh = new THREE.Mesh(moon, moonMaterial);
      moonMesh.position.set(106, 0, 0);

      scene.add(moonMesh);

      var moonCircle = new THREE.LineBasicMaterial({
        color: "#fff4b5",
      });
      const R = 16; //圆弧半径
      const N = 60; //分段数量
      let points = [];
      // 批量生成圆弧上的顶点数据
      for (var i = 0; i < N; i++) {
        var angle = ((2 * Math.PI) / N) * i;
        var lx = R * Math.sin(angle);
        var ly = R * Math.cos(angle);
        points.push(new THREE.Vector3(0 + lx, 0, ly));
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      // const mLine = new THREE.Line(geometry, moonCircle);//开放线段
      const mLine = new THREE.LineLoop(geometry, moonCircle); //闭合线段
      scene.add(mLine);

      /*  // 直线
      const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
      const points = [];
      points.push(new THREE.Vector3(-100, 0, 100));
      points.push(new THREE.Vector3(0, 0, 100));
      // points.push(new THREE.Vector3(100, 0, 0));
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, material);
      scene.add(line); */

      /* // 圆形
      const geometry = new THREE.CircleGeometry(100, 100);
      const material = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        wireframe: true
      });
      const circle = new THREE.Mesh(geometry, material);
      scene.add(circle); */

      /*  // 直线
      const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
      const points = [];
      points.push(new THREE.Vector3(-100, 0, 0));
      points.push(new THREE.Vector3(0, 100, 0));
      // points.push(new THREE.Vector3(100, 0, 0));
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, material);
      scene.add(line); */

      /*  const geometry = new THREE.BufferGeometry(); // 创建几何体
      // 创建曲线
      const curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-10, -20, -10),
        new THREE.Vector3(-10, 40, -10),
        new THREE.Vector3(10, 40, 10),
        new THREE.Vector3(10, -20, 10)
        // new THREE.Vector3(10, 10, 10)
      );
      const points = curve.getPoints(100); // getPoints 方法从曲线中获取点
      geometry.setFromPoints(points); // 将这系列点赋值给几何体
      const material = new THREE.LineBasicMaterial({ color: 0x3acebc }); // 创建材质
      const line = new THREE.Line(geometry, material);
      scene.add(line); */

      /*  const MAX_POINTS = 500;
      const geometry = new THREE.BufferGeometry(); // 创建几何体
      // 设置几何体的属性
      let positions = new Float32Array(MAX_POINTS * 3); // 一个顶点向量需要3个位置描述
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      // 控制绘制范围
      const drawCount = 2; // 只绘制前两个点
      geometry.setDrawRange(0, drawCount);
      const material = new THREE.LineBasicMaterial({ color: 0xfcc522 }); // 创建材质
      const earthLine = new THREE.Line(geometry, material); // 创建线
      scene.add(earthLine); */

      /*  positions = line.geometry.attributes.position.array;
      let x, y, z, index;
      x = y = z = index = 0;
      for (let i = 0; i < MAX_POINTS; i++) {
        positions[index++] = x;
        positions[index++] = y;
        positions[index++] = z;
        x += (Math.random() - 0.5) * 100;
        y += (Math.random() - 0.5) * 100;
        z += (Math.random() - 0.5) * 100;
        line.geometry.attributes.position.needsUpdate = true; // 需要加在第一次渲染之后
      } */
      // line.geometry.setDrawRange(0, newValue);
      //
      // let opp = await this.addMap();
      // 确定相机位置
      camera.position.set(-200, 300, 200); //设置相机位置
      // camera.position.x = -200;
      // camera.position.y = 400;
      // camera.position.z = 200;
      camera.lookAt(scene.position); // 使用lookAt()函数将相机指向场景的中心

      document
        .getElementById("threejs-example")
        .appendChild(renderer.domElement);
      // renderer.render(scene, camera); // 渲染场景
      /* // 自转
      let Rotation = () => {
        renderer.render(scene, camera); //执行渲染操作
        earth.rotateY(0.01); //每次绕y轴旋转0.01弧度
        // mLine.rotateY(-0.021); //每次绕y轴旋转0.01弧度
      };
      setInterval(Rotation, 20); // */

      const clock = new THREE.Clock();
      // let y = 0;
      // let index = 0;
      let [ox, oy, oz] = [0, 0, 0];
      let [mx, my, mz] = [0, 0, 0];

      const tick = () => {
        const elapsedTime = clock.getElapsedTime();
        // console.log(elapsedTime);
        let z = Math.sin(elapsedTime) * 90;
        let x = Math.cos(elapsedTime) * 90;

        // console.log(x);
        earth.position.set(x, 0, z);
        mLine.position.set(x, 0, z);

        // debugger;
        let op = mLine;
        mLine.rotateX(Math.PI / 180);
        mLine.rotateY(Math.PI / 180);
        mLine.rotateZ(Math.PI / 180);

        // moonMesh.pivot = new THREE.Vector3(x, 0, z); //设置旋转中心点为原点
        moonMesh.rotateZ(Math.PI / 180);
        son.rotateY(0.01); // 设置球体自旋转

        let moonX = Math.cos(elapsedTime) * 90 + Math.sin(elapsedTime) * 16;
        let moonZ = Math.sin(elapsedTime) * 90 + Math.cos(elapsedTime) * 16;
        let moonY = Math.cos(elapsedTime) * 16;
        moonMesh.position.set(moonX, moonY, moonZ);

        const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
        const points = [];
        points.push(new THREE.Vector3(ox || x, 0, oz || z));
        points.push(new THREE.Vector3(x, 0, z));
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const earthLine = new THREE.Line(geometry, material);
        scene.add(earthLine);

        const material1 = new THREE.LineBasicMaterial({ color: 0x0000ff });
        const points1 = [];
        points1.push(new THREE.Vector3(mx || moonX, my || moonY, mz || moonZ));
        points1.push(new THREE.Vector3(moonX, moonY, moonZ));
        const geometry1 = new THREE.BufferGeometry().setFromPoints(points1);
        const moonLine = new THREE.Line(geometry1, material1);
        scene.add(moonLine);

        // console.log(x + "  " + z);
        ox = x;
        oz = z;
        mx = moonX;
        my = moonY;
        mz = moonZ;
        setTimeout(() => {
          scene.remove(earthLine);
          scene.remove(moonLine);
        }, 6000);
        renderer.render(scene, camera);
        requestAnimationFrame(tick);
      };
      tick();

      /* // 创建轨迹线材质
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x00ff00,
        lineWidth: 2
      });

      // 创建轨迹线网格
      const lineMesh = new THREE.Mesh(
        new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
        new THREE.MeshLineSegments(
          new THREE.Vector2(-1, -1),
          new THREE.Vector2(1, 1),
          lineMaterial
        )
      );
      lineMesh.scale.set(0.1, 0.1, 0.1);

      // 将轨迹线添加到场景中
      scene.add(lineMesh);

      // 设置动画控制器
      const animate = () => {
        requestAnimationFrame(animate);
        object.rotation.y += 0.001;
        camera.position.y -= 5;
        lineMesh.scale.y -= 0.01;
      };

      animate(); */

      function render() {
        renderer.render(scene, camera); //执行渲染操作
      }
      render();
      var controls = new OrbitControls(camera, renderer.domElement); //创建控件对象
      controls.addEventListener("change", render); //监听鼠标、键盘事件
    },
    cc() {},
    addMap(imgUrl) {
      return new Promise((resover, reject) => {
        // 纹理贴图映射到一个矩形平面上
        // var geometry = new THREE.PlaneGeometry(204, 102); //矩形平面
        geometry = new THREE.SphereGeometry(30, 30, 30); //创建一个球体几何对象
        // TextureLoader创建一个纹理加载器对象，可以加载图片作为几何体纹理
        var textureLoader = new THREE.TextureLoader();
        // 执行load方法，加载纹理贴图成功后，返回一个纹理对象Texture
        textureLoader.load(
          "../assets/img/world.topo.bathy.jpg",
          function (texture) {
            // textureLoader.load("../img/earth-bg1.jpg", function (texture) {
            var material = new THREE.MeshLambertMaterial({
              // color: 0x0000ff,
              // 设置颜色纹理贴图：Texture对象作为材质map属性的属性值
              map: texture, //设置颜色贴图属性值
            }); //材质对象Material

            mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
            mesh.position.set(100, 0, 0);
            scene.add(mesh); //网格模型添加到场景中

            //纹理贴图加载成功后，调用渲染函数执行渲染操作
            // render();
            resover(true);
          }
        );
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
