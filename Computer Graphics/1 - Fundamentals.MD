# HELPER

## Çizdirme Argümanları

* **`POINTS`**: Sadece orada bulunan koordinatta nokta oluşturur ve `gl_PointSize` ile o noktanın boyutunu belirleyebiliriz.
* **`LINES`**: 2 koordinat arasında bir çizgi oluşturur ve `gl.lineWidth` ile o çizginin genişliğini belirleyebiliriz.
* **`LINE_STRIP`**: 2 koordinat (başlangıç ve bitiş) arasında tüm noktaları sırası ile birleştirir. Başlangıç ve bitişi <u>birleştirmez</u>.
* **`LINE_LOOP`**: 2 koordinat (başlangıç ve bitiş) arasında tüm noktaları sırası ile birleştirir. Başlangıç ve bitişi <u>birleştirir</u>.
* **`TRIANGLES`**: Verilen 3 nokta ile bir üçgen oluşturur.
* **`TRIANGLE_STRIP`**: Eğer sisteme 6 nokta verilirse sistem geriye 4 adet üçgen gönderir.
* **`TRIANGLE_FAN`**: Sisteme 1 adet orta nokta verilir ve diğer noktalar arasında birleştirilmiş bir dairesel üçgen oluşturur.

## Genel Bilgiler

**Vertex Shader**: Vertex pozisyonlarını hesaplar, vertexler `POINT`, `TRIANGLE` veya `LINE` olabilir.

**Fragment Shader**: Her pixelin rengini ve çizdirilmesini ayarlar.

Çizdirmek istediğiniz zaman`gl.drawArrays` or `gl.drawElements` fonksiyonlarını çağırmak zorundayız. Bu fonksiyonlar ise girdilerini GPU üzerinde hesaplarlar. 4 farklı yol vardır shader based yöntemlerinde.

1. *Attributes ve Buffers*
    > Buffers are arrays of binary data you upload to the GPU. Usually buffers contain things like positions, normals, texture coordinates, vertex colors, etc although you're free to put anything you want in them.
    > Attributes are used to specify how to pull data out of your buffers and provide them to your vertex shader. For example you might put positions in a buffer as three 32bit floats per position. You would tell a particular attribute which buffer to pull the positions out of, what type of data it should pull out (3 component 32 bit floating point numbers), what offset in the buffer the positions start, and how many bytes to get from one position to the next.
    > Buffers are not random access. Instead a vertex shader is executed a specified number of times. Each time it's executed the next value from each specified buffer is pulled out and assigned to an attribute.
2. *Uniforms*
   > Uniforms are effectively global variables you set before you execute your shader program.
3. *Textures*
    > Textures are arrays of data you can randomly access in your shader program. The most common thing to put in a texture is image data but textures are just data and can just as easily contain something other than colors.
4. *Varyings*
    > Varyings are a way for a vertex shader to pass data to a fragment shader. Depending on what is being rendered, points, lines, or triangles, the values set on a varying by a vertex shader will be interpolated while executing the fragment shader.

## Başlangıç

WebGL için 2 şey önemlidir; klip sahnesi koordinatları ve renkler. *Vertex Shader* klip sahnesini sağlarken *Fragment Shader* bize renkleri sağlar.

```JS
// Vertex Shader scriptimizin içi böyledir.

// attribute değişkeni buffer'dan data alacak.
attribute vec4 a_position;

// tüm shader'ler main fonksiyona sahip olmak zorundadır.
void main() {

  // gl_Position vertex shader'in özel değişkenidir ve ayarlardan sorumludur.
  gl_Position = a_position;
}
```

```JS
// Fragment Shader scriptimizin içi böyledir.

// Fragment shader default olarak precision'a sahip değildir bizim bir tane belirlememiz gerekmektedir.  "Medium Precision" anlamına gelen mediump'u seçebiliriz.
precision mediump float;

void main() {
  // gl_FragColor fragment shader'in özel değişkenidir ve ayarlardan sorumludur.
  gl_FragColor = vec4(1, 0, 0.5, 1); // RGBA renk paleti içerir.
}
```

HTML dosyası içerisinde;

```HTML
<canvas id="UysalCanvas"></canvas>
```

kod parçacığı ile canvas oluşturuyoruz, render edeceklerimizin yazılacağı yerdir burası.

Daha sonra `javascript` dosyamız içersinde;

```JS
var canvas = document.querySelector("#UysalCanvas");
```

kod parçacığı ile *canvas*'ımıza erişim sağlıyoruz. Bu erişim *canvas* içerisine bir şeyler yazdırabilmek için gereklidir.

Daha sonra aynı `javascript` dosyamız içerisinde **WebGLRenderingCotext** kütüphanesine ulaşmak için şu kod parçacıklarını yazıyoruz.

```JS
var gl = canvas.getContext("webgl");
if (!gl) {
   // no webgl for you!
   TARAYICINIZ WEBGL KUTUPHANESINI DESTEKLEMIYOR LUTFEN BASKA BIR TARAYICI ILE DENEYINIZ.
}
    ...
```

Eğer *scriptlerimizi* HTML dosyasına gömeceksek şöyle kullanmamız daha uygun olur.

```HTML
<script id="vertex-shader-2d" type="notjs">
    // attribute değişkeni buffer'dan data alacak.
    attribute vec4 a_position;

    // tüm shader'ler main fonksiyona sahip olmak zorundadır.
    void main() {

        // gl_Position vertex shader'in özel değişkenidir ve ayarlardan sorumludur.
        gl_Position = a_position;
    }
</script>

<script id="fragment-shader-2d" type="notjs">
    // Fragment shader default olarak precision'a sahip değildir bizim bir tane belirlememiz gerekmektedir.  "Medium Precision" anlamına gelen mediump'u seçebiliriz.
    precision mediump float;

    void main() {
        // gl_FragColor fragment shader'in özel değişkenidir ve ayarlardan sorumludur.
        gl_FragColor = vec4(1, 0, 0.5, 1); // RGBA renk paleti içerir.
    }
</script>
```

Şimdi ise bir fonksiyon oluşturup, yazdığımız scriptler aracılığı ile, shader oluşturup GLSL kaynağı ile compile etmemiz gerekiyor.

```JS
function createShader(gl, type, source) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }

  console.log(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
}
```

Bir sonraki aşama olarak bu oluşturduğumuz fonksiyonu çağırarak 2 shader oluşturacağız.

```JS
var vertexShaderSource = document.querySelector("#vertex-shader-2d").text;
var fragmentShaderSource = document.querySelector("#fragment-shader-2d").text;

var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
```

Şimdi ise bu oluşturduğumuz *shaderları* bir **program** ile birleştirecek fonksiyonu yazmak;

```JS
function createProgram(gl, vertexShader, fragmentShader) {
  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  var success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }

  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
}
```

ve çağırmak;

```JS
var program = createProgram(gl, vertexShader, fragmentShader);
```

Bu aşamaya kadar **GPU** üzerinde bir tane **GLSL** programı oluşturduk. Bir sonraki aşama olarak bu oluşturduğumuz *GLSL* programına veri aktarma / yazma. Yukarıda oluşturduğumuz kod parçacığında bir tane attribute değişkenimiz olan `a_position` değişkeni bulunuyor.
İlk iş olarak bu attribute'ye erişim sağlamalıyız.

```JS
var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
```

Attributeler içine yazılacak olan dataları **buffer** üzerinden alır. Bu nedenle bir tane *buffer* oluşturmalıyız;

```JS
var positionBuffer = gl.createBuffer();
```

WebGL bir çok WebGL değişkenini global **bind point** üzerinden manipule etmemize olanak sağlar. Bind point'leri  *internal global variable* gibi düşünebiliriz. Bunun için ilk yapmamız gereken bind point'i *position buffer* a bağlamak.

```JS
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
```

Şimdi ise oluşturacağımız data'yı **buffer** aracılığı içe **bind point**'e atmalıyız;

```JS
var positions = [
  0, 0,
  0, 0.5,
  0.7, 0,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
```

`new Float32Array(positions)` kod parçacığı aracılığı ile oluşturduğumuz *array* tipindeki değişkeni *32bit point number* tipine çeviriyoruz ve `gl.bufferData` fonksiyonu ile *position* datamızı **GPU** üzerinde bulunan **positionBuffer** kısmına atıyoruz. `gl.STATIC_DRAW` ise datamızı nasıl kullanacağımızı gösterir.

## Render Alma

Render çıktımızı almadan önce *canvas*'ımızı ayarlamalıyız. Canvasların 2 boyutu vardır. <u>*Canvas boyutunuzu CSS dosyası üzerinden ayarlamanız önerilir.*</u>.

Uygun olabilecek tüm ekranı canvas olarak ayarlamak için bu kod parçasını kullanabiliriz;

```JS
webglUtils.resizeCanvasToDisplaySize(gl.canvas);
```

Bir sonraki adım olarak -1'den +1'e doğru artan canvasımızı ayarladığımız pixel boyutlarına atamak. Bu işlem ise aşağıdaki kod parçacığı ile gerçekleşecektir;

```JS
gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
```

Canvas'ımızı temizlemek veya belirli bir renk atamak için şu kod parçacığını kullanacağız;

```JS
gl.clearColor(0, 0, 0, 0); // RGBA türündedir.
gl.clear(gl.COLOR_BUFFER_BIT);
```

WebGL'e shader programımızı execute etmesi için kullandırıyoruz.

```JS
gl.useProgram(program);
```

Yapacağımız sonraki işlem ise, yukarıda oluşturduğumuz aşamaları gerçekleştirecek, yani dataları bufferden alacak ve attributeye sağlayacak kodları yazmak. İlk olarak attribute'yi *aktifleştiriyoruz*;

```JS
gl.enableVertexAttribArray(positionAttributeLocation);
```

Sonra datamızı nasıl alacağımızı belirliyoruz;

```JS
// Position buffer'u bind'liyoruz.
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

// Attribute'mize data'ya nasıl positionBuffer'den ulaşacağını gösteriyoruz. (ARRAY_BUFFER)
var size = 2;          // 2 components per iteration
var type = gl.FLOAT;   // the data is 32bit floats
var normalize = false; // data'yı normalize etme.
var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
var offset = 0;        // start at the beginning of the buffer
gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset)
```

**`gl.vertexAttribPointer`**'in önemli noktası, aktif `ARRAY_BUFFER`'ı **attribute**'ye bağlar.

**Not**: Vertex Shader'de oluşturduğumuz `a_position` attribute'si `vec4` tipindedir.

```JS
attribute vec4 a_position;
```

`vec4` 4 float değerli bir değişken tipidir. `a_position = {x: 0, y: 0, z: 0, w: 0}` olarak düşünülebilir. Default değerleri ise *0, 0, 0, 1* dir.

Son işlem olarak WebGL kütüphanesinden oluşturduğumuz GLSL bölümünü çalıştırmasını istiyoruz.

```JS
var primitiveType = gl.TRIANGLES;
var offset = 0;
var count = 3;
gl.drawArrays(primitiveType, offset, count);
```

Count değerimizin 3 olma nedeni; 3 tane koordinat noktamızı sırasıyla `a_position.x` ve `a_position.y` değişkenlerine atama yapmamız.

Vertex Shader'imiz positionBuffer'den değerleri gl_Position'a kopyalar ve üçgen çizilmiş olur. (`gl.TRIANGLES`)

### ilk kodda bırakıldı.
