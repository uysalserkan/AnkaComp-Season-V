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
