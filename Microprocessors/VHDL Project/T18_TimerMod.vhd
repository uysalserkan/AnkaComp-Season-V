LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
USE ieee.numeric_std.ALL;

ENTITY T18_TimerMod IS
    GENERIC (ClockFrequencyHz : INTEGER);
    PORT (
        Clk : IN STD_LOGIC;
        nRst : IN STD_LOGIC; -- Negative reset
        Seconds : INOUT INTEGER;
        Minutes : INOUT INTEGER;
        Hours : INOUT INTEGER);
END ENTITY;

ARCHITECTURE rtl OF T18_TimerMod IS

    -- Signal for counting clock periods
    SIGNAL Ticks : INTEGER;

BEGIN

    PROCESS (Clk) IS
    BEGIN
        IF rising_edge(Clk) THEN

            -- If the negative reset signal is active
            IF nRst = '0' THEN
                Ticks <= 0;
                Seconds <= 0;
                Minutes <= 0;
                Hours <= 0;
            ELSE

                -- True once every second
                IF Ticks = ClockFrequencyHz - 1 THEN
                    Ticks <= 0;

                    -- True once every minute
                    IF Seconds = 59 THEN
                        Seconds <= 0;

                        -- True once every hour
                        IF Minutes = 59 THEN
                            Minutes <= 0;

                            -- True once a day
                            IF Hours = 23 THEN
                                Hours <= 0;
                            ELSE
                                Hours <= Hours + 1;
                            END IF;

                        ELSE
                            Minutes <= Minutes + 1;
                        END IF;

                    ELSE
                        Seconds <= Seconds + 1;
                    END IF;

                ELSE
                    Ticks <= Ticks + 1;
                END IF;

            END IF;
        END IF;
    END PROCESS;

END ARCHITECTURE;