; Find the largest element in an array and store it in dx
; we know the array size

ORG 100H

ARRAY DB 11H, 22H, 88H, 99H, 33H, 77H, 44H, 55H
COUNT DW 8


CLD; AUTO-INCREMENT
MOV CX, COUNT 
MOV SI, OFFSET ARRAY 
MOV BX, 0; COMPARE ALL WİTH BX AND STORE THE TEMP RESULT THERE IN.

L0:
	LODSB
	CMP AX,BX 
	JB CONTINUE
	MOV BX, AX 
	
CONTINUE:
	LOOP L0
	MOV DX, BX 

HLT