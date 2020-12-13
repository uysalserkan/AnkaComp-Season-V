; Find how many odd and even numbers are in an array
; store the count for odd in bx, and for even in dx


ORG 100H

ARRAY DW 8, 11, 43, 56, 507, 608, 0, 123, 17, 13
COUNT DW 10

CLD; AUTO-INCREMENT
MOV CX, COUNT 
MOV SI, OFFSET ARRAY 

MOV BX, 0
MOV DX, 0

; main loop through all elements
L0:
	LODSW ; Load as word, since they are stored as words
	SHR AX, 1; Shift right th ax by 1 bit so that the least significant bit wil be copied to carry flag
	JNC EVEN: ; if carry is 1 the odd, otherwise even 
	INC BX
	JMP CNT
	
EVEN:
	INC DX 
CNT: ;continue 
	LOOP L0 

MOV AX, 0; clear ax 
HLT