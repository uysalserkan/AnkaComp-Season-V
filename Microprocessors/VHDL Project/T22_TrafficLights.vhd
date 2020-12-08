LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
USE ieee.numeric_std.ALL;

ENTITY T22_TrafficLights IS
    GENERIC (ClockFrequencyHz : INTEGER);
    PORT (
        Clk : IN STD_LOGIC;
        nRst : IN STD_LOGIC; -- Negative reset
        NorthRed : OUT STD_LOGIC;
        NorthYellow : OUT STD_LOGIC;
        NorthGreen : OUT STD_LOGIC;
        WestRed : OUT STD_LOGIC;
        WestYellow : OUT STD_LOGIC;
        WestGreen : OUT STD_LOGIC);
END ENTITY;

ARCHITECTURE rtl OF T22_TrafficLights IS

    -- Calculate the Number of clock in minutes/seconds
    FUNCTION CounterVal(Minutes : INTEGER := 0;
        Seconds : INTEGER := 0) RETURN INTEGER
        IS
        VARIABLE TotalSeconds : INTEGER;
    BEGIN
        TotalSeconds := Seconds + Minutes * 60;
        RETURN TotalSeconds * ClockFrequencyHz - 1;
    END FUNCTION;

    -- Enumerated type declaration and state signal decleration

    TYPE t_state IS (NorthNext, StartNorth, North, StopNorth,
        WestNext, StartWest, West, StopWest);

    SIGNAL State : t_State;

    -- Counter for counting clock periods, 1 minute maximum
    SIGNAL Counter : INTEGER RANGE 0 TO ClockFrequencyHz * 60;

BEGIN

    PROCESS (Clk) IS

        -- This is impure function reads and drives the Counter Signal
        -- which is not on the parameter list
        IMPURE FUNCTION CounterExpired(Minutes : INTEGER := 0; Seconds : INTEGER := 0)
            RETURN BOOLEAN
            IS
        BEGIN
            IF Counter = CounterVal(Minutes, Seconds) THEN
                Counter <= 0;
                RETURN true;
            ELSE
                RETURN false;
            END IF;
        END FUNCTION;
    BEGIN
        IF rising_edge(Clk) THEN
            IF nRst = '0' THEN
                -- Reset values
                State <= NorthNext;
                Counter <= 0;
                NorthRed <= '1';
                NorthYellow <= '0';
                NorthGreen <= '0';
                WestRed <= '1';
                WestYellow <= '0';
                WestGreen <= '0';

            ELSE
                -- Default values
                NorthRed <= '0';
                NorthYellow <= '0';
                NorthGreen <= '0';
                WestRed <= '0';
                WestYellow <= '0';
                WestGreen <= '0';

                Counter <= Counter + 1;

                CASE State IS

                        -- Red in all directions
                    WHEN NorthNext =>
                        NorthRed <= '1';
                        WestRed <= '1';
                        -- If 5 seconds have passed
                        IF CounterExpired(Seconds => 5) THEN
                            State <= StartNorth;
                        END IF;

                        -- Red and yellow in north/south direction
                    WHEN StartNorth =>
                        NorthRed <= '1';
                        NorthYellow <= '1';
                        WestRed <= '1';
                        -- If 5 seconds have passed
                        IF CounterExpired(Seconds => 5) THEN
                            State <= North;
                        END IF;

                        -- Green in north/south direction
                    WHEN North =>
                        NorthGreen <= '1';
                        WestRed <= '1';
                        -- If 1 minute has passed
                        IF CounterExpired(Minutes => 1) THEN
                            State <= StopNorth;
                        END IF;

                        -- Yellow in north/south direction
                    WHEN StopNorth =>
                        NorthYellow <= '1';
                        WestRed <= '1';
                        -- If 5 seconds have passed
                        IF CounterExpired(Seconds => 5) THEN
                            State <= WestNext;
                        END IF;

                        -- Red in all directions
                    WHEN WestNext =>
                        NorthRed <= '1';
                        WestRed <= '1';
                        -- If 5 seconds have passed
                        IF CounterExpired(Seconds => 5) THEN
                            State <= StartWest;
                        END IF;

                        -- Red and yellow in west/east direction
                    WHEN StartWest =>
                        NorthRed <= '1';
                        WestRed <= '1';
                        WestYellow <= '1';
                        -- If 5 seconds have passed
                        IF CounterExpired(Seconds => 5) THEN
                            State <= West;
                        END IF;

                        -- Green in west/east direction
                    WHEN West =>
                        NorthRed <= '1';
                        WestGreen <= '1';
                        -- If 1 minute has passed
                        IF CounterExpired(Minutes => 1) THEN
                            State <= StopWest;
                        END IF;

                        -- Yellow in west/east direction
                    WHEN StopWest =>
                        NorthRed <= '1';
                        WestYellow <= '1';
                        -- If 5 seconds have passed
                        IF CounterExpired(Seconds => 5) THEN
                            State <= NorthNext;
                        END IF;

                END CASE;

            END IF;
        END IF;
    END PROCESS;

END ARCHITECTURE;