ENTITY T07_WaitOnUntil IS
END ENTITY;

ARCHITECTURE sim OF T07_WaitOnUntil IS
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
        WAIT ON CountUp, CountDown;
        REPORT "CountUp: " & INTEGER'image(CountUp) & "CountDown: " & INTEGER'image(CountDown);
    END PROCESS;

    PROCESS IS
    BEGIN
        WAIT UNTIL Countup = CountDown;
        REPORT "JackPot!\nYani sayilar esit anlaminda."; -- Türkçe karakterler kullanma.
    END PROCESS;

END ARCHITECTURE;