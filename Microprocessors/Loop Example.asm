.DATA ;start data segment
      ; DUP duplicates ? 100 times,
      ; ? Means uninitialized
      ; 4 DUP(2) = 2,2,2,2

BLOCK1 DW 100 DUP(?) ; 100 words for BLOCK1 -- reserve 100 word locations with uninitialized mark
BLOCK2 DW 100 DUP(?) ; 100 words for BLOCK2 -- reserve 100 word locations with uninitialized mark
.CODE ;start code segment
.STARTUP ;start program

MOV AX,DS ; overlap DS and ES
MOV ES, AX

CLD ; select auto-increment

MOV CX, 100 ;load counter value
MOV SI, OFFSET BLOCK1 ;address BLOCK1
MOV DI, OFFSET BLOCK2 ;address BLOCK2


L1: LODSW ; LOAD AX with BLOCK1
    ADD AX, ES:[DI] ; add BLOCK2
    STOSW ;save answer
    LOOP L1 ;repeat 100 times

; emülasyonu çok tuhaf bir kod parçası
