class Solution(object):
    def maxDepthAfterSplit(self, seq):
        """
        :type seq: str
        :rtype: List[int]
        """

        result = []
        balance = 0

        for i in range(len(seq)):
            if seq[i] == "(":
                balance += 1
                result.append(0 if balance % 2 == 0 else 1)
            else:
                result.append(0 if balance % 2 == 0 else 1)
                balance += -1
        
        return result
        