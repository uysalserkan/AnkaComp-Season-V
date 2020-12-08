LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
USE ieee.numeric_std.ALL;

ENTITY T22_ImpureFunction IS
END ENTITY;

ARCHITECTURE sim OF T22_ImpureFunction IS
    -- We are using a low clock frequency to speed up the simulation
    CONSTANT ClockFrequencyHz : INTEGER := 100; -- 100 Hz
    CONSTANT ClockPeriod : TIME := 1000 ms / ClockFrequencyHz;

    SIGNAL Clk : STD_LOGIC := '1';
    SIGNAL nRst : STD_LOGIC := '0';
    SIGNAL NorthRed : STD_LOGIC;
    SIGNAL NorthYellow : STD_LOGIC;
    SIGNAL NorthGreen : STD_LOGIC;
    SIGNAL WestRed : STD_LOGIC;
    SIGNAL WestYellow : STD_LOGIC;
    SIGNAL WestGreen : STD_LOGIC;

BEGIN

    -- The Device Under Test (DUT)
    i_TrafficLights : ENTITY work.T22_TrafficLights(rtl)
        GENERIC MAP(ClockFrequencyHz => ClockFrequencyHz)
        PORT MAP(
            Clk => Clk,
            nRst => nRst,
            NorthRed => NorthRed,
            NorthYellow => NorthYellow,
            NorthGreen => NorthGreen,
            WestRed => WestRed,
            WestYellow => WestYellow,
            WestGreen => WestGreen);

    -- Process for generating clock
    Clk <= NOT Clk AFTER ClockPeriod / 2;

    -- Testbench sequence
    PROCESS IS
    BEGIN
        WAIT UNTIL rising_edge(Clk);
        WAIT UNTIL rising_edge(Clk);

        -- Take the DUT out of reset
        nRst <= '1';

        WAIT;
    END PROCESS;

END ARCHITECTURE;