# Runs in O(n) time

search_names = ['Mark Jobs', 'Steve Koko', 'Jack Black', "Mr Clean"]
names_list = ['Jamie Oliver', 'Steph Wild', 'Oleg Jankovski', 'Lebron Blames', 'Steve Koko', 'Merna Wlado', 'Ister Ipunabi', 'Jack Black', 'Mr White', 'Test Name', 'Best Name']
helper = 0

def item_index(dataset, target):
    for i in range(0, len(dataset)):
        if target == dataset[i]:
            return i
    return None

for n in search_names:
    index = item_index(names_list, n)
    if index == None:
        print(f'{search_names[helper]} is not present in the searched list')
        helper+=1
    else:
        print(f'{search_names[helper]} is at index {index}')
        helper+=1


