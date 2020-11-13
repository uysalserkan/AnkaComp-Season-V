// Global Variables
var gl;
var sLetter_position = [];
var uLetter_position = [];
var letterProgram;

var rotate_slider;

var degree;
var degreeLoc;

var isRotate = false;

function initGL(canvas) {
  try {
    gl = canvas.getContext("webgl"); // WebGL kütüphanesini yüklüyoruz.
    gl.viewportWidth = canvas.width;
    gl.viewportHeight = canvas.height;
  } catch (e) {
    console.log(e);
  }
  if (!gl) {
    // WebGL yüklenmezse bu koşul çalışacak.
    alert("Tarayıcınızdan kaynaklanan hata sonucunda WEBGL yüklenemedi.");
    return;
  }
}

function isPressed() {
  isRotate = !isRotate;
  console.log("Pressed, isRotate status: ", isRotate);
}

window.onload = function main() {
  const canvas = document.querySelector("#projectCanvas"); // Main HTML'den canvasa ulaşıyoruz.

  initGL(canvas);

  gl.clearColor(0.0, 0.0, 0.45, 1); // set clear color to darkblue, fully opaque
  letterProgram = initShaders(gl, "vertex-shader", "fragment-shader");
  // Program initialize edilir vertex ve fragment ile.

  gl.useProgram(letterProgram);

  var stopButton = document.getElementById("durdur_bnt");
  stopButton.addEventListener("click", isPressed);

  rotate_slider = document.getElementById("rotate_slider");

  // Gl değişkenine atanır veya kullandırılır.

  // letterProgram.vertexPositionAttribute = gl.getAttribLocation(
  //   letterProgram,
  //   "vPosition"
  // );
  // gl.enableVertexAttribArray(letterProgram.vertexPositionAttribute);

  // letterProgram.vertexColorAttribute = gl.getAttribLocation(
  //   letterProgram,
  //   "aVertexColor"
  // );
  // gl.enableVertexAttribArray(letterProgram.vertexColorAttribute);

  sLetter_position = [
    vec2(
      -0.08, // S-U-1-x1
      0.98 // S-U-1-y1
    ),
    vec2(
      -0.98, // S-U-1-x2
      0.98 // S-U-1-y2
    ),
    vec2(
      -0.08, // S-U-1-x3
      0.88 // S-U-1-y3
    ),
    // 2. Kısım
    vec2(
      -0.98, // S-U-2-x1
      0.98 // S-U-2-y1
    ),
    vec2(
      -0.08, // S-U-2-x2
      0.88 // S-U-2-y2
    ),
    vec2(
      -0.98, // S-U-2-x3
      0.88 // S-U-2-y3
    ),

    // ^Üst Yatay Dikdörtgen Tamamlandı.

    vec2(
      -0.98, // S-SOL-1-x1
      0.88 // S-SOL-1-y1
    ),
    vec2(
      -0.98, // S-SOL-1-x2
      0.28 // S-SOL-1-y2
    ),
    vec2(
      -0.78, // S-SOL-1-x3
      0.28 // S-SOL-1-y3
    ),
    // 2. kısım
    vec2(
      -0.78, // S-SOL-2-x1
      0.28 // S-SOL-2-y1
    ),
    vec2(
      -0.98, // S-SOL-2-x2
      0.88 // S-SOL-2-y2
    ),
    vec2(
      -0.78, // S-SOL-2-x3
      0.88 // S-SOL-2-y3
    ),

    // ^Ust Sol dikey dikdörtgen oluşturuldu.

    vec2(
      -0.98, // S-O-1-x1
      0.28 // S-O-1-y1
    ),
    vec2(
      -0.98, // S-O-1-x2
      0.18 // S-O-1-y2
    ),
    vec2(
      -0.08, // S-O-1-x3
      0.18 // S-O-1-y3
    ),
    // 2. kısım
    vec2(
      -0.08, // S-O-2-x1
      0.18 // S-O-2-y1
    ),
    vec2(
      -0.08, // S-O-2-x2
      0.28 // S-O-2-y2
    ),
    vec2(
      -0.98, // S-O-2-x3
      0.28 // S-O-2-y3
    ),

    // ^Orta yatay dikdörtgen oluşturuldu.

    vec2(
      -0.08, //S-SAG-1-x1
      0.18
    ), //S-SAG-1-y1
    vec2(
      -0.28, // S-SAG-1-x2
      0.18 // S-SAG-1-y2
    ),
    vec2(
      -0.08, // S-SAG-1-x3
      -0.48 // S-SAG-1-y3
    ),
    // 2. kısım
    vec2(
      -0.08, // S-SAG-2-x1
      -0.48 // S-SAG-2-y1
    ),
    vec2(
      -0.28, // S-SAG-2-x2
      -0.48 // S-SAG-2-y2
    ),
    vec2(
      -0.28, // S-SAG-2-x3
      0.18 // S-SAG-2-y3
    ),

    // ^Sağ Alt diket dikdörtgen oluşturuldu.

    vec2(
      -0.08, // S-A-1-x1
      -0.48 // S-A-1-y1
    ),
    vec2(
      -0.08, // S-A-1-x2
      -0.58 // S-A-1-y2
    ),
    vec2(
      -0.98, // S-A-1-x3
      -0.58 // S-A-1-y3
    ),

    // 2. kısım

    vec2(
      -0.98, // S-A-1-x1
      -0.58 // S-A-1-y1
    ),
    vec2(
      -0.98, // S-A-1-x1
      -0.48 // S-A-1-y2
    ),
    vec2(
      -0.08, // S-A-1-x1
      -0.48 // S-A-1-y3
    ),

    // ^Alt Yatay Dikdörtgen tamamlandı.

    // L Koordinatları

    vec2(0.1, 0.58),
    vec2(0.3, 0.58),
    vec2(0.1, -0.58),
    // 2. kısım
    vec2(0.1, -0.58),
    vec2(0.3, -0.58),
    vec2(0.3, 0.58),

    // ^L Harfinin dikey dikdörtgeni tamamlandı.

    vec2(0.3, -0.58),
    vec2(0.6, -0.58),
    vec2(0.6, -0.38),

    // 2. Kısım

    vec2(0.6, -0.38),
    vec2(0.3, -0.38),
    vec2(0.3, -0.58),
  ];

  // uLetter_position = [vec2(1, 1), vec2(0, 0), vec2(1, -1),];

  var bufferId = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
  gl.bufferData(gl.ARRAY_BUFFER, flatten(sLetter_position), gl.STATIC_DRAW);

  // Eksenler buffer'a atanır, işlendikten sonra buradan çekilir.

  // Associate out shader variables with our data buffer
  var vPosition = gl.getAttribLocation(letterProgram, "vPosition");
  gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(vPosition);

  //deişti
  // colorBuffer = gl.createBuffer();
  // gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);

  // myColor = [
  //   1.0,
  //   0.0,
  //   0.0,
  //   1.0,
  //   0.0,
  //   1.0,
  //   0.0,
  //   1.0,
  //   0.0,
  //   1.0,
  //   0.0,
  //   1.0,
  //   0.0,
  //   0.0,
  //   1.0,
  //   1.0,
  // ];
  // var vColor = gl.getAttribLocation(letterProgram, "aVertexColor");
  // gl.vertexAttribPointer(vColor, 3, gl.FLOAT, false, 0, 0);
  // gl.enableVertexAttribArray(vColor);
  // gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(myColor), gl.STATIC_DRAW);

  // gl.drawArrays(gl.TRIANGLES, 0, sLetter_position.length);

  // var secondBuffer = gl.createBuffer();
  // gl.bindBuffer(gl.ARRAY_BUFFER, secondBuffer);
  // gl.bufferData(gl.ARRAY_BUFFER, flatten(uLetter_position), gl.STATIC_DRAW);

  // var ULetter = gl.getAttribLocation(program, "ULetter");
  // gl.vertexAttribPointer(ULetter, 2, gl.FLOAT, false, 0, 0);
  // gl.enableVertexAttribArray(ULetter);
  // gl.drawArrays(gl.TRIANGLES, 0, uLetter_position.length);

  degreeLoc = gl.getUniformLocation(letterProgram, "theta");

  degree = 0;

  gl.uniform1f(degreeLoc, degree);

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  requestAnimationFrame(render);
};

function render() {
  gl.clear(gl.COLOR_BUFFER_BIT); // clear the color buffer with specified clear color

  degree +=
    isRotate == true
      ? (rotate_slider.value - rotate_slider.min) /
        (rotate_slider.max - rotate_slider.min)
      : 0;
  gl.uniform1f(degreeLoc, degree);

  gl.drawArrays(
    gl.TRIANGLES,
    0,
    sLetter_position.length + uLetter_position.length
  );
  requestAnimationFrame(render);
}
