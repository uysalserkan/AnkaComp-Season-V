entity T02_WaitForTb is
end entity;

architecture sim of T02_WaitForTb is
begin

		process is
		begin
			-- This is the start of the process "thread" :)) 
			report "Peekaboo!";
			wait for 10 ns;
			
			-- 10 nanosecond'a kadar "Peekaboo!" çıktısını düzenli olarak bastırır.
		
			-- The process will loop back to the start from here so 
			-- we added `wait for 10 ns;` command below the report statement.
		end process;


end architecture;