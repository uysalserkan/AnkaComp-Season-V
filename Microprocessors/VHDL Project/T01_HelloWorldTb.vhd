entity T01_HelloWorldTb is
end entity;

-- Entity adı dosya adıyla ve sim adıyla aynı olmak zorunda galiba.


architecture sim of T01_HelloWorldTb is
begin

		process is
		begin
		
			report "Hello World!";
			wait;
			
			-- 1 kere "Hello World!" çıktısını bastırır ve bitirir programı.
		

		end process;


end architecture;