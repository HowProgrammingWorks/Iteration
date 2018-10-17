#include "stdafx.h"
#include <iostream>
#include "conio.h"

using namespace std;

void Continue()
{
	for (int i = 0; i < 5; i++)
	{
		cout << "Hello ";
		if (i != 4) continue;
		cout << "World!" << endl;
	}

	_getch();
}