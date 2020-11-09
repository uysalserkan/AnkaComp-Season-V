ENTITY T04_ForLoopTb IS
END ENTITY;

ARCHITECTURE sim OF T04_ForLoopTb IS
BEGIN
    PROCESS IS
    BEGIN
        FOR i IN 1 TO 10 LOOP
            REPORT "i=" & INTEGER'image(i);
            -- Bu satırda i={i} çıktısını verir.
        END LOOP;
        WAIT;
    END PROCESS;
END ARCHITECTURE;