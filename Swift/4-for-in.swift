let arr = [7, 10, 1, 5, 2]

for i in arr.enumerated() {
    let value = arr[i.offset]
    //  Now value is same to i.element
    print(i.offset, value, i.element)
}
