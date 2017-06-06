#include "stdafx.h"
#include <iostream>
#include "conio.h"

using namespace std;

void While()
{
	int index = 0;
	while (index < 10)
	{
		cout << index++ << endl;
	}
	_getch();
}