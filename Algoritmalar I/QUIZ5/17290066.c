/**
@file: 17290066.c
@author: @uysalserkan
@brief: Problem:Giriş değişkenlerimiz 10 tane 3 basamaklı pozitif tam sayıdan oluşan bir G
                dizisidir. Bu sayıları kullanıcıdan alıcaksınız. Amacımız bu sayıları küçükten büyüğe
                doğru sıralalama iddiası bulunan Hollerith algoritmasının kaç tane hata yaptığını
                bulmaktır. Bunun için aynı kodun içinde birbirine benzeyen ama farklı 2 yöntem
                kullanacaksınız. (Radix Sort - Hollerith Algorithm)
@date: 21-12-2020
@enviroment: Ubuntu 20.04.1 LTS x86_64
@compiler: gcc (Ubuntu 9.3.0-17ubuntu1~20.04) 9.3.0
@contact: uysalserkan08@gmail.com
@copyright: Copyright (c) Serkan UYSAL - 2020
*/

#include <stdio.h>
#include <stdbool.h>

int storage[2][10];

void radix_sort(int arr[]);
void hollerith_algorithm(int arr[]);
void swap_value(int arr[], int first, int last);
void print_sorted_arr(int index);
int get_digit(int value, int index);
int get_pow(int value, int degree);
int calculate_error();

int main()
{
    int arr[10];

    for (int i = 0; i < 10; i++)
    {
        scanf("%d", &arr[i]);
    }

    radix_sort(arr);
    hollerith_algorithm(arr);

    print_sorted_arr(0);
    print_sorted_arr(1);
    printf("%%%d hata\n", calculate_error()*10);

    return 0;
}

void radix_sort(int arr[])
{
    for (int i = 0; i < 10; i++)
        storage[0][i] = arr[i];

    for (int k = 1; k <= 3; k++)
    {
        for (int i = 0; i < 9; i++)
        {
            for (int j = i + 1; j < 10; j++)
            {
                if (get_digit(storage[0][i], k) > get_digit(storage[0][j], k))
                {
                    swap_value(storage[0], i, j);
                }
            }
        }
    }
}

void hollerith_algorithm(int arr[])
{
    for (int i = 0; i < 10; i++)
        storage[1][i] = arr[i];

    for (int k = 3; k >= 1; k--)
    {
        for (int i = 0; i < 9; i++)
        {
            for (int j = i + 1; j < 10; j++)
            {
                if (get_digit(storage[1][i], k) > get_digit(storage[1][j], k))
                {
                    swap_value(storage[1], i, j);
                }
            }
        }
    }
}

void swap_value(int arr[], int first, int last)
{
    int temp = arr[first];
    arr[first] = arr[last];
    arr[last] = temp;
}

int get_pow(int value, int degree)
{
    if (degree == 0)
        return 1;
    return value * get_pow(value, degree - 1);
}

int get_digit(int value, int index)
{ // This code works left to right. (index 1 means at most left digit)
    value = value % get_pow(10, index);
    value = value / get_pow(10, index - 1);
    return value;
}

int calculate_error()
{
    int err = 0;
    for (int i = 0; i < 10; i++)
    {
        if (storage[0][i] != storage[1][i])
        {
            err++;
        }
    }
    return err;
}

void print_sorted_arr(int index)
{
    for (int i = 0; i < 10; i++)
    {
        printf("%d ",storage[index][i]);
    }
    printf("\n");
}
