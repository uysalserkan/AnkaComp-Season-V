LIBRARY ieee;
USE ieee.std_logic_1164.ALL;

ENTITY T10_StdLogic IS
END ENTITY;

ARCHITECTURE sim OF T10_StdLogic IS
    SIGNAL Signal1 : STD_LOGIC := '0';
    SIGNAL Signal2 : STD_LOGIC;
    SIGNAL Signal3 : STD_LOGIC;
BEGIN

    PROCESS IS
    BEGIN

        WAIT FOR 10 ns;
        Signal1 <= NOT Signal1;

    END PROCESS;

    -- Driver A
    PROCESS IS
    BEGIN

        Signal2 <= 'Z';
        Signal3 <= '0';
        WAIT;

    END PROCESS;

    -- Driver B
    PROCESS (Signal1) IS
    BEGIN

        IF Signal1 = '0' THEN
            Signal2 <= 'Z';
            Signal3 <= 'Z';

        ELSE
            Signal2 <= '1';
            Signal3 <= '1';

        END IF;

    END PROCESS;

END ARCHITECTURE;