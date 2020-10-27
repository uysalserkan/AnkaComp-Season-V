mov ax, 34h
mov bx, 78h
; We write bit values to registers.

push ax
push bx
; We will push value to stack.

pop ax
pop bx
; We will write value which popped from stack

ret
; we stop program