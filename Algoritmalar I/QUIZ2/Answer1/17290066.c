/**
 * @file 17290066.c
 * @author Serkan UYSAL (uysalserkan08@gmail.com)
 * @brief Numaraları sırasıyla 1,2,..N olan N tane kapı vardır ve başlangıçta her biri
 *        kapalıdır. Bu kapıların yanından N defa geçilerek her defasında bazı kapılar üzerinde
 *        işlem yapılacaktır. İşlem açık kapıyı kapatmak, kapalı kapıyı açmak demektir. Kapıların
 *        yanından k. Defa geçildiğinde sadece ve sadece numarası k ya bölünebilen kapılar
 *        üzerinde işlem yapılacaktır. Yani 1. defa geçildiğinde tüm kapılar açılacak (hepsinin
 *        numarası bir ile bölünebildiğinden), 2. defa geçildiğinde numarası çift olanlar
 *        kapatılacak, 3. defa geçildiğinde numarası 3,6,9,... olanlardan açık olanlar kapatılacak,
 *        kapalı olanlar açılacak ve böyle N defa devam edilecek. Son defa geçildikten sonra
 *        hangi kapılar açık olacaktır?
 * @version 0.1
 * @date 2020-11-05
 * @compiler: gcc version 9.3.0 (Ubuntu 9.3.0-10ubuntu2)
 * @copyright Copyright (c) Serkan UYSAL - 2020
 * 
 */

// Include libraries
#include <stdio.h>
#include <stdbool.h>

// Function prototypes
void initializeGates(bool gates[]);
void printOpenGates(bool gates[]);
void calculateGates(bool gates[]);

// Global variables
int size;

int main()
{
    scanf("%d", &size);

    bool gates[size];

    initializeGates(gates);
    calculateGates(gates);
    printOpenGates(gates);

    return 0;
}

void initializeGates(bool gates[]) // Tüm kapıları standart olarak kapalı oluşturur.
{
    for (int i = 0; i < size; i++)
    {
        gates[i] = false;
    }
}

void printOpenGates(bool gates[]) // Açık olan kapıların index numarasının bir fazlasını bastırır.
{
    for (int i = 0; i < size; i++)
    {
        if (gates[i] == true)
        {
            printf("%d ", i + 1);
        }
    }
}

void calculateGates(bool gates[]) // Harmoniyi hesaplayacak olan fonksiyon.
{
    for (int i = 0; i < size; i++)
    {
        for (int j = 0; j < size; j++)
        {
            if ((j + 1) % (i + 1) == 0)
            {
                gates[j] = !gates[j];
            }
        }
    }
}