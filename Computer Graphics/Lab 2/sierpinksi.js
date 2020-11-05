var gl;
var numPoints = 5000;

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

  // new triangles
  var vertices = [vec2(-1.0, -1.0), vec2(0.0, 1.0), vec2(1.0, -1.0)];
  var u = scale(0.5, add(vertices[0], vertices[1]));
  var v = scale(0.5, add(vertices[0], vertices[2]));
  var p = scale(0.5, add(u, v));
  points = [p];

  for (var i = 1; i < numPoints; ++i) {
    var j = Math.floor(Math.random() * 3);
    p = scale(0.5, add(points[i - 1], vertices[j]));
    points.push(p);
  }

  var bufferId = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
  gl.bufferData(gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW);

  // Associate out shader variables with our data buffer
  var vPosition = gl.getAttribLocation(program, "vPosition");
  gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(vPosition);

  gl.clearColor(0.25, 0.0, 0.0, 1.0); // set clear color to black, fully opaque

  render();
};

function render() {
  gl.clear(gl.COLOR_BUFFER_BIT); // clear the color buffer with specified clear color

  gl.drawArrays(gl.POINTS, 0, numPoints);
}
