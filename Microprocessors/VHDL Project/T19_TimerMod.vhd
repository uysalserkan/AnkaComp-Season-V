LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
USE ieee.numeric_std.ALL;

ENTITY T19_TimerMod IS
    GENERIC (ClockFrequencyHZ : INTEGER);
    PORT (
        Clk : IN STD_LOGIC;
        nRst : IN STD_LOGIC;
        Seconds : INOUT INTEGER;
        Minutes : INOUT INTEGER;
        Hours : INOUT INTEGER
    );
END ENTITY;

ARCHITECTURE rtl OF T19_TimerMod IS

    -- Signal for counting clock periods 
    SIGNAL Ticks : INTEGER;

    PROCEDURE IncrementWrap(
        SIGNAL Counter : INOUT INTEGER;
        CONSTANT WrapValue : IN INTEGER;
        CONSTANT Enable : IN BOOLEAN;
        VARIABLE Wrapped : OUT BOOLEAN
    ) IS
    BEGIN

        IF Enable THEN
            IF Counter = WrapValue - 1 THEN
                Wrapped := true;
                Counter <= 0;
            ELSE
                Wrapped := false;
                Counter <= Counter + 1;
            END IF;
        END IF;
    END PROCEDURE;

BEGIN
    PROCESS (Clk) IS
        VARIABLE Wrap : BOOLEAN;

    BEGIN

        IF rising_edge(Clk) THEN

            -- If the negative reset signal is active
            IF nRst = '0' THEN
                Ticks <= 0;
                Seconds <= 0;
                Minutes <= 0;
                Hours <= 0;
            ELSE
                -- Cascade counters
                IncrementWrap(Ticks, ClockFrequencyHZ, true, Wrap);
                IncrementWrap(Seconds, 60, Wrap, Wrap);
                IncrementWrap(Minutes, 60, Wrap, Wrap);
                IncrementWrap(Hours, 24, Wrap, Wrap);

            END IF;
        END IF;
    END PROCESS;
END ARCHITECTURE;