;XLAT: Converts the contents of the AL register into a number
; stored in a memory table.
; indices 0   1    2    3
TABLE DB 3FH, 06H, 5BH, 4FH

mov al, 1; try with 0 to 3            
mov bx, offset TABLE
xlat