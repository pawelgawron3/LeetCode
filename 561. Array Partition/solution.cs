public class Solution {
    public int ArrayPairSum(int[] nums) {
        int maximizedSum = 0;

        nums.Sort();

        for(int i = 0; i < nums.Length; i+=2)
            maximizedSum += nums[i];

        return maximizedSum;
    }
}