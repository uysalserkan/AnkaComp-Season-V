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
    printf("%d\n", max_kar(arr, 1, arr_size ));
    return 0;
}

int max_kar(int p[], int b, int s)
{
    if (s <= b)
    {
        return 0;
    }

    int kar = 0;

    for (int i = b; i <= s; i++)
    {
        for (int j = i + 1; j <= s; j++)
        {
            if (p[j] > p[i])
            {
                int yeni_kar = (p[j] - p[i] + max_kar(p, b, i - 1) + max_kar(p, j + 1, s));
                if (yeni_kar > kar)
                {
                    // printf("Önceki Kar: %d\tYeni kar: %d\n", kar, yeni_kar);
                    kar = yeni_kar;
                }
            }
        }
    }
    return kar;
}