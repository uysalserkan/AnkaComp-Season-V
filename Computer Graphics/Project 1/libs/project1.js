/* // Global Variables
var gl;

// Ekran yüklendiğinde çalıştırılacak olan fonksiyon
window.onload = function init() {
  const canvas = document.querySelector("#projectCanvas"); // HTML dosyamızdan bilgileri çekiyoruz.
  gl = canvas.getContext("webgl"); // Kütüphaneyi yüklüyoruz.

  if (!gl) {
    // WebGL kütüphanesini yüklerken her hangi bir hata ile karşılaşırsak ekrana pop-up mesajı ile bilgi veriyoruz.
    alert(
      "WebGL kütüphanesi yüklenemedi!\nLütfen başka bir internet tarayıcısı ile tekrar deneyiniz."
    );
    return;
  }

  var program = initShaders(gl, "vertex-shader", "fragment-shader");

  gl.useProgram(program);

  // 800x640 olan ekranımızı renklendiriyoruz.
  gl.clearColor(0, 0, 0.6, 1); // Red, Green, Blue, Alpha

  gl.clear(gl.COLOR_BUFFOR_BIT); // Clear the context with the newly set color. This is the function call that actually does the drawing.
};
 */

// Global Variables
var gl;
var vertices;

window.onload = function main() {
  const canvas = document.querySelector("#projectCanvas"); // Main HTML'den canvasa ulaşıyoruz.

  gl = canvas.getContext("webgl"); // WebGL kütüphanesini yüklüyoruz.

  if (!gl) {
    // WebGL yüklenmezse bu koşul çalışacak.
    alert("Tarayıcınızdan kaynaklanan hata sonucunda WEBGL yüklenemedi.");
    return;
  }

  var program = initShaders(gl, "vertex-shader", "fragment-shader");
  // Program initialize edilir vertex ve fragment ile.

  gl.useProgram(program);
  // Gl değişkenine atanır veya kullandırılır.

  vertices = new Float32Array([
    -0.08, // S-U-1-x1
    0.98, // S-U-1-y1
    -0.98, // S-U-1-x2
    0.98, // S-U-1-y2
    -0.08, // S-U-1-x3
    0.88, // S-U-1-y3
    // 2. kısım
    -0.98, // S-U-2-x1
    0.98, // S-U-2-y1
    -0.08, // S-U-2-x2
    0.88, // S-U-2-y2
    -0.98, // S-U-2-x3
    0.88, // S-U-2-y3

    // ^Ust yatay dikdörtgen oluşturuldu

    -0.98, // S-SOL-1-x1
    0.88, // S-SOL-1-y1
    -0.98, // S-SOL-1-x2
    0.28, // S-SOL-1-y2
    -0.78, // S-SOL-1-x3
    0.28, // S-SOL-1-y3
    // 2. kısım
    -0.78, // S-SOL-2-x1
    0.28, // S-SOL-2-y1
    -0.98, // S-SOL-2-x2
    0.88, // S-SOL-2-y2
    -0.78, // S-SOL-2-x3
    0.88, // S-SOL-2-y3

    // ^Ust Sol dikey dikdörtgen oluşturuldu.

    -0.98, // S-O-1-x1
    0.28, // S-O-1-y1
    -0.98, // S-O-1-x2
    0.18, // S-O-1-y2
    -0.08, // S-O-1-x3
    0.18, // S-O-1-y3
    // 2. kısım
    -0.08, // S-O-2-x1
    0.18, // S-O-2-y1
    -0.08, // S-O-2-x2
    0.28, // S-O-2-y2
    -0.98, // S-O-2-x3
    0.28, // S-O-2-y3

    // ^Orta yatay dikdörtgen oluşturuldu.

    -0.08, //S-SAG-1-x1
    0.18, //S-SAG-1-y1
    -0.28, //S-SAG-1-x2
    0.18, //S-SAG-1-y2
    -0.08, //S-SAG-1-x3
    -0.48, //S-SAG-1-y3
    // 2. kısım
    -0.08, //S-SAG-2-x1
    -0.48, //S-SAG-2-y1
    -0.28, // S-SAG-2-x2
    -0.48, // S-SAG-2-y2
    -0.28, // S-SAG-2-x3
    0.18, // S-SAG-2-y3

    // ^Sağ Alt diket dikdörtgen oluşturuldu.

    -0.08, // S-A-1-x1
    -0.48, // S-A-1-y1
    -0.08, // S-A-1-x2
    -0.58, // S-A-1-y2
    -0.98, // S-A-1-x3
    -0.58, // S-A-1-y3

    // 2. kısım

    -0.98,
    -0.58,
    -0.98,
    -0.48,
    -0.08,
    -0.48,
  ]); //new Float32Array([0.1, 0.15, 0.9, 0.15, 0.9, 0.9]);
  // Noktaların çizileceği eksenler girilir.

  var bufferId = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  // Eksenler buffer'a atanır, işlendikten sonra buradan çekilir.

  // Associate out shader variables with our data buffer
  var vPosition = gl.getAttribLocation(program, "vPosition");
  gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(vPosition);
  gl.clearColor(0.0, 0.0, 0.45, 1); // set clear color to black, fully opaque

  render();
};

function render() {
  gl.clear(gl.COLOR_BUFFER_BIT); // clear the color buffer with specified clear color

  gl.drawArrays(gl.TRIANGLES, 0, 30);
}
