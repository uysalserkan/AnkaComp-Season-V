/**
@file: 17290066.c
@author: @uysalserkan
@date: 26-12-2020
@enviroment: Ubuntu 20.04.1 LTS x86_64
@compiler: gcc (Ubuntu 9.3.0-17ubuntu1~20.04) 9.3.0
@contact: uysalserkan08@gmail.com
@copyright: Copyright (c) Serkan UYSAL - 2020
*/

// Include section
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

//define section
#define SIZE 100

// Function prototype section
int max_kar(int p[], int b, int s);
int yerel_min(int arr[], int index, int size);
int yerel_max(int arr[], int index, int size);

// Global variables section
int arr[SIZE];

// Function definitions
int main()
{
    char val[10];
    int arr_size = 1;
    while (scanf("%10s", val) != EOF)
    {
        arr[arr_size++] = atoi(val);
    }
    printf("%d\n", max_kar(arr, 1, arr_size));
    // printf("Yerel min: %d\tYerel max: %d\n", arr[yerel_min(arr, 1, arr_size)], arr[yerel_max(arr, yerel_min(arr, 1, arr_size), arr_size)]);

    return 0;
}

int max_kar(int p[], int b, int s)
{
    int kar = 0;
    for (int i = 1; i < s; i++)
    {
        int alis = yerel_min(p, i, s);
        int satis = yerel_max(p, alis + 1, s);
        i = satis;
        kar += (p[satis] - p[alis]);
    }
    return kar;
}

int yerel_min(int arr[], int index, int size)
{
    int min_value = arr[index];
    while (index <= size)
    {
        if (min_value > arr[++index])
        {
            min_value = arr[index];
        }
        else
        {
            return index - 1;
        }
    }
}

int yerel_max(int arr[], int index, int size)
{
    int max_value = arr[index];
    while (index <= size)
    {
        if (max_value < arr[++index])
        {
            max_value = arr[index];
        }
        else
        {
            return index - 1;
        }
    }
}