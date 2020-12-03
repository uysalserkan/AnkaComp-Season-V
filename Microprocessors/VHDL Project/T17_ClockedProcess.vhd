LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
USE ieee.numeric_std.ALL;
ENTITY T17_ClockedProcess IS
END ENTITY;

ARCHITECTURE sim OF T17_ClockedProcess IS

    CONSTANT ClockFrequency : INTEGER := 100e6; -- 100MHz
    CONSTANT ClockPeriod : TIME := 1000 ms / ClockFrequency;

    SIGNAL Clk : STD_LOGIC := '1';
    SIGNAL nRst : STD_LOGIC := '0';
    SIGNAL Input : STD_LOGIC := '0';
    SIGNAL Output : STD_LOGIC;

BEGIN

    -- The Device Under Test (DUT)
    i_FlipFlop : ENTITY work.T17_FlipFlop(rtl)

        PORT MAP(
            Clk => Clk,
            nRst => nRst,
            Input => Input,
            Output => Output
        );

    -- Process for generating the clock.
    Clk <= NOT Clk AFTER ClockPeriod / 2;

    -- Testbench sequence

    PROCESS IS
    BEGIN
        nRst <= '1';

        WAIT FOR 20 ns;
        Input <= '1';
        WAIT FOR 22 ns;
        Input <= '0';
        WAIT FOR 6 ns;
        Input <= '1';
        WAIT FOR 20 ns;
        -- Reset the DUT
        nRst <= '0';

        WAIT;

    END PROCESS;
END ARCHITECTURE;