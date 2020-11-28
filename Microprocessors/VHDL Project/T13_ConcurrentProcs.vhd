LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
USE ieee.numeric_std.ALL;

ENTITY T13_ConcurrentProcs IS
END ENTITY;

ARCHITECTURE sim OF T13_ConcurrentProcs IS

    SIGNAL Uns : unsigned(5 DOWNTO 0) := (OTHERS => '0');
    SIGNAL Mul1 : unsigned(7 DOWNTO 0);
    SIGNAL Mul2 : unsigned(7 DOWNTO 0);
    SIGNAL Mul3 : unsigned(7 DOWNTO 0);
BEGIN
    PROCESS IS
    BEGIN
        Uns <= Uns + 1;

        WAIT FOR 10 ns;

    END PROCESS;

    -- Process multiplying Uns by 4
    PROCESS IS
    BEGIN

        Mul1 <= Uns & "00"; -- Uns 6 bit olduğu için sonuna 2 bit de biz el ile ekliyoruz.

        WAIT ON Uns;

    END PROCESS;

    -- Equivalent process using sensitivity list
    PROCESS (Uns) IS
    BEGIN

        Mul2 <= Uns & "00";

    END PROCESS;

    -- Equivalent process using a concurrent statement
    Mul3 <= Uns & "00";

END ARCHITECTURE;