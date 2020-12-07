LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
USE ieee.numeric_std.ALL;

ENTITY T18_Timer IS
END ENTITY;
 
architecture sim of T18_Timer is
 
    -- We're slowing down the clock to speed up simulation time
    constant ClockFrequencyHz : integer := 10; -- 10 Hz
    constant ClockPeriod      : time := 1000 ms / ClockFrequencyHz;
 
    signal Clk     : std_logic := '1';
    signal nRst    : std_logic := '0';
    signal Seconds : integer;
    signal Minutes : integer;
    signal Hours   : integer;
 
begin
 
    -- The Device Under Test (DUT)
    i_Timer : entity work.T18_TimerMod(rtl)
    generic map(ClockFrequencyHz => ClockFrequencyHz)
    port map (
        Clk     => Clk,
        nRst    => nRst,
        Seconds => Seconds,
        Minutes => Minutes,
        Hours   => Hours);
 
    -- Process for generating the clock
    Clk <= not Clk after ClockPeriod / 2;
 
    -- Testbench sequence
    process is
    begin
        wait until rising_edge(Clk);
        wait until rising_edge(Clk);
 
        -- Take the DUT out of reset
        nRst <= '1';
 
        wait;
    end process;
 
end architecture;