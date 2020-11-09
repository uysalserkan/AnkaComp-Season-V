NUMB DW 1234h

mov di, offset NUMB ; di registerini NUMB degiskenine point ettik
mov al, 0          ; al'yi 0 a atadik.

add al, [di]       ; al'ye di registerinin point ettigi degeri ekledik
inc di             ; di pointerini bir sonraki memory'i gosterdik

add al, [di]       ; gosterilen yeni di yerindeki degeri al ye tekrar ekledik

ret  ; programi bitirdik