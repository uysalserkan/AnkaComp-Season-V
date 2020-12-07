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

### Örnek Kod Çıktısı 1

![Procedure-Çıktısı](T19_1.png)

Aslında çıktımız bir öncekiler ile aynı fakat bu aşamada kodumuzu daha modüler yapıp daha az satır kod ile aynı işlemleri yapıyoruz.

## Chapter 20: HOW TO CREATE A FINITE-STATE MACHINE IN VHDL

Finite-State Machine (FSM), çıktı parametresi bir önceki duruma bağlı olur. Yani her çıktı bir önceki çıktıya bağımlıdır, bir önceki çıktı, o anki çıktıya direkt olarak etki eder *finite-state machine*'de.

Eğer zamana bağlı bir algoritma yazacaksak *VHDL* üzerinden, bunu yapmanın en iyi yolu *finite-state machine* ile yapmaktır.

Yapacağımız **finite-state machine** mekanizması bir trafik lambaları uygulaması olacak.

![traffic-lights](T20_1.gif)

Bu stateleri daha iyi kullanmak için VHDL içerisinde **enumerated type** oluşturuyoruz. Böylece sadece sşgned veya unsigned değerler içermek yerine daha farklı değerleri bir arada tutabiliriz.

### VHDL'de örnek bir Enumerated Type Syntaxı

```VHDL
type <type_name> is (<state_name1>, <state_name2>, ...);
signal <signal_name> : <type_name>;
```

### Basit, bir durumlu Finite-State Machine Kodu

```VHDL
process(Clk) is
begin
    if rising_edge(Clk) then
        if nRst = '0' then
            State <= <reset_state>;
        else
            case State is
                when <state_name> =>
                    <set_outputs_for_this_state_here>
                    if <state_change_condition_is_true> then
                        State <= <next_state_name>;
                    end if;
                ...
            end case;
        end if;
    end if;
end process;
```

Finite-state machine, tüm durumları kontrol edebilmeli.

### Örnek Kod Çıktısı 2

![Trafic-Lights](T20_2.png)

run 5 min ile bu çıktıyı elde edebiliriz.

## Chapter 20: HOW TO USE A FUNCTION IN VHDL
