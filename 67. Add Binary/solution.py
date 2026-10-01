class Solution(object):
    def addBinary(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """

        a = a[::-1]
        b = b[::-1]
        c = ""

        carry = 0
        i = 0

        while i < len(a) or i < len(b) or carry != 0:
            value1 = int(a[i]) if i < len(a) else 0
            value2 = int(b[i]) if i < len(b) else 0

            value = value1 + value2 + carry

            c += str(value % 2)
            carry = value // 2
            
            i += 1

        return c[::-1] 