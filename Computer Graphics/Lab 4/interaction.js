var gl;
var theta;
var thetaLoc;
var isDirClockwise = false;

function isPressed() {
  isDirClockwise = !isDirClockwise;
}

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

  // accessing the web page button and defining the callback function
  var myButton = document.getElementById("DirectionButton");
  myButton.addEventListener("click", isPressed);

  gl.useProgram(program);

  // initial square vertex coordinates
  var vertices = [
    vec2(-0.75, -0.75),
    vec2(0.75, -0.75),
    vec2(0.75, 0.75),
    vec2(-0.75, 0.75),
  ];

  var bufferId = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
  gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);

  // Associate out shader variables with our data buffer
  var vPosition = gl.getAttribLocation(program, "vPosition");
  gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(vPosition);

  thetaLoc = gl.getUniformLocation(program, "theta");

  theta = 0;
  gl.uniform1f(thetaLoc, theta);

  gl.clearColor(0.8, 0.8, 0.8, 1.0); // set clear color to white, fully opaque

  requestAnimationFrame(render);
};

function render() {
  gl.clear(gl.COLOR_BUFFER_BIT); // clear the color buffer with specified clear color

  theta += isDirClockwise ? -0.1 : 0.1;
  gl.uniform1f(thetaLoc, theta);
  gl.drawArrays(gl.LINE_LOOP, 0, 4);
  requestAnimationFrame(render);
}
