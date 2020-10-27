; MOVS: Transfers a byte, word or doubleword from the data
; segment location addressed by SI to the extra segment location
; addressed by DI
; MOVSB, MOVSW, MOVSD

data1 DW 1234H ; define data1

lea si, data1 ; data1 addressi si ye atandi
mov di, 1bh ; 1b addressi yazildi
movsb ; transfer a byte from data segment to extra segment

lea si, data1
mov di, 1bh
movsw ; transfer a word from data segment to extra segment