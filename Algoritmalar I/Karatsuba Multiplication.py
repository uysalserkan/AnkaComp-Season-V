#!/usr/bin/python

import time

"""
Pseudocode 
procedure karatsuba(num1, num2)
  if (num1 < 10) or (num2 < 10)
    return num1*num2
  /* calculates the size of the numbers */
  m = max(size_base10(num1), size_base10(num2))
  m2 = m/2
  /* split the digit sequences about the middle */
  high1, low1 = split_at(num1, m2)
  high2, low2 = split_at(num2, m2)
  /* 3 calls made to numbers approximately half the size */
  z0 = karatsuba(low1,low2)
  z1 = karatsuba((low1+high1),(low2+high2))
  z2 = karatsuba(high1,high2)
  return (z2*10^(2*m2))+((z1-z2-z0)*10^(m2))+(z0)
"""

def Karatsuba(num1, num2):
    if (num1 < 10) or (num2 < 10):
        return num1 * num2
    else:
        n = max(len(str(num1)), len(str(num2)))
        nby2 = n / 2

        a = num1 / 10 ** (nby2)
        b = num1 % 10 ** (nby2)
        c = num2 / 10 ** (nby2)
        d = num2 % 10 ** (nby2)

        ac = Karatsuba(a, c)
        bd = Karatsuba(b, d)

        ad_plus_bc = Karatsuba(a+b, c+d) - ac - bd

        return ac * 10 ** (2*nby2) + (ad_plus_bc * 10 ** nby2) + bd



def main():
    start = time.time()
    print(Karatsuba(100,200000))
    end = time.time()
    print("100 * 2000 multiplication spend time:", end-start)


if __name__ == '__main__':
    main()
