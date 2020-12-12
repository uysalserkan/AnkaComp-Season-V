org 100h

MOV CX, 0
MOV AX, 1234H
MOV BX, 4321H
MOV AX, DX
CALL sumAxBx
hlt

sumAxBx PROC
        MOV DX, 0
        ADD DX, AX
        ADD DX, BX
        RET
sumAxBx ENDP
