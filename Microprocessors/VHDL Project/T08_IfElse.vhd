ENTITY T08_IfElse IS
END ENTITY;

ARCHITECTURE sim OF T08_IfElse IS
    SIGNAL CountUp : INTEGER := 0;
    SIGNAL CountDown : INTEGER := 10;

BEGIN
    PROCESS IS
    BEGIN
        CountUp <= CountUp + 1;
        CountDown <= CountDown - 1;
        WAIT FOR 10 ns;
    END PROCESS;

    PROCESS IS
    BEGIN
        IF CountUp > CountDown THEN -- Pseudocode gibi then kullanıyoruz. 
            REPORT "CountUp is LARGER! :) ";
            ELSIF CountUp < CountDown THEN
            REPORT "CountDown is LARGER! :( ";
            ELSE
            REPORT "CounUp and CountDown are Equal. :/ ";
        END IF;

        WAIT ON CountUp, CountDown;
    END PROCESS;

END ARCHITECTURE;