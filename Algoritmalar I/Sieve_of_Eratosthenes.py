# Author: Serkan UYSAL
# Python Version: 3.7

from math import floor
from math import sqrt
import time


def s_of_eratosthenes(range_) -> list:
    index = 1
    __list__ = []

    while index < range_:
        __list__.append(index)
        index += 1

    index = 2

    while index < floor(sqrt(range_)):
        if __list__[index - 1] != 0:
            j = index * index
            while j < range_:
                __list__[j - 1] = 0
                j = j + index

        index += 1

    i = 0
    __list__.sort()

    while i < range_:
        if __list__[i] == 0:
            __list__.pop(i)
            continue

        if __list__[i] == max(__list__):
            break

        i += 1

    return __list__


if __name__ == "__main__":
    start = time.time()
    print(s_of_eratosthenes(300000))
    end = time.time()
    print("[300.000] The speed of time is:", end - start)  # 69.09s
