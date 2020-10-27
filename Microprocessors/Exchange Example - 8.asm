; XCHG: Exchanges the contents of a register with the contents of
; any other register or memory location        
; XCHG AL, CL -> Exchanges the contents of AL and CL

mov si, 1ah
mov [si], 1234h

mov ax, 5678h

xchg ax, [si] ; si nin isaret ettigi addressin degerini ax'e yaz si nin isaret ettigi degeri ax'in onceki degeri yap.
mov bx, [si] ; bx e si'nin isaret ettigi degeri yaz