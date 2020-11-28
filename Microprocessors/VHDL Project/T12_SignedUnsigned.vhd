LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
USE ieee.numeric_std.ALL;

ENTITY T12_SignedUnsigned IS
END ENTITY;

ARCHITECTURE sim OF T12_SignedUnsigned IS

    SIGNAL UnsCnt : unsigned(7 DOWNTO 0) := (OTHERS => '0');
    SIGNAL SigCnt : signed(7 DOWNTO 0) := (OTHERS => '0');

    SIGNAL Uns4 : unsigned(3 DOWNTO 0) := "1000";
    SIGNAL Sig4 : signed(3 DOWNTO 0) := "1000";

    SIGNAL Uns8 : unsigned(7 DOWNTO 0) := (OTHERS => '0');
    SIGNAL Sig8 : signed(7 DOWNTO 0) := (OTHERS => '0');

BEGIN
    PROCESS IS
    BEGIN

        WAIT FOR 10 ns;

        -- Wrapping Counter

        UnsCnt <= UnsCnt + 1;
        SigCnt <= SigCnt + 1;

        -- Adding Signals

        Uns8 <= Uns8 + Uns4;
        Sig8 <= Sig8 + Sig4;

    END PROCESS;

END ARCHITECTURE;