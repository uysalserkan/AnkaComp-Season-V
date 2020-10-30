// Serkan UYSAL - 2020

/*
a) OBEB(2a, 2b)=2.OBEB(a,b)
b) b tek ise OBEB(2a,b)=OBEB(a,b)
c) OBEB(a,0)=a          [BITIRIYOR]
d) OBEB(a,b)=OBEB(b, a-b), eğer a≥b ise
e) OBEB(a, b)=OBEB(b, a)
*/

/**
 * A:, B: 2 ile bölünenlere bakıyor.
 * C: En son gelen değer, geri kalanlar ile çarpılır.
 * D:, E: Bu kısım ise diğer kısımlara ulaşmak için yapılan sadeleştirmeler.
*/

#include <stdio.h>

char answer[1000];
int index = 0;
int result = 1;

void AddLetter(char);
void Euclid_Recursive(int, int);

int main()
{
    int a, b;
    scanf("%d %d", &a, &b);
    Euclid_Recursive(a, b);
    printf("\n%s%d", answer, result);

    return 0;
}

void AddLetter(char input)
{
    answer[index++] = input;
    answer[index++] = ' ';
}

void Euclid_Recursive(int x, int y)
{
    if (x % 2 == 0 && y % 2 == 0)
    {
        AddLetter('a');
        Euclid_Recursive(x / 2, y / 2);
        result = result * 2;
        return 0;
    }

    if (x % 2 == 0 && x != 0 && y % 2 != 0)
    {
        AddLetter('b');
        Euclid_Recursive(x / 2, y);
        return 0;
    }

    if (x != 0 && y == 0)
    {
        AddLetter('c');
        result = result * x;
        return 0;
    }

    if (x >= y)
    {
        AddLetter('d');
        Euclid_Recursive(y, x - y);
        return 0;
    }
    else
    {
        AddLetter('e');
        Euclid_Recursive(y, x);
        return 0;
    }
}