/**
@file: 17290066.c
@author: @uysalserkan
@brief: QUESTION 1
        Problem:Kullanıcıdan pozitif tam n (n>1) sayısı girmesini isteyiniz. Kullanıcı n
                sayısını girdikten sonra tekrardan n tane tam sayı girmesini isteyiniz. Kullanıcının
                girdiği sayılar A[1],...A[n] ise ilk sıraya A[2]...A[n] çarpımını, 2. sıraya
                A[1].A[3]...A[n], 3. sıraya A[1].A[2].A[4]...A[n],... n. sıraya A[1].A[2]...A[n-1]
                çarpımını yazınız
                -- problemi Θ(n2) işlem zamanında çözünüz. --
@date: 14-12-2020
@enviroment: Ubuntu 20.04.1 LTS x86_64
@compiler: gcc (Ubuntu 9.3.0-17ubuntu1~20.04) 9.3.0
@copyright: Copyright (c) Serkan UYSAL - 2020

*/

#include <stdio.h>
#include <stdbool.h>

void solve(int arr[], int size);

int main()
{
    int size;
    scanf("%d", &size);

    int arr[size];
    for (int i = 0; i < size; i++)
        scanf("%d", &arr[i]);

    solve(arr, size);
    return 0;
}

void solve(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        int value = 1;
        for (int j = 0; j < size; j++)
        {
            if (j == i)
            {
                continue;
            }
            else
            {
                value = value * arr[j];
            }
        }
        printf("%d ", value);
    }
    printf("\n");
}