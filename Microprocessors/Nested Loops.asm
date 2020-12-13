; nested for loop example

ORG 100H;

MOV AX, 0
MOV BX, 0
MOV DX, 0

MOV CX, 3

L0:
	PUSH CX 
	MOV CX, 2
	L1:
		PUSH CX
		MOV CX, 1
		L2:
			INC AX 
			LOOP L2 
		POP CX 
		INC BX 
		LOOP L1 
	POP CX 
	INC DX 
	LOOP L0 

; END OF LOOPS 
HLT