var gl;

window.onload = function init() {
    const canvas = document.querySelector("#glCanvas");

    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) {
        alert("Unable to initialize WebGL. your browser or machine may not support it.");
        return;
    }

    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    var vertices = [
        vec3(-0.5, -0.5, 0.5),
        vec3(-0.5, 0.5, 0.5),
        vec3(0.5, 0.5, 0.5),
        vec3(0.5, -0.5, 0.5),
        vec3(-0.5, -0.5, -0.5),
        vec3(-0.5, 0.5, -0.5),
        vec3(0.5, 0.5, -0.5),
        vec3(0.5, -0.5, -0.5),
    ];

    var vertexColors = [
        [0.0, 0.0, 0.0, 1.0],
        [1.0, 0.0, 0.0, 1.0],
        [1.0, 1.0, 0.0, 1.0],
        [0.0, 1.0, 0.0, 1.0],
        [0.0, 0.0, 1.0, 1.0],
        [1.0, 0.0, 1.0, 1.0],
        [1.0, 1.0, 1.0, 1.0],
        [0.0, 1.0, 1.0, 1.0],
    ];

    var indices = [
        1, 0, 3, 3, 2, 1,
        2, 3, 7, 7, 6, 2,
        6, 5, 1, 1, 2, 6,
        4, 5, 6, 6, 7, 4,
        5, 4, 0, 0, 1, 5
    ];

    var vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);

    var vPosition = gl.getAttribLocation(program, "vPosition");
    gl.vertexAttribPointer(vPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);


    var cBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(vertexColors), gl.STATIC_DRAW);

    var cPosition = gl.getAttribLocation(program, "vColor");
    gl.vertexAttribPointer(cPosition, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(cPosition);

    var iBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, iBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint8Array(indices), gl.STATIC_DRAW);


    var modelViewMatrix = lookAt(
        vec3(3.5, 1.8, 2.0), // EYE
        vec3(0.0, 0.0, 0.0), // AT
        vec3(0.0, 1.0, 0.0), // UP
    );

    var projectionMatrix = perspective(60, 1.0, 1.0, 20.0); // veya ortho(-1.0, 1.0, -1.0, 1.0, 0.0, 20.0)
    
    var mVMatLoc = gl.getUniformLocation(program, "modelViewMatrix");
    gl.uniformMatrix4fv(mVMatLoc, false, flatten(modelViewMatrix));

    var pMatLoc = gl.getUniformLocation(program, "projectionMatrix");
    gl.uniformMatrix4fv(pMatLoc, false, flatten(projectionMatrix));


    gl.enable(gl.CULL_FACE);
    // gl.enable(gl.DEPTH_TEST);, gl.cullFace(gl.FRONT);, 

    gl.clearColor(0.8, 0.8, 0.8, 1.0);

    render();

};


function render() {
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawElements(gl.TRIANGLES, 28, gl.UNSIGNED_BYTE, 0);
}