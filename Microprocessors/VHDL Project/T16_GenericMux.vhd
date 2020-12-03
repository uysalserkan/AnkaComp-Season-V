LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
USE ieee.numeric_std.ALL;

ENTITY T16_GenericMux IS
    GENERIC (DataWidth : INTEGER);
    PORT (

        -- Input parametreleri

        Sig1 : IN signed(DataWidth - 1 DOWNTO 0);
        Sig2 : IN signed(DataWidth - 1 DOWNTO 0);
        Sig3 : IN signed(DataWidth - 1 DOWNTO 0);
        Sig4 : IN signed(DataWidth - 1 DOWNTO 0);

        Sel : IN signed(1 DOWNTO 0);

        -- Output Parametreleri

        Output : OUT signed(DataWidth - 1 DOWNTO 0)

    );
END ENTITY;

ARCHITECTURE rtl OF T16_GenericMux IS
BEGIN

    PROCESS (Sel, Sig1, Sig2, Sig3, Sig4) IS
    BEGIN

        CASE Sel IS
            WHEN "00" =>
                Output <= Sig1;
            WHEN "01" =>
                Output <= Sig2;
            WHEN "10" =>
                Output <= Sig3;
            WHEN "11" =>
                Output <= Sig4;
            WHEN OTHERS =>
                Output <= (OTHERS => 'X');

        END CASE;

    END PROCESS;

END ARCHITECTURE;