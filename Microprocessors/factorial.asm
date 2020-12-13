; factorial example for a number stored in dl 

ORG 100H 

MOV AL, 1 
MOV DL, 4

MOV CX, DX 

L0:
	MUL CL
	LOOP L0 
HLT