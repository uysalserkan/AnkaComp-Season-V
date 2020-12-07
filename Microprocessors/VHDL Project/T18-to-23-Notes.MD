# Tutorial 18 - 23 arasında bulunan önemli olabilecek notlar

## Chapter 18: HOW TO CREATE A TIMER IN VHDL

Şu ana kadar *time-delay* işlemini gerçekleştirmek için `wait for` fonksiyonunu kullanık. Fakat modüller içerisinde `wait for` fonksiyonunu kullanamayız, bu fonksiyon sadece *simülasyon* aşamasında kullanılır.

Mödüller için ise *clock cycles* kullanırız. Her dijital sistem **en az 1 clock signal**'e sahip olması gerekir. Eğer biz *clock frequency*'i 100MHz olarak biliyorsak, 1 saniyede *1 milyon* kere **clock cycle** çalışır.

Eğer istersek salise, saniye, dakika, saat veya gün clock-counter'i yapabiliriz fakat her şeyin bir alan işgal ettiğini kabul edersek saniye az alan işgal ederken gün'ün veya ay'ın işgal edeceği alan saniye ile kıyasla bayağı bir şekilde fazla olacaktır.

### Saniye Çıktısı

![saniye](T18_1.png)

### Dakika Çıktısı

![dakika](T18_2.png)

### Saat Çıktısı

![saat](T18_3.png)

* Saniye olarak çalıştırmak için `run 10 seconds`
* Dakika olarak çalıştırmak için `run 10 min`
* Saat olarak çalıştırmak için `run 10 hr`

### Counter Bit'ler şöyle gözükecektir

![counter-bits](T18_4.svg)

## Chapter 19: HOW TO USE A PROCEDURE IN VHDL

**Procedure** olarak tanıtılan yapı aslında geri bir değer döndürmeyen fonksiyonlardır fakat içerdikleri *inout* veya *out* parametrelerin değerlerini değiştirebilir

### Procedure Syntax

```VHDL
procedure <procedure_name> (signal|variable|constant <name1> : in|out|inout <type>;
                            signal|variable|constant <name2> : in|out|inout <type>;
                            ... ) is
    <declarations_for_use_within_the_procedure>
begin
    <code_performed_by_the_procedure_here>
end procedure;
```

Procedure başlangıçlarını tıpkı önceden yaptığımız gibi *is* ve *begin* kullanarak işlemlerimizi gerçekleştireceğimiz yere ulaşırız.
Parametre olarak *constants, variables, types, subtypes, ve aliases* içerebilirler fakat **signal** değerleri **içeremezler**.

Fonksiyonlardan farklı olarak, procedure'ler *wait* komutu içermek **zorunda değillerdir** fakat istenildiği zaman wait komutunu kullanabilir.

### Örnek Kod Çıktısı

![Procedure-Çıktısı](T19_1.png)

Aslında çıktımız bir öncekiler ile aynı fakat bu aşamada kodumuzu daha modüler yapıp daha az satır kod ile aynı işlemleri yapıyoruz.

## Chapter 20: HOW TO CREATE A FINITE-STATE MACHINE IN VHDL

x
