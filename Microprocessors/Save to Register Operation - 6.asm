; STOS: Stores AL or AX at the extra segment memory location addressed by the DI register.
; STOSB -> ES:[DI]=AI
        ; DI=DI +- 1
; STOSW -> ES:[DI]=AX
        ; DI=DI +- 2   // Same applies to DI for this instruction
                       
        
        
mov di, 10h ; address point edildi
mov ax, 1234h ; ax registerine deger atandi
stosb ; write contents of ax as byte to the extra segment address indexed by di
; ax de bulunan al registerindeki deger di nin isaret ettigi yere yazildi.

mov di, 20h
mov ax, 1234h
stosw ; write contents of ax as word to the extra segment address indexed by di
; ayni islemler sadece ax ve al birlikte yazildi.

ret
; programi bitir.