<template>
  <div>
    <span>111</span>
  </div>
</template>
<script>
import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

var scene = new THREE.Scene();
var geometry, mesh, moonMesh;
export default {
  data() {
    return {};
  },
  mounted() {
    // this.init();
    this.one();
  },
  methods: {
    one() {
      console.log("one+++++++");

      /**
       * 创建网格模型
       */
      // var geometry = new THREE.SphereGeometry(60, 40, 40); //创建一个球体几何对象
      var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
      var material = new THREE.MeshLambertMaterial({
        color: 0x0000ff,
      }); //材质对象Material
      var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
      // scene.add(mesh); //网格模型添加到场景中

      var geometry = new THREE.CircleBufferGeometry(100, 32);
      var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
      var circle = new THREE.Mesh(geometry, material);
      scene.add(circle);

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

      const controls = new OrbitControls(camera, renderer.domElement);

      // controls.update() must be called after any manual changes to the camera's transform
      // camera.position.set(0, 20, 100);
      controls.update();

      renderer.render(scene, camera);
    },
    async init() {
      var t = this;
      console.log("****");

      /**
       * 创建网格模型
       */
      /* p4 不同的几何体 */
      // var geometry = new THREE.BoxGeometry(100, 100, 100);/长方体 参数：长，宽，高
      var son = new THREE.SphereGeometry(20, 20, 20); // 球体 参数：半径  经纬度细分数40,40
      // var geometry = new THREE.CylinderGeometry( 50, 50, 100, 25 );// 圆柱  参数：圆柱面顶部、底部直径50,50   高度100  圆周分段数
      // var geometry = new THREE.OctahedronGeometry(50);// 正八面体
      // var geometry = new THREE.DodecahedronGeometry(50);// 正十二面体
      // var geometry = new THREE.IcosahedronGeometry(50); // 正二十面体
      // var geometry = new THREE.SphereGeometry(60, 40, 40); //创建一个球体几何对象
      // var geometry = new THREE.BoxGeometry(100, 100, 150); //创建一个立方体几何对象Geometry
      /* p5 材质效果 */
      var material = new THREE.MeshLambertMaterial({
        color: "#fd4d3f", //材质颜色
        opacity: 0.7, //透明度设置，0表示完全透明，1表示完全不透明
        transparent: true, //是否开启透明，默认false
        // wireframe: true, //将几何图形渲染为线框
        specular: "#ffff00", //球体网格模型的高光颜色
        shininess: 60, //光照强度的系数
      }); //材质对象Material
      var sonMesh = new THREE.Mesh(son, material); //网格模型对象Mesh
      scene.add(sonMesh); //网格模型添加到场景中

      var moon = new THREE.SphereGeometry(4, 4, 4);
      var moonMaterial = new THREE.MeshLambertMaterial({
        color: "#767676", //材质颜色
        opacity: 0.7, //透明度设置，0表示完全透明，1表示完全不透明
        transparent: true, //是否开启透明，默认false
        // wireframe: true, //将几何图形渲染为线框
        specular: "#ffff00", //球体网格模型的高光颜色
        shininess: 60, //光照强度的系数
      }); //材质对象Material

      moonMesh = new THREE.Mesh(moon, moonMaterial);
      moonMesh.position.set(120, 0, 0);

      /*  let afterimage = new THREE.AfterimagePass();
       moonMesh.addPass(afterimage);
       afterimage.uniforms["damp"].value = 0.88; */

      scene.add(moonMesh);

      /*
      // 直线
      var geometry = new THREE.Geometry();
      geometry.vertices.push(
        new THREE.Vector3(-100, 0, 0),
        new THREE.Vector3(0, 100, 0),
        new THREE.Vector3(100, 0, 0)
      );
      var line = new THREE.Line(geometry, material);
      scene.add(line); */

      /* var geometry = new THREE.Geometry(); //声明一个几何体对象Geometry
      var arc = new THREE.ArcCurve(0, 0, 100, 0, 2 * Math.PI);//参数：0, 0圆弧坐标原点x，y  100：圆弧半径    0, 2 * Math.PI：圆弧起始角度
      var points = arc.getPoints(50); //getPoints是基类Curve的方法，返回一个vector2对象作为元素组成的数组 //分段数50，返回51个顶点
      geometry.setFromPoints(points);// setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
      var material = new THREE.LineBasicMaterial({
        color: 0x000000
      });//材质对象
      var line = new THREE.Line(geometry, material);//线条模型对象
      scene.add(line); */

      /*  var geometry = new THREE.Geometry(); //声明一个几何体对象Geometry
      var R = 100; //圆弧半径
      var N = 50; //分段数量
      // 批量生成圆弧上的顶点数据
      for (var i = 0; i < N; i++) {
        var angle = ((2 * Math.PI) / N) * i;
        var x = R * Math.sin(angle);
        var y = R * Math.cos(angle);
        geometry.vertices.push(new THREE.Vector3(x, 0, y));
      }
      geometry.vertices.push(geometry.vertices[0]); // 插入最后一个点，line渲染模式下，产生闭合效果
      var material = new THREE.LineBasicMaterial({
        color: "#fff4b5",
      }); //材质对象
      var line = new THREE.Line(geometry, material); //线条模型对象
      scene.add(line);

      var mGeometry = new THREE.Geometry(); //声明一个几何体对象Geometry
      var R = 20; //圆弧半径
      var N = 50; //分段数量
      // 批量生成圆弧上的顶点数据
      for (var i = 0; i < N; i++) {
        var angle = ((2 * Math.PI) / N) * i;
        var lx = R * Math.sin(angle);
        var ly = R * Math.cos(angle);
        mGeometry.vertices.push(new THREE.Vector3(100 + lx, 0, ly));
      }
      mGeometry.vertices.push(mGeometry.vertices[0]);
      //材质对象
      var material = new THREE.LineBasicMaterial({
        color: "#fff4b5",
      });
      //线条模型对象
      var mLine = new THREE.Line(mGeometry, material);
      scene.add(mLine);*/

      /**
       * 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
       */
      var AxesHelper = new THREE.AxesHelper(250);
      scene.add(AxesHelper);
      let opp = await this.addMap();
      /**
       * 光源设置
       */
      /*  p6 光照效果 */

      // var point = new THREE.PointLight(0xffffff); //创建点光源
      // point.position.set(400, 200, 300); //点光源位置
      // scene.add(point); //点光源添加到场景中

      // var point2 = new THREE.PointLight(0xffffff);// 点光源2  位置和point关于原点对称
      // point2.position.set(-400, -200, -300); //点光源位置
      // scene.add(point2); //点光源添加到场景中

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1); //平行光 （ 颜色 ： 整数， 强度 ： 浮点 )
      scene.add(directionalLight);

      var ambient = new THREE.AmbientLight(0x444444); //环境光
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

      var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000); //创建相机对象
      camera.position.set(200, 400, 200); //设置相机位置
      camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
      /**
       * 创建渲染器对象
       */
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height); //设置渲染区域尺寸
      renderer.setClearColor("#103349", 1); //设置背景颜色
      document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
      //执行渲染操作   指定场景、相机作为参数
      /* p1 第一个场景 */
      // renderer.render(scene,camera);//执行渲染操作
      /* p2 自旋转动画 */
      let Rotation = () => {
        renderer.render(scene, camera); //执行渲染操作
        mesh.rotateY(0.01); //每次绕y轴旋转0.01弧度
        // mLine.rotateY(-0.021); //每次绕y轴旋转0.01弧度
      };
      setInterval(Rotation, 20); // 渲染函数
      // Clock
      const clock = new THREE.Clock();
      // 公转
      const tick = () => {
        const elapsedTime = clock.getElapsedTime();
        // console.log(elapsedTime);
        let z = Math.sin(elapsedTime) * 100;
        let x = Math.cos(elapsedTime) * 100;
        mesh.position.z = z;
        mesh.position.x = x;
        moonMesh.position.z =
          Math.sin(elapsedTime) * 100 + Math.cos(elapsedTime) * 20;
        moonMesh.position.x =
          Math.cos(elapsedTime) * 100 + Math.sin(elapsedTime) * 20;

        mLine.position.z = z;
        mLine.position.x = x - 100;

        renderer.render(scene, camera);
        requestAnimationFrame(tick);
      };
      // tick();

      /**
       * Debug
       */
      const gui = new DAT.GUI({
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
        color: defaultColor,
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

      /* p3 鼠标控制旋转与缩放*/
      function render() {
        renderer.render(scene, camera); //执行渲染操作
      }
      render();
      // var controls = new THREE.OrbitControls(camera, renderer.domElement); //创建控件对象
      // controls.addEventListener("change", render); //监听鼠标、键盘事件
      console.log("all done");
    },

    addMap() {
      return new Promise((resover, reject) => {
        // 纹理贴图映射到一个矩形平面上
        // var geometry = new THREE.PlaneGeometry(204, 102); //矩形平面
        geometry = new THREE.SphereBufferGeometry(10, 10, 10); //创建一个球体几何对象
        // TextureLoader创建一个纹理加载器对象，可以加载图片作为几何体纹理
        var textureLoader = new THREE.TextureLoader();
        // 执行load方法，加载纹理贴图成功后，返回一个纹理对象Texture
        textureLoader.load(
          "../../static/img/bg/world.topo.bathy.jpg",
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
<style scoped></style>
