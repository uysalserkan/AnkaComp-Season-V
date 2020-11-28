# Tutorial 12 - 17 arasında bulunan önemli olabilecek notlar

## Chapter 12: HOW TO USE SIGNED AND UNSIGNED IN VHDL

**std_logic_vector** gibi VHDL'de **signed** ve **unsigned** veri tipleri *bit vektörüdür.* Tek farkları *std_logic_vector*'lerin veri depolamada iyi olmalarına karşın aritmatik işlemlerde pek iyi değillerdir.

Eğer 2 tane **std_logic_vector** tipinde değişkeni toplayacak olursanız *Modelsim* size şu hatayı verecektir: *No feasible entries for infix operator "+".* 

### Signed ve Unsigned Syntax

`signal <name> : signed(<N-bits> downto 0) := <initial_value>;`

`signal <name> : unsigned(<N-bits> downto 0) := <initial_value>;`

Tıpkı vektörlerde olduğu gibi `downto` veya `to` olarak tanımlayabiliriz.

Initial değer opsiyonel olduğu için, eğer bir değer tanımlamazsanız **default olarak** `'U'` değeri atanacaktır tüm bit değerlerine.

Signed ve Unsigned değişkenlerinin belirli bir değer aralığı vardır. Eğer simülatör bu değer aralıklarını aşarsa *run-time error* hatası verecektir. Ve ek olarak atayabileceğimiz 2 farklı değer vardır **integer değişkeninden farklı olarak.** Bu değerlerimiz `'U'` ve `'X'` değerlerimizdir. Bu meta değerler bizlere debugging yapmakta ve hata bulma konusunda yardımcı olacaktır.

### Örnek kod çıktısı 1

![Çıktı 1](T12_1.png)

`UnsCnt` ve `SgnCnt` değişkenleri arttırma olarak benzer davranışlar sergiliyor. İki değişken de **FF** değerine geldiğinde (Ki bu değer bu değişkenler için memoryde tutulabilecek en büyük değer) bir sonraki arttırma işleminde **0**'a dönüyorlar.

`Uns4` ve `Sig4` de ise değişik bir durum oluşuyor. `Uns4` kendi değerini alırken `Sig4` değeri ilk bit **sign bit**'i olduğu için negatif değer olarak geçiyor. Bu durumdan dolayı atadığımız `"1000"` değeri `Uns4` için istediğimiz gibi çalışırken `Sig4` için yanlış çalışmaktadır.

![Çıktı 2](T12_2.svg)

## Chapter 13: HOW TO CREATE A CONCURRENT STATEMENT IN VHDL

Concurrent statement'ler *Signal* atamalarının **architure bölümünde** **process bölümünün dışarısında** yapılması ile oluşturulur.


Gerçek anlamında eğer bir *Concurrent Statement* oluşturmak, basit ve kesin bir şekilde **sensitivity process** oluşturmak ile eş değerdir.

![Çıktı 1](T13_1.png)

`Mul1`, `Mul2` ve `Mul3` aslında aynı şeyleri farklı process'ler içerisinde göstermek için oluşturulmuş değişkenlerdir.

`Uns` değişkenimiz **6 bit** içeriyor ve `Mul1` ve diğer değişkenler ise **8 bit** içeriyor. Bu bit farkını tamamlamak için `& "00"` şeklinde ekleme yaptık.

Processler içerisindeki işlem ise shift operasyonunun ta kendisidir.

![Çıktı 2](T13_2.svg)


## Chapter 14: HOW TO USE A CASE-WHEN STATEMENT IN VHDL

`Case-When` statement'leri signal, variable veya expression'lar da belirli durumlar gerçekleştiğinde gerçekleşecek olan işlemleri belirtmemize yarıyor. *(İf-Else'nin daha güzel gözüken bir versiyonu.)*

### Case-When statement Syntax

```VHDL
case <expression> is
    when <choice> =>
        code for this branch
    when <choice> =>
        code for this branch
    ...
end case;
```

`<expression>` genelde *sinyal* veya *variable* olmaktadır. Birden fazla `when` seçeneği olabilir fakat her defasında en fazla **bir tane** seçilebilir durumdadır.

`<choice>`'in alabileceği değerler:
* **"11"**, belirli bir değeri belirtmen için kullanılabilir.
* **5 to 10**, belirli aralığı belirtmen için kullanılır.
* **1|3|5**, belirli değerleri aynı anda belirtmek için kullanılır.
* **others**, Else komutu gibi çalışmaktadır.

### Örnek kod çıktısı 2

![Çıktı 1](T14_1.png)

```TXT
# ** Warning: NUMERIC_STD."=": metavalue detected, returning FALSE
#    Time: 50 ns  Iteration: 1  Instance: /T14_CaseWhen
# ** Warning: NUMERIC_STD."=": metavalue detected, returning FALSE
#    Time: 50 ns  Iteration: 1  Instance: /T14_CaseWhen
# ** Warning: NUMERIC_STD."=": metavalue detected, returning FALSE
#    Time: 50 ns  Iteration: 1  Instance: /T14_CaseWhen
# ** Warning: NUMERIC_STD."=": metavalue detected, returning FALSE
#    Time: 50 ns  Iteration: 1  Instance: /T14_CaseWhen
```

![Çıktı 2](T14_2.svg)