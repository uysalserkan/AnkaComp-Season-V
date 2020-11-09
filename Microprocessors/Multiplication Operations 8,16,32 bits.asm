; multiplication ornekleri -- 8bit, 16bit, 32bit

; 8bit ornegi
mov al, 2
mov bl, 4
mul bl ; bu operasyon direkt olarak al ile yapilip al'ye geri yazilir.           
       ; sonuc 8 olarak al de bulunur.

; 16bit ornegi

mov al, 0xffh
mov bl, 0x2h
mul bl  ; islem ilk once 8bit olarak baslar fakat 16bit e (ah kismina) tasar
        ; sonuc olarak ah ve al birlikte kullanilir.
        
; 32bit ornegi
mov ax, 0xffffh
mov bx, 0xffffh
mul bx  ; olusan sonuc ax ve dx bir register gibi davranarak yazilir
        ; ax en yuksek degeri tutar dx dusuk degeri.


mov al, -2
mov bl, 4
imul bl ; 2 component olarak yazdirilir.


