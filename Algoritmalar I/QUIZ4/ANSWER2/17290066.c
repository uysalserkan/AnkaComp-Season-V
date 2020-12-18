/**
@file: 17290066.c
@author: @uysalserkan
@brief: QUESTION 2
        Problem:Kullanıcıdan pozitif tam n (n>1) sayısı girmesini isteyiniz. Kullanıcı n
                sayısını girdikten sonra tekrardan n tane tam sayı girmesini isteyiniz. Kullanıcının
                girdiği sayılar A[1],...A[n] ise ilk sıraya A[2]...A[n] çarpımını, 2. sıraya
                A[1].A[3]...A[n], 3. sıraya A[1].A[2].A[4]...A[n],... n. sıraya A[1].A[2]...A[n-1]
                çarpımını yazınız
                -- problemi Θ(n) işlem zamanında çözünüz. --
@date: 18-12-2020
@enviroment: Ubuntu 20.04.1 LTS x86_64
@compiler: gcc (Ubuntu 9.3.0-17ubuntu1~20.04) 9.3.0
@copyright: Copyright (c) Serkan UYSAL - 2020

*/

#include <stdio.h>
#include <stdbool.h>
#include <math.h>

void solve(int arr[], int size);
int getValue(int arr[], int index, int size);

int main()
{
    int size;
    scanf("%d", &size);

    int arr[size];
    for (int i = 0; i < size; i++)
    {
        scanf("%d", &arr[i]);
    }
    solve(arr, size);
    return 0;
}

void solve(int arr[], int size)
{
    int total = getValue(arr, 0, size);
    for (int i = 0; i < size; i++)
    {
        printf("%d ", (int)(total * pow(arr[i], -1)));
    }
    printf("\n");
}

int getValue(int arr[], int index, int size)
{
    if (index == size)
        return 1;
    return arr[index] * getValue(arr, index + 1, size);
}