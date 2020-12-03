LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
USE ieee.numeric_std.ALL;

ENTITY T17_FlipFlop IS
    PORT (

        -- Input Params

        Clk : IN STD_LOGIC;
        nRst : IN STD_LOGIC;
        Input : IN STD_LOGIC;

        -- Output Params

        Output : OUT STD_LOGIC
    );
END ENTITY;

ARCHITECTURE rtl OF T17_FlipFlop IS
BEGIN

    PROCESS (Clk) IS
    BEGIN

        IF rising_edge(Clk) THEN
            IF nRst = '0' THEN
                Output <= '0';

            ELSE
                Output <= Input;

            END IF;
        END IF;

    END PROCESS;

END ARCHITECTURE;