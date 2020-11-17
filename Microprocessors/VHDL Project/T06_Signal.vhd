ENTITY T06_Signal IS
END ENTITY;

ARCHITECTURE sim OF T06_Signal IS

    SIGNAL mySignal : INTEGER := 0; -- Programın her yerinden erişilebilen değişken olarak geçer. ARC. ile Begin arasında tanımlanır.
BEGIN
    PROCESS IS
        VARIABLE myVariable : INTEGER := 0; -- Sadece bu process içerisinden ulaşılabilen bir değişken olarak geçer.
    BEGIN
        REPORT "===== Process Begin =====";

        myVariable := myVariable + 1;
        mySignal <= mySignal + 1;

        REPORT "myVariable Value: " & INTEGER'image(myVariable) & ", mySignal Value: " & INTEGER'image(mySignal);

        myVariable := myVariable + 1;
        mySignal <= mySignal + 1;

        REPORT "myVariable Value: " & INTEGER'image(myVariable) & ", mySignal Value: " & INTEGER'image(mySignal);

        WAIT FOR 10 ns; -- 10ns yazamayız 10 ve ns yi ayrı yazmalıyız.

        REPORT "myVariable Value: " & INTEGER'image(myVariable) & ", mySignal Value: " & INTEGER'image(mySignal);
    END PROCESS;

END ARCHITECTURE;