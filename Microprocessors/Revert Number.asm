;revert the hexadecimal digits of a word stored in ax
;given 0xabcd, we need to get 0xdcba
; note that we cannot simply rotate the number to left or right 16 times 
;since this would give the original number.

ORG 100H 

MOV AX, 0XABCD
CALL REVERT 
HLT

REVERT PROC
	; We need to swap the most significant byte with the least significant byte 
	XCHG AL, AH
	; Then we need to rotate each byte 4 times 
	MOV CL, 4
	ROR AL, CL 
	ROR AH, CL 
	RET 
REVERT ENDP