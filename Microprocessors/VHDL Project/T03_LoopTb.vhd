ENTITY T03_LoopTb IS
END ENTITY;

ARCHITECTURE sim OF T03_LoopTb IS
BEGIN

    PROCESS IS
    BEGIN
        REPORT "Before Loop Statement";

        LOOP
            REPORT "Peekaboo!";
            EXIT;
            -- EXIT; komutu ile loop içersine girer ve END LOOP; satırını göremeden loop'dan çıkar.
            --WAIT FOR 10 ns;
            -- wait for 10 ns; komutu ile program döngüde kalır ve loop içerisinde sonlanır.
            -- "After Loop Statement" çıktısını göremeyiz çıktı bölümünde.
        END LOOP;

        REPORT "After Loop Statement";
        WAIT;
    END PROCESS;

END ARCHITECTURE;