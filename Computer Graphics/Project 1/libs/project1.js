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

window.onload = function main() {
  const canvas = document.querySelector("#projectCanvas"); // Initialize the GL context.

  const gl = canvas.getContext("webgl");

  if (!gl) {
    // Only continue if WebGL is aviable and working
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support."
    );
    return;
  }

  var program = initShaders(gl, "vertex-shader", "fragment-shader");

  gl.useProgram(program);

  var vertices = new Float32Array([0.10,0.90,-0.95,-0.80,0.98, -0.95]);

  var bufferId = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  // Associate out shader variables with our data buffer
  var vPosition = gl.getAttribLocation(program, "vPosition");
  gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(vPosition);

  gl.clearColor(0.0, 0.0, 0.45, 1); // set clear color to black, fully opaque
  gl.clear(gl.COLOR_BUFFER_BIT); // clear the color buffer with specified clear color

  gl.drawArrays(gl.TRIANGLES, 0, 3);
};
