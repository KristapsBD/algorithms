# Runs in O(log n) time

search_names = ['Mark Jobs', 'Steve Koko', 'Jack Black', "Mr Clean"]
names_list = ['Best Name', 'Ister Ipunabi', 'Jack Black', 'Jamie Oliver', 'Lebron Blames', 'Merna Wlado', 'Mr White', 'Oleg Jankovski', 'Steph Wild', 'Steve Koko', 'Test Name']
helper = 0

def binary_search(dataset, target):
    first = 0
    last = len(dataset) - 1
    while first <= last:
        middle = (first+last) //2
        if dataset[middle] == target:
            return middle
        elif dataset[middle] < target:
            first = middle + 1
        else:
            last = middle - 1
    return None

for n in search_names:
    index = binary_search(names_list, n)
    if index == None:
        print(f'{search_names[helper]} is not present in the searched list')
        helper+=1
    else:
        print(f'{search_names[helper]} is at index {index}')
        helper+=1
