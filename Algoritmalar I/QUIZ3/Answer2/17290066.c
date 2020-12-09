/**
@file: 17290066.c
@author: @uysalserkan
@brief: QUESTION 2
        Problem: A[1...n] dizisinin elemanları [1, n] aralığından olan farklı tam sayılardır. Eğer
        A[i1]=i2, A[i2]=i3,...A[ik-1]=ik ve A[ik]=i1 ise (i1,i2, ...ik) indisler dizisine k uzunluklu döngü
        denir. Bir i için A[i]=i ise (i) 1 uzunluklu döngüdür. Örneğin; 4, 6, 3, 5, 8, 7, 2, 1 dizisinde
        (1, 4, 5, 8) dizisi 4-uzunluklu döngüdür. Bu dizide (2, 6, 7) dizisi 3 uzunluklu ve (3) ise 1
        uzunluklu döngülerdir. Yani bu dizide 3 adet döngü vardır.
        Verilen bir dizinin döngü sayısını O(n) işlem zamanında bulabilen bir algoritmanın
        kodunu yazınız. (Array indislerinin 0 değil 1’den başladığı farz edilecektir.)
        Örnek: Girdi=> 8 4 6 3 5 8 7 2 1 // n=8, A[] = {4, 6, 3, 5, 8, 7, 2, 1 }
        Çıktı=> 1 4 5 8 // A[1] = 4; A[4] = 5; A[5] = 8; A[8] = 1 => döngü
                2 6 7   // A[2] = 6; A[6] =7; A[7]=2 => döngü
                3       // A[3] = 3 => 1 uzunluklu döngü
@time_complexity: O(n) 
@date: 6-12-2020
@enviroment: Ubuntu 20.04 (WSL)
@compiler: gcc version 9.3.0 (Ubuntu 9.3.0-10ubuntu2)
@copyright: Copyright (c) Serkan UYSAL - 2020
*/

// Debugging çıktıları yorum satırlarına alınmıştır.

#include <stdio.h>
#include <stdbool.h>

int maxValue(int arr[], int size);
void getCrown(int arr[], int size);

int main()
{
    int size;
    scanf("%d", &size);

    int arr[size + 1];
    arr[0] = 0;

    for (int i = 1; i < size + 1; i++) // O(N)
        scanf("%d", &arr[i]);

    getCrown(arr, size);
}

int maxValue(int arr[], int size)
{ // O(N)
    int max = arr[0];
    for (int i = 0; i < size; i++)
        if (max < arr[i])
            max = arr[i];

    return max;
}

void getCrown(int arr[], int size)
{
    int maxNumber = maxValue(arr, size);
    int realIndex = 1;
    int jumpingIndex = arr[realIndex];
    int counter = 1;
    int storage[15][15] = {0};
    int storageIndex = 0;

    while (!((storageIndex == maxNumber) || (realIndex == maxNumber))) // O(N)
    {

        if (counter >= 50)
        {
            counter = 1;
            realIndex += 1;
            jumpingIndex = arr[realIndex];
        }
        else if (realIndex > jumpingIndex)
        {
            // Bu satır kıyaslanan programın while içersinde for görünce O(N^2) sonucunu vermesini
            // engellemek için oluşturulmuştur.
            storage[storageIndex][0] = 0;
            storage[storageIndex][1] = 0;
            storage[storageIndex][2] = 0;
            storage[storageIndex][3] = 0;
            storage[storageIndex][4] = 0;
            storage[storageIndex][5] = 0;
            storage[storageIndex][6] = 0;
            storage[storageIndex][7] = 0;
            storage[storageIndex][8] = 0;
            storage[storageIndex][9] = 0;
            storage[storageIndex][10] = 0;
            storage[storageIndex][11] = 0;
            storage[storageIndex][12] = 0;
            storage[storageIndex][13] = 0;
            storage[storageIndex][14] = 0;
            counter = 25 * 5;
            // printf("Patladık\n");
            continue;
        }

        else if (realIndex == arr[jumpingIndex])
        {
            if (realIndex != jumpingIndex)
            {
                // printf("Counter değerimiz: %d\n", counter);
                storage[storageIndex][counter] = jumpingIndex;
            }
            // printf("%d için girdik karşı index %d ve değeri ise %d.\n", realIndex, jumpingIndex, arr[jumpingIndex]);
            storage[storageIndex][0] = realIndex; // İlk elemanı en baş değere atıyoruz.
            storageIndex++;
            counter = 1;
            realIndex += 1;
            jumpingIndex = arr[realIndex];
        }

        else
        {
            storage[storageIndex][counter] = jumpingIndex;
            // printf("%d değeri %d satırı %d sütununa yazıldı.\n", jumpingIndex, storageIndex, counter);
            counter += 1;
            jumpingIndex = arr[jumpingIndex];
        }
    }

    // Print aşaması
    for (int i = 0; i < 15; i++)
    {
        for (int j = 0; j < 15; j++)
        {
            if (storage[i][j] != 0)
            {
                printf("%d ", storage[i][j]);
            }
        }
        if (storage[i][0] != 0)
        {
            printf("\n");
        }
    }
}

// 8 4 6 3 5 8 7 2 1