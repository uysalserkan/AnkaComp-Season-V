LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
USE ieee.numeric_std.ALL;

ENTITY T14_CaseWhen IS
END ENTITY;

ARCHITECTURE sim OF T14_CaseWhen IS

    SIGNAL Sig1 : unsigned(7 DOWNTO 0) := x"AA";
    SIGNAL Sig2 : unsigned(7 DOWNTO 0) := x"BB";
    SIGNAL Sig3 : unsigned(7 DOWNTO 0) := x"CC";
    SIGNAL Sig4 : unsigned(7 DOWNTO 0) := x"DD";

    SIGNAL Sel : unsigned(1 DOWNTO 0) := (OTHERS => '0');

    SIGNAL Output1 : unsigned(7 DOWNTO 0);
    SIGNAL Output2 : unsigned(7 DOWNTO 0);

BEGIN

    -- Stimuli for the selector signal
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

    -- MUX using if-then-else
    PROCESS (Sel, Sig1, Sig2, Sig3, Sig4) IS
    BEGIN

        IF Sel = "00" THEN
            Output1 <= Sig1;
        ELSIF Sel = "01" THEN
            Output1 <= Sig2;
        ELSIF Sel = "10" THEN
            Output1 <= Sig3;
        ELSIF Sel = "11" THEN
            Output1 <= Sig4;
        ELSE -- 'U', 'X', '-', etc. 
            Output1 <= (OTHERS => 'X');
        END IF;

    END PROCESS;

    -- Equivalent MUX using a case statement 
    PROCESS (Sel, Sig1, Sig2, Sig3, Sig4) IS
    BEGIN

        CASE Sel IS
            WHEN "00" =>
                Output2 <= Sig1;
            WHEN "01" =>
                Output2 <= Sig2;
            WHEN "10" =>
                Output2 <= Sig3;
            WHEN "11" =>
                Output2 <= Sig4;
            WHEN OTHERS => -- 'U', 'X', '-', etc.
                Output2 <= (OTHERS => 'X');
        END CASE;

    END PROCESS;

END ARCHITECTURE;