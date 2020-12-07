LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
USE ieee.numeric_std.ALL;

ENTITY T20_TrafficLights IS
    GENERIC (ClockFrequencyHZ : INTEGER);
    PORT (
        Clk : IN STD_LOGIC;
        nRst : IN STD_LOGIC;
        NorthRed : OUT STD_LOGIC;
        NorthYellow : OUT STD_LOGIC;
        NorthGreen : OUT STD_LOGIC;
        WestRed : OUT STD_LOGIC;
        WestYellow : OUT STD_LOGIC;
        WestGreen : OUT STD_LOGIC
    );

END ENTITY;

ARCHITECTURE rtl OF T20_TrafficLights IS

    -- Enumerated type declaration and state signal declaration 
    TYPE t_State IS (NorthNext, StartNorth, North, StopNorth,
        WestNext, StartWest, West, StopWest
    );
    SIGNAL State : t_State;

    -- Counter for counting clock periods, 1 minute max
    SIGNAL Counter : INTEGER RANGE 0 TO ClockFrequencyHZ * 60;

BEGIN
    PROCESS (Clk) IS
    BEGIN

        IF rising_edge(Clk) THEN
            IF nRst = '0' THEN
                -- Reset Values
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
                        IF Counter = ClockFrequencyHZ * 5 - 1 THEN
                            Counter <= 0;
                            State <= StartNorth;
                        END IF;

                        -- Red and yellow in north/south direction
                    WHEN StartNorth =>
                        NorthRed <= '1';
                        NorthYellow <= '1';
                        WestRed <= '1';
                        -- If 5 seconds have passed
                        IF Counter = ClockFrequencyHZ * 5 - 1 THEN
                            Counter <= 0;
                            State <= North;
                        END IF;

                        -- Green in north/south direction
                    WHEN North =>
                        NorthGreen <= '1';
                        WestRed <= '1';
                        -- If 1 minute has passed
                        IF Counter = ClockFrequencyHz * 60 - 1 THEN
                            Counter <= 0;
                            State <= StopNorth;
                        END IF;

                        -- Yellow in north/south direction
                    WHEN StopNorth =>
                        NorthYellow <= '1';
                        WestRed <= '1';
                        -- If 5 seconds have passed
                        IF Counter = ClockFrequencyHz * 5 - 1 THEN
                            Counter <= 0;
                            State <= WestNext;
                        END IF;

                        -- Red in all directions
                    WHEN WestNext =>
                        NorthRed <= '1';
                        WestRed <= '1';
                        -- If 5 seconds have passed
                        IF Counter = ClockFrequencyHz * 5 - 1 THEN
                            Counter <= 0;
                            State <= StartWest;
                        END IF;

                        -- Red and yellow in west/east direction
                    WHEN StartWest =>
                        NorthRed <= '1';
                        WestRed <= '1';
                        WestYellow <= '1';
                        -- If 5 seconds have passed
                        IF Counter = ClockFrequencyHz * 5 - 1 THEN
                            Counter <= 0;
                            State <= West;
                        END IF;

                        -- Green in west/east direction
                    WHEN West =>
                        NorthRed <= '1';
                        WestGreen <= '1';
                        -- If 1 minute has passed
                        IF Counter = ClockFrequencyHz * 60 - 1 THEN
                            Counter <= 0;
                            State <= StopWest;
                        END IF;

                        -- Yellow in west/east direction
                    WHEN StopWest =>
                        NorthRed <= '1';
                        WestYellow <= '1';
                        -- If 5 seconds have passed
                        IF Counter = ClockFrequencyHz * 5 - 1 THEN
                            Counter <= 0;
                            State <= NorthNext;
                        END IF;

                END CASE;
            END IF;
        END IF;
    END PROCESS;
END ARCHITECTURE;