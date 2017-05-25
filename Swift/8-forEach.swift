let a = [7, 10, 1, 5, 2]

a.forEach { x in
    print (x) // 7,10,1,5,2
}

a.forEach {
    print($0) // 7,10,1,5,2
}

[7,10,1,5].forEach {
    print($0) // 7,10,1,5
}
