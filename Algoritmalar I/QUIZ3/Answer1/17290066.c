/**
@file: 17290066.c
@author: @uysalserkan
@brief: QUESTION 1
        Problem:n elemanlı bir A dizisi veriliyor. Bu dizinin yardımıyla elemanları B[i]=A[i+1]-A[i] (i=1,2,...n-1) 
        koşuluna uyan n-1 elemanlı bir B dizisi oluşturuluyor. B dizisinin ardışık terimlerinden oluşan ve 
        artan en uzun alt dizisinin uzunluğunu O(n)işlem zamanında bulabilen algoritmanın kodunu yazınız. 
        (Kodunuzun girişi A dizisi ve n sayısıdır, algoritmanızın  tasarımda  A  dizisi  dışında  başka  bir  dizi  kullanımına  izin verilmemektedir, 
        yani algoritmanızda B dizisini de kullanamazsınız.)
        Örnek: Girdi=> 7 1 2 4 8 10 16 5//  n=7, A[] ={1,2,4,8,10,16,5}
        Çıktı=>1 2 4  // B[] dizisi {1, 2, 4, 2, 6, -11}
        olmaktadır. Artan en uzunaltdizisi 1,2,4’tür.
@date: 6-12-2020
@enviroment: Ubuntu 20.04 (WSL)
@compiler: gcc version 9.3.0 (Ubuntu 9.3.0-10ubuntu2)
@copyright: Copyright (c) Serkan UYSAL - 2020

*/

#include <stdio.h>

void printBMatrix(int arr[], int minIndex, int maxIndex);
void calculateIndex(int arr[], int size);

int main()
{
    int size;
    scanf("%d", &size);

    int arr[size];

    for (int i = 0; i < size; i++)
        scanf("%d", &arr[i]);

    calculateIndex(arr, size);

    return 0;
}

void printBMatrix(int arr[], int minIndex, int maxIndex)
{
    for (minIndex; minIndex < maxIndex ; minIndex++)
        printf("%d ", arr[minIndex + 1] - arr[minIndex]);
}

void calculateIndex(int arr[], int size)
{
    int index1 = 0; // ? Artan sıralı giden array'in başlangıcını tutar.
    int index2 = 0; // ? Artan sıralı giden array'in sonunu tutar.
    int prevValue;  // ? Bir önceki değeri tutar.

    int minIndex;        // ? En fazla sayıda eleman içeren artan sıralı giden array'in başlangıcını tutar.
    int maxIndex;        // ? En fazla sayıda eleman içeren artan sıralı giden array'in sonunu tutar.
    int maxCapacity = 0; // ? Bir önceki sıralı artan sıralı array'in bir sonraki artan sıralı array'den büyük mü olduğunu kontrol edecek olan eleman.

    for (int i = 2; i < size ; i++) // O(n) zamanında çalışıyor.
    {
        if (i == 1)
        { // Başlangıç değeri için ilk elamanı hesaplarız.
            prevValue = arr[1] - arr[0];
            continue;
        }

        if ((arr[i] - arr[i - 1]) > prevValue)
        {
            index2 = i;

            if ((index2 - index1) > maxCapacity)
            { // Eğer aktif olarak gezindiğimiz dizideki artan sıralı dizi bir önceki diziden daha fazla eleman içeriyorsa
                // pasif olarak tuttuğumuz index değerlerimizi aktif olarak kullandığımız indexlere eşitleriz.
                maxCapacity = index2 - index1;
                maxIndex = index2;
                minIndex = index1;
            }
        }
        else
        { // Eğer dizimiz artan sıralı gitmiyorsa aktif olarak kullandığımız index numaralarını o anki sıra numarasına eşitleriz.
            index1 = i;
            index2 = i;
        }

        prevValue = arr[i] - arr[i - 1]; // Bir sonraki adım için bir önceki değeri hesaplıyoruz.
    }

    printBMatrix(arr, minIndex, maxIndex);
}
// 5 1 2 4 8 16
// 7 1 2 4 8 10 16 5
// 7 2 4 8 16 2 6 30
// 9 2 4 8 16 32 64 128 256 10
// 8 2 6 4 8 16 32 8 10