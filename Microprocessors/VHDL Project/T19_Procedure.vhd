LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
USE ieee.numeric_std.ALL;

ENTITY T19_Procedure IS
END ENTITY;

ARCHITECTURE sim OF T19_Procedure IS

    -- We're slowing down the clock to speed up simulation time
    CONSTANT ClockFrequencyHZ : INTEGER := 1;
    CONSTANT ClockPeriod : TIME := 1000 ms / ClockFrequencyHZ;

    SIGNAL Clk : STD_LOGIC := '1';
    SIGNAL nRst : STD_LOGIC := '0';
    SIGNAL Seconds : INTEGER;
    SIGNAL Minutes : INTEGER;
    SIGNAL Hours : INTEGER;

BEGIN
    -- The Device Under test (DUT)
    i_Timer : ENTITY work.T19_TimerMod(rtl)
        GENERIC MAP(ClockFrequencyHZ => ClockFrequencyHZ)
        PORT MAP(
            Clk => Clk,
            nRst => nRst,
            Seconds => Seconds,
            Minutes => Minutes,
            Hours => Hours
        );

    -- Process for generating clock
    Clk <= NOT Clk AFTER ClockPeriod / 2;

    --Testbench sequence
    PROCESS IS
    BEGIN
        WAIT UNTIL rising_edge(Clk);
        WAIT UNTIL rising_edge(Clk);

        nRst <= '1';
        WAIT;

    END PROCESS;

END ARCHITECTURE;