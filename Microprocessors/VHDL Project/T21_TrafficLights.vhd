LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
USE ieee.numeric_std.ALL;

ENTITY T21_TrafficLights IS
    GENERIC (ClockFrequencyHz : NATURAL);
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

ARCHITECTURE rtl OF T21_TrafficLights IS
    -- Enumerated type declaration and state signal declaration
    TYPE t_State IS (NorthNext, StartNorth, North, StopNorth,
        WestNext, StartWest, West, StopWest);
    SIGNAL State : t_State;

    -- Calculate the number of clock cycles in minutes/seconds
    FUNCTION CounterVal(Minutes : INTEGER := 0;
        Seconds : INTEGER := 0)
        RETURN INTEGER
        IS
        VARIABLE TotalSeconds : INTEGER;
    BEGIN
        TotalSeconds := Seconds + Minutes * 60;
        RETURN TotalSeconds * ClockFrequencyHz - 1;
    END FUNCTION;
    -- Counter for counting clock periods, 1 minute max
    SIGNAL Counter : INTEGER RANGE 0 TO CounterVal(Minutes => 1) + 1;

BEGIN

    PROCESS (Clk) IS
    BEGIN

        IF rising_edge(Clk) THEN
            IF nRst = '0' THEN
                -- Reset values
                NorthRed <= '1';
                NorthYellow <= '0';
                NorthGreen <= '0';
                WestRed <= '1';
                WestYellow <= '0';
                WestGreen <= '0';
                State <= NorthNext;
                Counter <= 0;

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

                        -- Red light in all directions
                    WHEN NorthNext =>
                        NorthRed <= '1';
                        WestRed <= '1';
                        -- If 5 seconds have passed
                        IF Counter = CounterVal(Seconds => 5) THEN
                            Counter <= 0;
                            State <= StartNorth;
                        END IF;

                        -- Yellow light in north/south directions
                    WHEN StartNorth =>
                        NorthRed <= '1';
                        NorthYellow <= '1';
                        WestRed <= '1';
                        -- If 5 seconds have passed
                        IF Counter = CounterVal(Seconds => 5) THEN
                            Counter <= 0;
                            State <= North;
                        END IF;

                        -- Green light in north/south directions
                    WHEN North =>
                        NorthGreen <= '1';
                        WestRed <= '1';
                        -- If 1 minute has passed
                        IF Counter = CounterVal(Minutes => 1) THEN
                            Counter <= 0;
                            State <= StopNorth;
                        END IF;

                        -- Red and yellow light in north/south direction
                    WHEN StopNorth =>
                        NorthYellow <= '1';
                        WestRed <= '1';
                        -- If 5 seconds have passed
                        IF Counter = CounterVal(Seconds => 5) THEN
                            Counter <= 0;
                            State <= WestNext;
                        END IF;

                        -- Red light in all directions
                    WHEN WestNext =>
                        NorthRed <= '1';
                        WestRed <= '1';
                        -- If 5 seconds have passedf
                        IF Counter = CounterVal(Seconds => 5) THEN
                            Counter <= 0;
                            State <= StartWest;
                        END IF;

                        -- Yellow light in west/east direction
                    WHEN StartWest =>
                        NorthRed <= '1';
                        WestRed <= '1';
                        WestYellow <= '1';
                        -- If 5 seconds have passed
                        IF Counter = CounterVal(Seconds => 5) THEN
                            Counter <= 0;
                            State <= West;
                        END IF;

                        -- Green light in west/east direction
                    WHEN West =>
                        NorthRed <= '1';
                        WestGreen <= '1';
                        -- If 1 minute has passed
                        IF Counter = CounterVal(Minutes => 1) THEN
                            Counter <= 0;
                            State <= StopWest;
                        END IF;

                        -- Red and yellow light in west/east direction
                    WHEN StopWest =>
                        NorthRed <= '1';
                        WestYellow <= '1';
                        -- If 5 seconds have passed
                        IF Counter = CounterVal(Seconds => 5) THEN
                            Counter <= 0;
                            State <= NorthNext;
                        END IF;

                END CASE;
            END IF;
        END IF;

    END PROCESS;

END ARCHITECTURE;