# Chapter 1-5 arasında bulunan önemli olabilecek notlar

</br>

## [Chapter 1](T01_HelloWorldTb.vhd): HELLO WORLD

## [Chapter 2](T02_WaitForTb.vhd): HOW TO DELAY TIME IN VHDL: WAIT FOR

`wait;` fonksiyonu direkt programı durdururken `wait for` ile belirli döngüye alabiliriz.

Eğer hiç `wait` fonksiyonunu kullanmazsak program **begin** ve **end process** arasında sonsuz döngüye girer.

### **wait for Syntax**

```VHDL
    wait for <time_value> <time_unit>;
 ```

| **time_unit** | *Açıklaması* |
| :------------ | ------------ |
| fs            | femto saniye |
| ps            | piko saniye  |
| ns            | nano saniye  |
| us            | micro saniye |
| ms            | mili saniye  |
| sec           | saniye       |
| min           | dakika       |
| hr            | saat         |

</br>

## [Chapter 3](T03_LoopTb.vhd): HOW TO USE LOOP AND EXIT IN VHDL

Programımızı `Loop` ve `End Loop;` satırları arasında tekrarlara sokabiliriz. **wait for \<saniye> <türü>;** şeklinde bitirecek olursak, bu saniye kadar loop içerisinde kalır ve daha sonra programı loop içerisinde iken bitirir, sonraki satırlara ve komutlara uğramaz. Sonraki satırlara uğramasını istersek Loop içerisinden **exit;** komutu ile çıkabiliriz.

### **loop Syntax**

```VHDL
    loop
        gerçekleştirilecek_işlemler;
    end loop;
 ```

</br>

## [Chapter 4](T04_ForLoopTb.vhd): HOW TO USE A FOR-LOOP IN VHDL

Döngümüzü belirli defa çalıştırmak istediğimizde **for loop**'unu kullanıırız.

### **for loop Syntax**

```VHDL
    for <c> in <r> loop
        gerçekleştirilecek_işlemler;
    end loop;
 ```

Burada bulunan `<c>` değişkenin adını temsil eder, `<r>` ise bizim aralığımızı temsil eder.

`<r>` nin yerine gelebilecek aralıklar şöyledir;

* *`0 to 9`*: 0'dan 9'a kadar birer birer artarak devam eder.
* *`9 downto 0`*: 9'dan 0'a kadar birer birer azalarak devam eder.
* *`0 to 0`*: Sadece 0'ı içeren aralık.
* *`0 to -1`*: Boş aralık vermek istediğimizde kullanırız.

## [Chapter 5](T05_WhileLoop.vhd): HOW TO USE A WHILE-LOOP IN VHDL

### **while loop Syntax**

```VHDL
while <condition> loop
end loop;
```

`<condition>` bölümü `true` veya `false` olabilir. Yazacağımız kontrol edilecek statement şöyle türlerde olabilir.

| İlişkisel Operatörler         | Mantıksal Operatörler                                     |
| ----------------------------- | --------------------------------------------------------- |
| `=` : Equal                   | `not a`: true if *a* is **false**                         |
| `/=` : Not Equal              | `a and b`: true if *a* and *b* are **true**               |
| `<` : Less Than               | `a or b`: true if *a* or *b* are **true**                 |
| `<=` : Less Than or Equal     | `a nand b`: true if *a* or *b* is **false**               |
| `>` : Greather Than           | `a nor b`: true if *a* and *b* are **false**              |
| `>=` : Greather Than or Equal | `a xor b`: true if exactly one of *a* or *b* are **true** |
| ``                           | `xa xnor b`: true if *a* and *b* are **equal**            |
