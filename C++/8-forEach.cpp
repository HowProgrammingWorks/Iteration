#include "stdafx.h"
#include <iostream>
#include "conio.h"

using namespace std;

void ForEach()
{
	int arr[] = { 4, 2, 7, 8, 1, 6, 9, 5 };
	int index = 0;
	for each (int item in arr)
	{
		cout << index << ' ' << item << endl;
		index++;
	}

	_getch();
}