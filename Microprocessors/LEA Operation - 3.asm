data1 DW 1234H
data2 DW 5678H
; Define data1 and data2, DW-> Define Word.

lea di, data2
; di ye data2 nin addressi atandi. (Pointer gibi)
lea dx, [di] 
; dx e di registerinde bulunan deger atandi
mov cx, [di]                               
; cx e di registerinin gosterdigi deger yazildi.
; difference of lea and mov operations.

mov cx, offset data2
; this is the same as lea operation.

lea si, data1
; address data1 with si register.

mov di, offset data2
; address data2 with di register.

mov bx, [si]
; exchange data1 and data2.

mov [si], cx
mov [di], bx

mov ax, [si]
mov bx, [di]
; Check the data contents of memory locations.

ret
; Stop program.

