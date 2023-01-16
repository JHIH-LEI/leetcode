class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        # 求x個subarrays,去想在每一個索引之下,滿足條件的子陣列有幾個,找看看有無數學規律
        # 此題規律： nums[i]有幾個子陣列 = 在這個索引的下的window長度 (r - l + 1) 
        # ex: [10,5,2,6] i = 2 window = 5(l = 1),2(r = 2) window長度=有幾個子陣列 2 - 1 + 1 = 2 
        if k <= 1:
            return 0

        curr = 1
        ans = 0
        l = 0

        for r in range(len(nums)):
            curr *= nums[r]

            while curr >= k:
                curr /= nums[l]
                l += 1
            
            ans += r - l + 1


        return ans