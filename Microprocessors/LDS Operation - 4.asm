; create a 32bit number
mov [0020h], 1234h ; sonu 20 olan address e deger yazilir
mov [0022h], 5678h ; sonu 22 olan address e deger yazilir

mov di, 0020h ; di addressi ile 20li olan deger isaret edildi

lds bx, [di] ; bx registerine address edilen deger yazilir.
; transfers the 32 bit number into bx and ds register