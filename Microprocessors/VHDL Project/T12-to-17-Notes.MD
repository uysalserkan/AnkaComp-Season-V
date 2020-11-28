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
