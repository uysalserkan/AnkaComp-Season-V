// Serkan UYSAL - 2020

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

int values[1000];

void value_answer_print();
int arr_size;

int main()
{
    int get;
    for (int i = 0; i > -1; i++)
    {
        scanf("%d", &get);
        if (get == -1)
        {
            arr_size = i;
            break;
        }
        values[i] = get;
    }
    // printf("%d", size);
    value_answer_print();

    return 0;
}

void value_answer_print()
{
    bool grow_direction;

    if (arr_size == 1)
    {
        printf("%d ", values[0]);
    }

    if (arr_size == 0)
    {
        return;
    }

    else
    {
        if (values[0] < values[1])
            grow_direction = true;

        else
            grow_direction = false;

        bool new_grow_direction;
        for (int i = 0; i < arr_size; i++)
        {
            if (i == 0)
            {
                printf("%d ", values[0]);
                continue;
            }

            if (values[i - 1] < values[i] && grow_direction == true)
                printf("%d ", values[i]);

            if (values[i - 1] > values[i] && grow_direction == false)
                printf("%d ", values[i]);

            if (values[i - 1] > values[i] && grow_direction == true)
            {
                if (values[i] > values[i + 1])
                    grow_direction = false;
                printf("\n%d ", values[i]);
            }

            if (values[i - 1] < values[i] && grow_direction == false)
            {
                if (values[i] < values[i + 1])
                    grow_direction = true;
                printf("\n%d ", values[i]);
            }
        }
    }
}
