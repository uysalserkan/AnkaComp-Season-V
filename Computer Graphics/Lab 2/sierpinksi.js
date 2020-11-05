var gl;

window.onload = function init() {
  const canvas = document.querySelector("#glcanvas"); // Initialize the GL context.

  gl = canvas.getContext("webgl");

  if (!gl) {
    // Only continue if WebGL is aviable and working
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support."
    );
    return;
  }

  var program = initShaders(gl, "vertex-shader", "fragment-shader");

  gl.useProgram(program);

  var vertices = new Float32Array([-1, -1, 1, -1, 0, 1]);

  var bufferId = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  // Associate out shader variables with our data buffer
  var vPosition = gl.getAttribLocation(program, "vPosition");
  gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(vPosition);

  gl.clearColor(0.25, 0.0, 0.0, 1.0); // set clear color to black, fully opaque

  render();
};

function render() {
  gl.clear(gl.COLOR_BUFFER_BIT); // clear the color buffer with specified clear color

  gl.drawArrays(gl.TRIANGLES, 0, 3);
}
