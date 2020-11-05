main();
    function main() {
        const canvas = document.querySelector("#glcanvas"); // Initialize the GL context.

        const gl = canvas.getContext("webgl"); 

        if (!gl) { // Only continue if WebGL is aviable and working
            alert("Unable to initialize WebGL. Your browser or machine may not support.");
            return;
        }

        gl.clearColor(.0, .0, .0, 1.0); // set clear color to black, fully opaque
        gl.clear(gl.COLOR_BUFFER_BIT); // clear the color buffer with specified clear color
    }