mov al, 5 ; al registerine 5 degeri atiyoruz.
mov bl, 3 ; bl registerine 5 degeri atiyoruz.

or al, bl ; 5 -> 101 or 11 = 111 bu deger de 7 olarak al registerine ataniyor.

mov al, 5 ; al registerine 5 degeri atiyoruz.
mov bl, 3 ; bl registerine 5 degeri atiyoruz.

and al, bl ; 5 -> 101 and 11 = 01 bu deger de 1 olarak al registerine ataniyor.

or bl, 6 ; bl nin degeri 3 (11), karsilastirdigimiz deger 6 (110). Sonuc olarak bl'nin icersine 7 (111) degeri yazilir.
or al, 9 ; al nin degeri 1 (1) karsilastirilacak deger 9 (1001). Sonuc olarak icerisine 9 (1001) degeri yazilir.

xor bl, 4 ; bl nin degeri 7 (111) karsilastirilacak deger 4 (100). Sonuc olarak bl nin icerisine 3 (11) degeri yazdirilir.
xor al, 6 ; al nin degeri 9 (1001) karsilastirilacak deger 4 (100). Sonuc olarak al nin icerisine 0F (1101) degeri yazilir.

NOT al ; 0F olan degisken F0 olarak tekrar al icersine yazilir (One's Complement)
NEG bl ; 03 olan degeri FD olarak geri bl icerisine yazilir (Two's Complement)

SHL al, 1 ; al registerinin bit degerini (sign bit haric) belirtilen deger kadar sola kaydirir.
SHR al, 2 ; al registerinin bit degerini (sign bit haric) belirtilen deger kadar saga kaydirir.

mov al, 8
mov bl, 7

RCL al, 2 ; al registeri 10 oldu
ROL bl, 2 ; al registeri 28 oldu
RCL bl, 2 ; al registeri 10 oldu

; RC(L veya R), RO(L veya R) ne işe yarıyor??
; ROL = rotate left 
; ROR = rotate right 
; RCL = rotate right with carry 
; RCR = rotate left with carry
; TEST kismini yapamadik ://