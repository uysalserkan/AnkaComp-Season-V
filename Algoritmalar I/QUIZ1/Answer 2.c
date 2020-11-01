// Serkan UYSAL - 2020
// GCC Version: gcc (Ubuntu 9.3.0-10ubuntu2) 9.3.0 

/**
 * Girdi: 9 7 5 17 13 12 19 22 20 18 17 21 24 -1
 * Çıktı: 9 7 5
 *        17 13 12
 *        19 22
 *        20 18 17
 *        21 24 
*/

#include <stdio.h>
#include <stdbool.h>

// Tüm değerlerin tutulduğu array
int values[1000];

// Global değişkenler
void value_answer_print();
int arr_size;

int main()
{
    int get;
    for (int i = 0; i > -1; i++)
    {
        // -1 Girilene kadar değerler global değişken olan values arrayine atanır.
        scanf("%d", &get);
        if (get == -1)
        {
            arr_size = i;
            break;
        }
        values[i] = get;
    }
    value_answer_print();

    return 0;
}

void value_answer_print()
{
    // Bizden istenilen şekilde çıktı veren fonksiyon.

    // En son artan veya azalan durumunda olduğunu kontrol eden değişken.
    bool grow_direction;

    if (arr_size == 1)
    {
        // Eğer girdi sadece tek bir değer içeriyorsa.
        printf("%d ", values[0]);
    }

    if (arr_size == 0)
    {
        // Eğer girdi hiç bir değer içermiyorsa.
        return;
    }

    else
    {
        // Girdi birden fazla değer içeriyorsa
        if (values[0] < values[1]) // İlk değer ikinci değerden küçükse başlangıç artan olarak ilerliyor.
            grow_direction = true;

        else // İlk değer ikinci değerden küçükse başlangıç azalan olarak ilerliyor.
            grow_direction = false;

        for (int i = 0; i < arr_size; i++)
        {
            if (i == 0)
            {
                // İlk değeri direkt olarak bastırıyoruz. Çünkü bu değer diğer değerlerden bağımsızdır.
                printf("%d ", values[0]);
                continue;
            }

            if (values[i - 1] < values[i] && grow_direction == true) // Bir önceki değer şuanki değerden küçükse ve artan olarak ilerliyorsak direkt olarak bastırıyoruz.
                printf("%d ", values[i]);

            if (values[i - 1] > values[i] && grow_direction == false) // Bir önceki değer şuanki değerden büyükse ve azalan olarak ilerliyorsak direkt olarak bastırıyoruz.
                printf("%d ", values[i]);

            if (values[i - 1] > values[i] && grow_direction == true)
            {
                // Çelişki durumu 1.
                if (values[i] > values[i + 1]) // önceki durum ile sonraki durumun farklı olması
                    grow_direction = false;
                printf("\n%d ", values[i]);
            }

            if (values[i - 1] < values[i] && grow_direction == false)
            {
                // Çelişki durumu 2.
                if (values[i] < values[i + 1]) // önceki durum ile sonraki durumun farklı olması
                    grow_direction = true;
                printf("\n%d ", values[i]);
            }
        }
    }
}
