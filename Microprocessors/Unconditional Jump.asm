;Just Sample Code
XOR BX, AX

START: MOV AX, 1
       ADD AX, BX
       JMP NEXT
;...

NEXT: MOV BX, AX
      JMP START
;Kod her dongude BX i bir arttiriyor AX araciligi ile
