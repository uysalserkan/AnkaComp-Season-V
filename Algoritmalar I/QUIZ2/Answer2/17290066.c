/**
 * @file 17290066.c
 * @author Serkan UYSAL (uysalserkan08@gmail.com)
 * @brief An algorithm for calculating lgn value.
 *        Logaritma fonksiyonunu kullanmadan
 *        ceil(lg n)
 *        değerini hesaplayan C dilinde kod yazınız.
 *        (Logaritmanın tabanı 2 dir.) (50 puan)
 *        Örnek: girdi=> 7, çıktı=>2
 *        Örnek: girdi=> 15, çıktı=>3
 *        Örnek: girdi=> 100, çıktı=>6
 * @version 0.1
 * @date 2020-11-05
 * @compiler: gcc version 9.3.0 (Ubuntu 9.3.0-10ubuntu2)
 * @copyright Copyright (c) Serkan UYSAL - 2020
 * 
 */
#include <stdio.h>

// Function prototypes.
int getValue(int);
int getExponential(int, int);

int main()
{
    int value;
    scanf("%d", &value);
    printf("%d", getValue(value));

    return 0;
}

int getExponential(int base, int degree)
{
    // Math kütüphanesini kullanmak istemediğim için pow() fonksiyonunu kendim yazdım.
    int i = 0;
    int value = 1;
    while (i < degree)
    {
        i++;
        value *= base;
    }
    return value;
}

int getValue(int value)
{
    for (int i = 0; i < value; i++)
    {
        if (getExponential(2, i) <= value && getExponential(2, i + 1) > value)
        {
            return i;
        }
    }
}