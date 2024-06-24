dictionary = {'x': 1, 'y': 2, 'z': 3} 

for i in dictionary:
	print(i)

for i in dictionary:
	value = dictionary[i]
	print(i, value)

for i in dictionary.values():
	print(i)
	
for i in dictionary.items():
	print(i)
