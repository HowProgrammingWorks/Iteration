#include "stdafx.h"
#include <iostream>
#include "conio.h"

using namespace std;

void DoWhile()
{
	int index = 0;
	do
	{
		cout << index++ << endl;

	} while (index < 10);

	_getch();
}