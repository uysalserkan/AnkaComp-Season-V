# Tutorial 2'de bulunan ayrıntı notlar

`wait;` fonksiyonu direkt programı durdururken `wait for` ile belirli döngüye alabiliriz.

Eğer hiç `wait` fonksiyonunu kullanmazsak program **begin** ve **end process** arasında sonsuz döngüye girer.

**Syntax**
```VHDL 
    wait for <time_value> <time_unit>;

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