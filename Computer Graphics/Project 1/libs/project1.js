// Global Variables
var gl;
var sLetter_position = [];
var letterProgram;

// HTML'den gelen Slider değerleri için oluşturulan variableler.
var rotate_slider;
var repositionSlider_X;
var repositionSlider_Y;
var scaleSliderX;
var scaleSliderY;

// Listemizin içeridği değerlere ve methodlara ulaşıyoruz.
var colorPalatte;

// Varying tipinde olan renk değişkenimiz.
var vColorLoc;
var myLettersColor = [Math.random(), Math.random(), Math.random(), 1]; // Ilk rengimizi random atıyoruz.

// Değiştirilecek olan değerlerimiz. Default olacak ilk tamalarını yapıyoruz.
var degree;
var trans = [0, 0];
var scale = [1, 1];

// HTML'den gelen uniform lokasyonları
var degreeLoc;
var transLoc;
var scaleLoc;

// Sağa mı sola mı döneceğini ayarlıyoruz.
var isRotate = false;

// Durdur başlat seçeneğimiz.
var play = false;

// Canvası alarak initialize ediyoruz.
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

// Sadece çıktıları kontrol etmek için yazıldı.
function isPressed() {
  isRotate = !isRotate;
  console.log("Pressed, isRotate status (clock rotation): ", isRotate);
}

// Değiştirilen rengi algılamak için oluşturuldu. Index numarasına göre değerleri myLettersColor değişkenine atadık.
function get_color_name_fn() {
  console.log("Seçilen Index: ", colorPalatte.selectedIndex);
  if (colorPalatte.selectedIndex == 0) {
    myLettersColor = [38 / 255, 70 / 255, 83 / 255, 1];
  }
  if (colorPalatte.selectedIndex == 1) {
    myLettersColor = [42 / 255, 157 / 255, 143 / 255, 1];
  }
  if (colorPalatte.selectedIndex == 2) {
    myLettersColor = [233 / 255, 196 / 255, 106 / 255, 1];
  }
  if (colorPalatte.selectedIndex == 3) {
    myLettersColor = [244 / 255, 162 / 255, 97 / 255, 1];
  }
  if (colorPalatte.selectedIndex == 4) {
    myLettersColor = [231 / 255, 111 / 255, 81 / 255, 1];
  }
  if (colorPalatte.selectedIndex == 5) {
    myLettersColor = [253 / 255, 255 / 255, 252 / 255, 1];
  }
  if (colorPalatte.selectedIndex == 6) {
    myLettersColor = [231 / 255, 29 / 255, 54 / 255, 1];
  }
  if (colorPalatte.selectedIndex == 7) {
    myLettersColor = [148 / 255, 0 / 255, 211 / 255, 1];
  }
  if (colorPalatte.selectedIndex == 8) {
    myLettersColor = [46 / 255, 49 / 255, 49 / 255, 1];
  }
  if (colorPalatte.selectedIndex == 9) {
    myLettersColor = [0 / 255, 255 / 255, 255 / 255, 1];
  }
  if (colorPalatte.selectedIndex == 10) {
    myLettersColor = [0 / 255, 230 / 255, 64 / 255, 1];
  }
}

// Döndürme işlemiş durduruldu.
function play_pause_fn() {
  play = !play;
  console.log("Rotation", play == true ? "Başlatıldı" : "Durduruldu", ".");
}

// Sadece çıktıları kontrol etmek için yazıldı.
function reposition_fn() {
  console.log("Range X degistirildi. Yeni degeri:", repositionSlider_X.value);
  console.log("Range Y degistirildi. Yeni degeri:", repositionSlider_Y.value);
}

// Sadece çıktıları kontrol etmek için yazıldı.
function scale_fn() {
  console.log("Range X degistirildi. Yeni degeri:", scaleSliderX.value);
  console.log("Range Y degistirildi. Yeni degeri:", scaleSliderY.value);
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

  var playButton = document.getElementById("start_stop");
  playButton.addEventListener("click", play_pause_fn);

  rotate_slider = document.getElementById("rotate_slider");

  // Harf rengi
  vColorLoc = gl.getUniformLocation(letterProgram, "vColor");

  document.addEventListener("keydown", function (event) {
    if (event.keyCode == 82) {
      console.log("R tuşuna basıldı ve rast gele renk atandı.");
      myLettersColor = [Math.random(), Math.random(), Math.random(), 1.0];
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.keyCode == 32) {
      console.log("Space tuşuna basıldı ve döndürme işlem durumu:", !play);
      play = !play;
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.keyCode == 67) {
      console.log(
        "C tuşuna basıldı ve yers yöne döndürme işlem durumu:",
        !isRotate
      );
      isRotate = !isRotate;
    }
  });

  repositionSlider_X = document.getElementById("reposition_x");
  repositionSlider_X.addEventListener("change", reposition_fn);

  repositionSlider_Y = document.getElementById("reposition_y");
  repositionSlider_Y.addEventListener("change", reposition_fn);

  scaleSliderX = document.getElementById("scale_x");
  scaleSliderY = document.getElementById("scale_y");

  scaleSliderX.addEventListener("change", scale_fn);
  scaleSliderY.addEventListener("change", scale_fn);

  colorPalatte = document.getElementById("color_palatte");
  colorPalatte.addEventListener("change", get_color_name_fn);

  // S ve L harfi için oluşturulan değişken. 150 Vertex değil yaklaşık 150 satır.
  sLetter_position = [
    vec2(
      -0.08, // S-U-1-x1
      0.58 // S-U-1-y1
    ),
    vec2(
      -0.58, // S-U-1-x2
      0.58 // S-U-1-y2
    ),
    vec2(
      -0.08, // S-U-1-x3
      0.43 // S-U-1-y3
    ),
    // 2. Kısım
    vec2(
      -0.58, // S-U-2-x1
      0.58 // S-U-2-y1
    ),
    vec2(
      -0.08, // S-U-2-x2
      0.43 // S-U-2-y2
    ),
    vec2(
      -0.58, // S-U-2-x3
      0.43 // S-U-2-y3
    ),

    // ^Üst Yatay Dikdörtgen Tamamlandı.

    vec2(
      -0.58, // S-SOL-1-x1
      0.58 // S-SOL-1-y1
    ),
    vec2(
      -0.58, // S-SOL-1-x2
      0.08 // S-SOL-1-y2
    ),
    vec2(
      -0.73, // S-SOL-1-x3
      0.08 // S-SOL-1-y3
    ),

    // 2. kısım
    vec2(
      -0.73, // S-SOL-2-x1
      0.08 // S-SOL-2-y1
    ),
    vec2(
      -0.58, // S-SOL-2-x2
      0.58 // S-SOL-2-y2
    ),
    vec2(
      -0.73, // S-SOL-2-x3
      0.58 // S-SOL-2-y3
    ),

    // ^Ust Sol dikey dikdörtgen oluşturuldu.

    vec2(
      -0.73, // S-O-1-x1
      0.08 // S-O-1-y1
    ),
    vec2(
      -0.73, // S-O-1-x2
      -0.07 // S-O-1-y2
    ),
    vec2(
      -0.08, // S-O-1-x3
      -0.07 // S-O-1-y3
    ),

    // 2. kısım
    vec2(
      -0.08, // S-O-2-x1
      -0.07 // S-O-2-y1
    ),
    vec2(
      -0.08, // S-O-2-x2
      0.08 // S-O-2-y2
    ),
    vec2(
      -0.73, // S-O-2-x3
      0.08 // S-O-2-y3
    ),

    // ^Orta yatay dikdörtgen oluşturuldu.

    vec2(
      -0.08, //S-SAG-1-x1
      0.08
    ), //S-SAG-1-y1
    vec2(
      -0.23, // S-SAG-1-x2
      0.08 // S-SAG-1-y2
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
      -0.23, // S-SAG-2-x2
      -0.48 // S-SAG-2-y2
    ),
    vec2(
      -0.23, // S-SAG-2-x3
      0.08 // S-SAG-2-y3
    ),

    // ^Sağ Alt diket dikdörtgen oluşturuldu.

    vec2(
      -0.08, // S-A-1-x1
      -0.43 // S-A-1-y1
    ),
    vec2(
      -0.08, // S-A-1-x2
      -0.58 // S-A-1-y2
    ),
    vec2(
      -0.73, // S-A-1-x3
      -0.58 // S-A-1-y3
    ),

    // 2. kısım

    vec2(
      -0.73, // S-A-1-x1
      -0.58 // S-A-1-y1
    ),
    vec2(
      -0.73, // S-A-1-x1
      -0.43 // S-A-1-y2
    ),
    vec2(
      -0.08, // S-A-1-x1
      -0.43 // S-A-1-y3
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

  var bufferId = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
  gl.bufferData(gl.ARRAY_BUFFER, flatten(sLetter_position), gl.STATIC_DRAW);
  // Eksenler buffer'a atanır, işlendikten sonra buradan çekilir.

  var vPosition = gl.getAttribLocation(letterProgram, "vPosition");
  gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(vPosition);

  // Değişkenler HTML dosyasından alındı.
  degreeLoc = gl.getUniformLocation(letterProgram, "theta");
  transLoc = gl.getUniformLocation(letterProgram, "transformation");
  scaleLoc = gl.getUniformLocation(letterProgram, "scale");

  degree = 0;

  // Değişkenlere değerleri atandı.
  gl.uniform1f(degreeLoc, degree);
  gl.uniform4f(transLoc, trans[0], trans[1], 1.0, 1.0);
  gl.uniform4f(scaleLoc, scale[0], scale[1], 1.0, 1.0);

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  requestAnimationFrame(render);
};

function render() {
  gl.clear(gl.COLOR_BUFFER_BIT); // clear the color buffer with specified clear color

  degree +=
    play == true
      ? isRotate == true
        ? (rotate_slider.value - rotate_slider.min) /
          (rotate_slider.max - rotate_slider.min)
        : -(rotate_slider.value - rotate_slider.min) /
          (rotate_slider.max - rotate_slider.min)
      : 0;
  gl.uniform1f(degreeLoc, degree);

  trans[0] = repositionSlider_X.value;
  trans[1] = repositionSlider_Y.value;
  gl.uniform4f(transLoc, trans[0], trans[1], 1.0, 1.0);

  scale[0] = scaleSliderX.value == 0 ? 0.1 : scaleSliderX.value;
  scale[1] = scaleSliderY.value == 0 ? 0.1 : scaleSliderY.value;

  gl.uniform4f(scaleLoc, scale[0], scale[1], 1.0, 1.0);

  gl.uniform4fv(vColorLoc, myLettersColor);

  gl.drawArrays(gl.TRIANGLES, 0, sLetter_position.length);
  requestAnimationFrame(render);
}
