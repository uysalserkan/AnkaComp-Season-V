; LODS: Loads AL or AX with data stored at the data segment offset address indexed by the SI register
; LODSB -> AL = DS:[SI]
            ; SI = SI +- 1
; LODSW -> AX = DS:[SI]
            ; SI = SI +- 2 
; STD for setting decrement (D=1)  D--> Direction Flag
; CLD for clearing increment (D=0) D--> Direction Flag

; lods example
mov si, 1ah ; si ya address ataniyor
mov [si], 1234h ; si ya atanan address e deger ataniyor
lodsb ; fills al - take a byte from memory location to al register - si 1 arttirilir         


mov si, 1ah ; si ya address atanir
mov [si-2], 1234h ; atanmis yerin gerisine yaziyoruz
sub si, 2 ; si posizyonunu guncelliyoruz sonraki operasyonu dogru gostermesi icin
lodsw ; fills ax - ayni isler sadece word aliyor.

ret
; programi sonlandiriyoruz