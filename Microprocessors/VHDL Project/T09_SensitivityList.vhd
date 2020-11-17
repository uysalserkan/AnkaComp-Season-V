ENTITY T09_SensitivityList IS
END ENTITY;

ARCHITECTURE sim OF T09_SensitivityList IS
    SIGNAL CountUp : INTEGER := 0;
    SIGNAL CountDown : INTEGER := 10;
BEGIN

    PROCESS IS
    BEGIN
        CountUp <= CountUp + 1;
        CountDown <= CountDown - 1;
        WAIT FOR 10 ns;

    END PROCESS;

    -- Process triggered using Wait On

    PROCESS IS
    BEGIN
        IF CountUp = CountDown THEN
            REPORT "PROCESS A: \tJackPot! \nWait On oldugu icin cagirildi.";
        END IF;

        WAIT ON CountUp, CountDown;

    END PROCESS;

    PROCESS (CountUp, CountDown) IS --Sensitivity List kullandığımız için bu 'Process' de otomatik çağırılır. 
    BEGIN

        IF CountUp = CountDown THEN
            REPORT "PROCESS B: JACKPOT! \nSensitivity List içerisinde cagirildi.";
        END IF;

    END PROCESS;

END ARCHITECTURE;