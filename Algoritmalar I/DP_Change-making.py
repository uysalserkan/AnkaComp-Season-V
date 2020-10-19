coins = [1, 2, 3, 5]
target = 25


def min_step_target(coins_, target_):
    # (LeetCode #322 - Medium) Change-Making Problemi - Dinamik Programlama
    result = [target_ + 1] * (target_ + 1)
    result[0] = 0

    for sub_target in range(1, target_ + 1):
        for coin in coins_:
            if coin <= sub_target:
                result[sub_target] = min(result[sub_target], 1 + result[sub_target - coin])

    return result


arr_ = min_step_target(coins, target)
print(arr_)
