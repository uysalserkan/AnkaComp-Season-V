LIBRARY ieee;
USE ieee.std_logic_1164.ALL;
USE ieee.numeric_std.ALL;

ENTITY T15_Mux IS
    PORT (

        -- Input parametreleri
        Sig1 : IN unsigned(7 DOWNTO 0);
        Sig2 : IN unsigned(7 DOWNTO 0);
        Sig3 : IN unsigned(7 DOWNTO 0);
        Sig4 : IN unsigned(7 DOWNTO 0);

        Sel : IN unsigned(1 DOWNTO 0);

        -- Output parametreleri

        Output : OUT unsigned(7 DOWNTO 0) -- output parametrelerine ; koymuyoruz. / ama neden /

    );
END ENTITY;

ARCHITECTURE rtl OF T15_Mux IS -- rtl = register transfer level
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
            WHEN OTHERS => --'U', 'X', '-', etc.
                Output <= (OTHERS => 'X');

        END CASE;

    END PROCESS;

END ARCHITECTURE;