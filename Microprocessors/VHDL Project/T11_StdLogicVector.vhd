LIBRARY ieee;
USE ieee.std_logic_1164.ALL;

ENTITY T11_StdLogicVector IS
END ENTITY;

ARCHITECTURE sim OF T11_StdLogicVector IS
    SIGNAL Slv1 : STD_LOGIC_VECTOR(7 DOWNTO 0);
    SIGNAL Slv2 : STD_LOGIC_VECTOR(7 DOWNTO 0) := (OTHERS => '0');
    SIGNAL Slv3 : STD_LOGIC_VECTOR(7 DOWNTO 0) := (OTHERS => '1');
    SIGNAL Slv4 : STD_LOGIC_VECTOR(7 DOWNTO 0) := x"AA";
    SIGNAL Slv5 : STD_LOGIC_VECTOR(0 TO 7) := "10101010";
    SIGNAL Slv6 : STD_LOGIC_VECTOR(7 DOWNTO 0) := "00000001";

BEGIN

    -- Shift Register
    PROCESS IS

    BEGIN
        WAIT FOR 10 ns;

        FOR i IN 7 DOWNTO 1 LOOP
            -- FOR i IN Slv6'left DOWNTO Slv6'right + 1 LOOP
            Slv6(i) <= Slv6(i - 1);
        END LOOP;

        Slv6(0) <= Slv6(7);
        -- Slv6(Slv6'right) <= Slv6(Slv6'left);

    END PROCESS;

END ARCHITECTURE;