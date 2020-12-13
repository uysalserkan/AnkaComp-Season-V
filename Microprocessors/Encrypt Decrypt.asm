; this code encrypts a hexadecimal digit stored in dx and decrypts it back to its original value
; xlat operation: set AL to DS:[BX + unsigned AL]

org 100h
jmp start

TABLE1 DB 1, 3, 5, 7, 8, 0XB, 0XD, 0XE, 0XF, 0, 2, 4, 6, 7, 0XA
TABLE2 DB 0XA, 0, 0XB, 1, 0XC, 2, 0X4, 3, 0XE, 4, 0XF, 5, 6, 7, 8, 9

START: MOV DX, 0XC 
		CALL ENCYRPT
		CALL DECYRPT
		
HLT

ENCYRPT PROC
		MOV AX, DX 
		MOV BX, OFFSET TABLE1 
		XLAT
		MOV DX, AX 
		RET 
ENCYRPT ENDP

DECYRPT PROC 
		MOV AX, DX 
		MOV BX, OFFSET TABLE2 
		XLAT 
		MOV DX, AX 
		RET 
DECYRPT ENDP