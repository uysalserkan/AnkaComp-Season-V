mov ax, 0xffffh ; 1 register'e atanabilecek maks deger ata.

mov cx, 1h ; cx'e 1 degerini ata

add ax, cx ; ax'e cx ekledigimizde flag degerleri degisiyor. cf pf af vs..             
                                                                
mov bx, 1234h ; bx'e 1234 atanir.

mov dx, 1h   ; dx e 1 atanir
 
adc bx, dx ; onceki ax degerindeki gelen deger buraya eklenir. (totalde 2 eklenmis olur)