; takes the absolute difference of ax and bx
; stores the result in dx

MOV AX, 1234H
MOV BX, 5678H

CMP AX, BX
JC DIFF2 ; jump if carry==1
DIFF1: MOV DX, AX
       SUB DX, BX
       JMP DONE
DIFF2: MOV DX, AX
       SUB DX, AX
DONE: HLT
