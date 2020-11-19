# Tutorial 6 - 11 arasında bulunan önemli olabilecek notlar

## Chapter 6

Sinyal atamaları `<architecture_name> of <entity_name>` ile `begin` satırları arasında tanımlanmalıdır. Sinyaller **tüm processler tarafından erişilebilir durumundadır.**  

### Signal syntax

Sadece tip ataması ile tanımlama: `signal <name> : <type>;`

Default değer ile tanımlama ise şöyle gerçekleşir: `signal <name> : <type> := <initial_value>;`

* Sinyal değerlerine atama yapariken `:=` operatörü ile değil, `<=` operatörü ile atama yapılır.
* **myVariable** değişkeni her arttırılma operasyonu `:=` direkt o değişkeni arttırır.
* **mySignal** değişkeni ise her arttırılma operasyonunu direkt olarak gerçekleştirmez. Yapılan *son* değişikliği iterasyonun sonucunda gerçekleştirir. (Sadece **son** değişiklik tutulur.)

### Örnek kod çıktısı 1

```txt
# ** Note: ===== Process Begin =====
#    Time: 0 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 1, mySignal Value: 0
#    Time: 0 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 2, mySignal Value: 0
#    Time: 0 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 2, mySignal Value: 1
#    Time: 10 ns  Iteration: 0  Instance: /t06_signal
# ** Note: ===== Process Begin =====
#    Time: 10 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 3, mySignal Value: 1
#    Time: 10 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 4, mySignal Value: 1
#    Time: 10 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 4, mySignal Value: 2
#    Time: 20 ns  Iteration: 0  Instance: /t06_signal
# ** Note: ===== Process Begin =====
#    Time: 20 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 5, mySignal Value: 2
#    Time: 20 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 6, mySignal Value: 2
#    Time: 20 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 6, mySignal Value: 3
#    Time: 30 ns  Iteration: 0  Instance: /t06_signal
# ** Note: ===== Process Begin =====
#    Time: 30 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 7, mySignal Value: 3
#    Time: 30 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 8, mySignal Value: 3
#    Time: 30 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 8, mySignal Value: 4
#    Time: 40 ns  Iteration: 0  Instance: /t06_signal
# ** Note: ===== Process Begin =====
#    Time: 40 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 9, mySignal Value: 4
#    Time: 40 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 10, mySignal Value: 4
#    Time: 40 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 10, mySignal Value: 5
#    Time: 50 ns  Iteration: 0  Instance: /t06_signal
# ** Note: ===== Process Begin =====
#    Time: 50 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 11, mySignal Value: 5
#    Time: 50 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 12, mySignal Value: 5
#    Time: 50 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 12, mySignal Value: 6
#    Time: 60 ns  Iteration: 0  Instance: /t06_signal
# ** Note: ===== Process Begin =====
#    Time: 60 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 13, mySignal Value: 6
#    Time: 60 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 14, mySignal Value: 6
#    Time: 60 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 14, mySignal Value: 7
#    Time: 70 ns  Iteration: 0  Instance: /t06_signal
# ** Note: ===== Process Begin =====
#    Time: 70 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 15, mySignal Value: 7
#    Time: 70 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 16, mySignal Value: 7
#    Time: 70 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 16, mySignal Value: 8
#    Time: 80 ns  Iteration: 0  Instance: /t06_signal
# ** Note: ===== Process Begin =====
#    Time: 80 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 17, mySignal Value: 8
#    Time: 80 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 18, mySignal Value: 8
#    Time: 80 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 18, mySignal Value: 9
#    Time: 90 ns  Iteration: 0  Instance: /t06_signal
# ** Note: ===== Process Begin =====
#    Time: 90 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 19, mySignal Value: 9
#    Time: 90 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 20, mySignal Value: 9
#    Time: 90 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 20, mySignal Value: 10
#    Time: 100 ns  Iteration: 0  Instance: /t06_signal
# ** Note: ===== Process Begin =====
#    Time: 100 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 21, mySignal Value: 10
#    Time: 100 ns  Iteration: 0  Instance: /t06_signal
# ** Note: myVariable Value: 22, mySignal Value: 10
#    Time: 100 ns  Iteration: 0  Instance: /t06_signal
```

## Chapter 7

Bu bölümde sinyallerin *birden fazla processlerde işlenme* durumu işlenmiştir.

Bu bölümde daha önceki bölümlerde kullandığımz `wait;` ve `wait for` komutları da kullanılmıştır.

**Wait on** komutu içerisinde belirtilen sinyallerden her hangi biri veya ikisi birden değişirse çalışır, yoksa otomatik olarak durdurulmuş durumdadır.

`wait on <signal_name1>, <signal_name2> ...;`

**Wait Until** satırı içerisinde belirtilen durum gerçekleşene kadar durdurulmuş durumdadır.

`wait until <condition>;`

**Wait On, Wait Until ve Wait For** komutlarını bir arada tek seferde kullanabiliriz:

`wait on <signal_name1> until <condition> for <time_value>;`

* `CountUp` ve `CountDown` değerleri eş zamanlı olarak değiştirilir farklı satırlarda yazılsa bile. (Wait statementleri bekleidkleri için.)
* `wait on CountUp, CountDown;` satırında ise belirtilen bir veya daha fazla değişkenin değiştirilmesi sonucu son bulur.
* `wait until CountUp = CountDown;` satırında ise, belirtilen durum sağlandığında çalışır.

### Örnek kod çıktısı 2

```TXT
# ** Note: CountUp: 1CountDown: 9
#    Time: 0 ns  Iteration: 1  Instance: /t07_waitonuntil
# ** Note: CountUp: 2CountDown: 8
#    Time: 10 ns  Iteration: 1  Instance: /t07_waitonuntil
# ** Note: CountUp: 3CountDown: 7
#    Time: 20 ns  Iteration: 1  Instance: /t07_waitonuntil
# ** Note: CountUp: 4CountDown: 6
#    Time: 30 ns  Iteration: 1  Instance: /t07_waitonuntil
# ** Note: CountUp: 5CountDown: 5
#    Time: 40 ns  Iteration: 1  Instance: /t07_waitonuntil
# ** Note: JackPot!\nYani sayilar esit anlaminda.
#    Time: 40 ns  Iteration: 1  Instance: /t07_waitonuntil
# ** Note: CountUp: 6CountDown: 4
#    Time: 50 ns  Iteration: 1  Instance: /t07_waitonuntil
# ** Note: CountUp: 7CountDown: 3
#    Time: 60 ns  Iteration: 1  Instance: /t07_waitonuntil
# ** Note: CountUp: 8CountDown: 2
#    Time: 70 ns  Iteration: 1  Instance: /t07_waitonuntil
# ** Note: CountUp: 9CountDown: 1
#    Time: 80 ns  Iteration: 1  Instance: /t07_waitonuntil
# ** Note: CountUp: 10CountDown: 0
#    Time: 90 ns  Iteration: 1  Instance: /t07_waitonuntil
# ** Note: CountUp: 11CountDown: -1
#    Time: 100 ns  Iteration: 1  Instance: /t07_waitonuntil
```

## Chapter 8

*Daha önceki bölümlerde [**Mantıksa** ve **İlişkisel**](/T1-To-5_Notes.MD#tutorial-5)operatörler belirtilmiştir.*

### If, Else Syntax

```VHDL
if <condition> then
elsif <condition> then
else
end if;
```

`elsif` ve `else` opsiyoneldirv ve `elsif` operatörü birden fazla kullanılabilir.

**<condition>** bölümü **mantıksal** veya **ilişkisel** değerler içermeli ve *boolean* değerler döndürmelidir.

* `CountUp` ve `CountDown` değişkenlerine başlangıç olarak *0* ve *10* değerleri atanmıştır.
* Her 10 ns'de **aynı anda** `CountUp` ve `CountDown` değerleri değiştirilir, bu durumda aşağısında belirttiğimiz `wait on CountUp, CountDown;` kod parçacığı çalışacaktır.
* If, Elsif ve Else satırları *0 saniye* tüketirler.

### Örnek kod çıktısı 3

```TXT
# ** Note: CountDown is LARGER! :(
#    Time: 0 ns  Iteration: 0  Instance: /t08_ifelse
# ** Note: CountDown is LARGER! :(
#    Time: 0 ns  Iteration: 1  Instance: /t08_ifelse
# ** Note: CountDown is LARGER! :(
#    Time: 10 ns  Iteration: 1  Instance: /t08_ifelse
# ** Note: CountDown is LARGER! :(
#    Time: 20 ns  Iteration: 1  Instance: /t08_ifelse
# ** Note: CountDown is LARGER! :(
#    Time: 30 ns  Iteration: 1  Instance: /t08_ifelse
# ** Note: CounUp and CountDown are Equal. :/
#    Time: 40 ns  Iteration: 1  Instance: /t08_ifelse
# ** Note: CountUp is LARGER! :)
#    Time: 50 ns  Iteration: 1  Instance: /t08_ifelse
# ** Note: CountUp is LARGER! :)
#    Time: 60 ns  Iteration: 1  Instance: /t08_ifelse
# ** Note: CountUp is LARGER! :)
#    Time: 70 ns  Iteration: 1  Instance: /t08_ifelse
# ** Note: CountUp is LARGER! :)
#    Time: 80 ns  Iteration: 1  Instance: /t08_ifelse
# ** Note: CountUp is LARGER! :)
#    Time: 90 ns  Iteration: 1  Instance: /t08_ifelse
# ** Note: CountUp is LARGER! :)
#    Time: 100 ns  Iteration: 1  Instance: /t08_ifelse
```

## Chapter 9

`sensitivity list` kullanmamız öneriliyor eğer bir şeyleri tetikleyeceksek. Çünkü tüm sinayllere erişmek yerine sadece parametrede belirtilen sinyaller değiştiğinde aktifleşen bir process oluyor **(fakat hala tüm signal değişkenlerine erişebilir durumdadır!)**.

Bir şeyleri tetiklemek için önceden `wait` fonksiyonlarını kullanıyorduk, şimdi ise `sensitivity list` ler ile wait fonksiyonlarını kullanmadan işlemlerimizi gerçekleştiriyoruz.

### Process Sensitivity Syntax

```VHDL
process(<signal1>, <signal2>, ..) is
begin
    <main logic here>
end process;
```

* Sensitivity List kodu ["Register-Transfer-Level"](https://en.wikipedia.org/wiki/Register-transfer_level) kodu olarak da geçer.
* Bir *sensitivity list* process'i `wait on` fonksiyonu ile aynı değere sahiptir.
* Okunacak tüm sinyal değişkenleri **parametre olarak** tanımlanmalıdır. (Çünkü tetiklenme gerçekleşiyor)

### Örnek kod çıktısı 4

```TXT
# ** Note: PROCESS A: \tJackPot! \nWait On oldugu icin cagirildi.
#    Time: 40 ns  Iteration: 1  Instance: /t09_sensitivitylist
# ** Note: PROCESS B: JACKPOT! \nSensitivity List iÃ§erisinde cagirildi.
#    Time: 40 ns  Iteration: 1  Instance: /t09_sensitivitylist
```

## Chapter 10

VHDL'de en çok kullanılan değişken tipi `STD_LOGIC`'dir muhtemelen. Bu değişken **tek bit** tutar, tıpkı bir kablonun tek bir değer içermesi gibi. `STD_LOGIC` bize *integer* değişkeninden daha fazla kontrol edilebilme imkanı sağlıyor.

Normal şartlarda tek bit değeri **0** veya **1** olabilir fakat bu çok iyimser bir yaklaşım olurdu. Gerçek hayat problemlerinde bu değerlerin dışarısında istenmeyen veya beklenmeyen durumlar da vardır ve **STD_LOGIC** bize bu konu hakkında çok yardımcı oluyor.

`STD_LOGIC` değişkenini kullanabilmek için dosyamızın başına `library ieee;` kodu ile *IEEE* kütüphanesini yükleyip, `use ieee.std_logic_1164.all;` satırı ile kullanmamız gerekiyor.

### STD_LOGIC Syntax

```VHDL
SIGNAL Signal1 : STD_LOGIC := '0';
```

**`STD_LOGIC` değişkeni tablodaki değerleri alabilir.**

| Değer   | Açıklaması                                                  |
| ------- | ----------------------------------------------------------- |
| **'1'** | *Mantık 1*                                                  |
| **'0'** | *Mantık 0*                                                  |
| **'Z'** | *Yüksek Direnç (High impedance)*                            |
| **'W'** | *Zayıf sinyal, belirsiz (Weak signal can't tell if 0 or 1)* |
| **'L'** | *Zayıf pasif 0 (Weak 0, pulldown)*                          |
| **'H'** | *Zayıf aktif 1 (Weak 1, pullup)*                            |
| **'-'** | *Umursanmayan (Don't Care)*                                 |
| **'U'** | *Atanmamış (Uninitialized)*                                 |
| **'X'** | *Birden fazla driver (Unknown, multiple drivers)*           |

Genel olarak **1**,**0**, **U** ve **X** değerleriyle işlemlerimizi gerçekleştireceğiz. **U** ve **X** değişkenleri bize hataları ayıklama konusunda yardımcı olacaktır.

***NOT***: Eğer bir *sinyal*'e farklı process'lerde farklı değerler atıyorsak, bu işlemin adı artık **Multiple Drivers** olur. Eğer bir *sinyal* *multiple drivers* değerine sahipse bu **run-time error** veya başka bir hataya yol açmaz.

* `STD_LOGIC` print edebileceğimiz bir değerden daha fazlası, grafiklerini görebileceğimiz bir değişken olarak bulunur.

**`STD_LOGIC`** bu sorunu kendi içerisinde şöyle çözmüştür

|       | **U** | **X** | **0** | **1** | **Z** | **W** | **L** | **H** | **-** |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **1** | U     | X     | X     | 1     | 1     | 1     | 1     | 1     | X     |
| **0** | U     | X     | 0     | X     | 0     | 0     | 0     | 0     | X     |
| **U** | U     | U     | U     | U     | U     | U     | U     | U     | U     |
| **X** | U     | X     | X     | X     | X     | X     | X     | X     | X     |
| **Z** | U     | X     | 0     | 1     | Z     | W     | L     | H     | X     |
| **W** | U     | X     | 0     | 1     | W     | W     | W     | W     | X     |
| **L** | U     | X     | 0     | 1     | L     | W     | L     | W     | X     |
| **H** | U     | X     | 0     | 1     | H     | W     | W     | H     | X     |
| **-** | U     | X     | X     | X     | X     | X     | X     | X     | X     |

**Driver** durumlarını şöyle örneklerle kavrayabiliriz.

| Signal  | Driver A | Driver B | Result |
| ------- | -------- | -------- | ------ |
| Signal2 | 'Z'      | 'Z'      | 'Z'    |
| Signal2 | 'Z'      | '1'      | '1'    |
| Signal3 | '0'      | 'Z'      | '0'    |
| Signal3 | '0'      | '1'      | 'X'    |

### Örnek kod çıktısı 5

![T10-output-1]

![T10-output-2]

## Chapter 11: **STD_LOGIC_VECTOR**

Bir diğer en fazla kullanılan değişken tipi `STD_LOGIC_VECTOR` değişkenidir. Bu değişken içerisinde belirlediğimiz miktarda `STD_LOGIC` değişkeni barındırıyor.

### STD_LOGIC_VECTOR Syntax

```VHDL
signal <name> : std_logic_vector(<lsb> to <msb>) := <initial_value>;

signal <name> : std_logic_vector(<msb> downto <lsb>) := <initial_value>;
```

* `<name>` dediğimiz bölüm bizim sinyalimizin değişken adı oluyor.
* `<lsb>` en az değeri, `<msb>` en çok olacak değeri gösteriyor.
* `<initial_value>` bölümü ise opsiyonel olup değişkenlerimize atanacak değeri belirtir.
* `to` ile belirlediğimiz zaman artarak ilerleyen index numaralarımız, `downto` ile belirlediğimiz zaman azalarak ilerleyen index numaralarına sahip oluruz. **`downto` kullanılması önerilir.**

`signal MySlv : std_logic_vector(7 downto 0);` ile belirtirsek, 7'den 0'a doğru azalan bir sıra ile **STD_LOGIC** değişkenlerimizi oluşturur, **initialize etmez.**

`signal MySlv : std_logic_vector(0 downto 0);` ile belirtirsek, sadece 1 tane **STD_LOGIC** değerimiz oluşur.

`signal MySlv : std_logic_vector(-1 downto 0);` ile belirtisek bu sefer de içi boş olan bir değişkenimiz oluşur.

***NOT***: `STD_LOGIC_VECTOR` değişkenimize direkt olarak `STD_LOGIC`'in alabildiği değerleri verebiliriz. `Hexadecimal` değerler ve `Binary` değerler verebiliriz. (Her bit *1* ve *0* ile gösterildiği için atayabiliriz).

`Slv'right` ile **slv** değişkeninin en sağındaki değere, `Slv'left` ile **slv** değişkeninin en solundaki değere erişebiliriz. Böylece kodumuz sayılardan bağımsız olduğu için daha modüler bir yapıya sahip olmaktadır.

### Örnek kod çıktısı 6

![T11-output-1]

![T11-logic]

[T10-output-1]: T10_Out1.png
[T10-output-2]: T10_Out2.png
[T11-output-1]: T11_Out1.png
[T11-logic]: T11_Logic.svg
