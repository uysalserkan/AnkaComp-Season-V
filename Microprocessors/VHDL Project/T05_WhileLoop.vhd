ENTITY T05_WhileLoop IS
END ENTITY;

ARCHITECTURE sim OF T05_WhileLoop IS
BEGIN
    PROCESS IS
        VARIABLE i : INTEGER := 0;
    BEGIN
        WHILE i <= 10 LOOP
            REPORT "i=" & INTEGER'image(i);
            -- Bu satırda i={i} çıktısını verir.
            i := i + 2;
            -- Bu satırda ise i'yi forda yapamayacağımız gibi i + 2 işlemini gerçekleştiriyoruz.
        END LOOP;
        WAIT;
    END PROCESS;
END ARCHITECTURE;