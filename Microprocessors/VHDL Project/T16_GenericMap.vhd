LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
USE ieee.numeric_std.ALL;

ENTITY T16_GenericMap IS
END ENTITY;

ARCHITECTURE sim OF T16_GenericMap IS

    CONSTANT DataWidth : INTEGER := 8;
    SIGNAL Sig1 : signed(DataWidth - 1 DOWNTO 0) := x"AA";
    SIGNAL Sig2 : signed(DataWidth - 1 DOWNTO 0) := x"BB";
    SIGNAL Sig3 : signed(DataWidth - 1 DOWNTO 0) := x"CC";
    SIGNAL Sig4 : signed(DataWidth - 1 DOWNTO 0) := x"DD";

    SIGNAL Sel : signed(1 DOWNTO 0) := (OTHERS => '0');

    SIGNAL Output : signed(DataWidth - 1 DOWNTO 0);

BEGIN

    iMux1 : ENTITY work.T16_GenericMux(rtl) -- ; koymuyoruz. 
        GENERIC MAP(DataWidth => DataWidth) -- ; koymuyoruz.
        PORT MAP(
            Sel => Sel,
            Sig1 => Sig1,
            Sig2 => Sig2,
            Sig3 => Sig3,
            Sig4 => Sig4,
            Output => Output
        );

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