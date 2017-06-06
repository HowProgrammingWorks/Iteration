#include "stdafx.h"
#include <iostream>
#include "conio.h"

using namespace std;

void ForIn()
{
	int arr[] = { 4, 7, 21, 4, 3, 90, 5 };

	for (int i = 0; i < _countof(arr); i++)
	{
		int value = arr[i];
		cout << i << ' ' << value << endl;
	}

	_getch();
}