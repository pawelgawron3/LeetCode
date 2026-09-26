class Solution(object):
    def arrayPairSum(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        maximizedSum = 0

        nums.sort()
        
        for num in nums[::2]:
            maximizedSum += num
        
        return maximizedSum
        
        