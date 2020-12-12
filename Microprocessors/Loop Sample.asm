;
org 100h
BLOCK1 DW 15, 2H, 3H, 4H
BLOCK2 DW 4 DUP(?)

CDL; clear direction flah (auto-increment)
MOV CX,4
MOV SI, OFFSET BLOCK1
MOV DI, OFFSET BLOCK2

L1: LODSW
    MOV DX, 2
    MUL DX
    STOSW
    LOOP L1
HLT
