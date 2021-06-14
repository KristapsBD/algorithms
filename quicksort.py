"""
Quicksort algorithm uses a random value from the list (called pivot) and compares it to the other values.
It then creates 2 sublists - one with values lesser than or equal to the pivot and another with values
greater than the pivot. The main part of the function is the last return statement, which calls
the quicksort function on the two sublists recursively, sorting the list until there are 1 or 0
values left in either of the sublists.
Runs in O(n^2) worst case and O(n log n) best case
"""

unsorted_list = [4,3,2,1,2,7,6,9]

def quicksort(values):
    # Base case to prevent the algorithm of calling itself recursively for an infinite amount of times
    if len(values) <= 1:
        return values
    # Pivot in this example chosen as first list value (notice - it would be more efficient to use the median of the first, middle and last elements of the list)
    pivot = values[0]
    lesser = []
    greater = []
    
    for val in values[1:]:
        if val <= pivot:
            lesser.append(val)
        else:
            greater.append(val)
    # Recursion on both sublists sorts the values in each list
    return quicksort(lesser) + [pivot] + quicksort(greater)

sorted_list = quicksort(unsorted_list)
print(sorted_list)