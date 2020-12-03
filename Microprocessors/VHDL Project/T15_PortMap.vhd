LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
USE ieee.numeric_std.ALL;

ENTITY T15_PortMap IS
END ENTITY;

ARCHITECTURE sim OF T15_PortMap IS

    SIGNAL Sig1 : Unsigned (7 DOWNTO 0) := x"AA";
    SIGNAL Sig2 : Unsigned (7 DOWNTO 0) := x"BB";
    SIGNAL Sig3 : Unsigned (7 DOWNTO 0) := x"CC";
    SIGNAL Sig4 : Unsigned (7 DOWNTO 0) := x"DD";

    SIGNAL Sel : unsigned(1 DOWNTO 0) := (OTHERS => '0');

    SIGNAL Output : unsigned(7 DOWNTO 0);

BEGIN

    -- An instance of T15_Mux with architecture RL
    iMux1 : ENTITY work.T15_Mux(rtl) PORT MAP(
        Sel => Sel,
        Sig1 => Sig1,
        Sig2 => Sig2,
        Sig3 => Sig3,
        Sig4 => Sig4,
        Output => Output
        );

    -- Testbench process
    PROCESS IS
    BEGIN
        WAIT FOR 10 ns;
        Sel <= Sel + 1;
        WAIT FOR 10 ns;
        Sel <= Sel + 1;
        WAIT FOR 10 ns;
        Sel <= Sel + 1;
        WAIT FOR 10 ns;
        Sel <= Sel + 1;
        WAIT FOR 10 ns;
        Sel <= "UU";
        WAIT;

    END PROCESS;

END ARCHITECTURE;