import time


# Standart Solution
def fib(n):
    # result = 0
    if n == 1 or n == 2:
        result = 1
    else:
        result = fib(n - 1) + fib(n - 2)
    return result


# Memorized Solution
def fib_(n, mem):
    if mem[n] != None:
        return mem[n]
    elif n == 1 or n == 2:
        result = 1
    else:
        result = fib_(n - 1, mem) + fib_(n - 2, mem)
    mem[n] = result
    return result


def fib_mem(n):
    memo = [None] * (n + 1)
    return fib_(n, memo)


# Bottom-Up Solution
def bottom_up(n):
    if n == 1 or n == 2:
        return 1

    bottom_up = [None] * (n + 1)
    bottom_up[1] = 1
    bottom_up[2] = 1

    for i in range(3, n + 1):
        bottom_up[i] = bottom_up[i - 1] + bottom_up[i - 2]

    return bottom_up[n]


st = time.time()
# print(fib(35))
en = time.time()

print("Passed time: {:.2f}".format((en - st)))

st1 = time.time()
print(fib_mem(800))
en1 = time.time()

print("Passed time: {:.15f}".format((en1 - st1)))

st2 = time.time()
print(bottom_up(200000))
en2 = time.time()
print("Passed time: {:.15f}".format((en2 - st2)))
