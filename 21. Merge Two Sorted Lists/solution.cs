/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode MergeTwoLists(ListNode list1, ListNode list2) {
        if(list1 == null && list2 == null) return null;

        ListNode head = new ListNode();
        ListNode list3 = head;

        while(list1 != null || list2 != null){
            if(list1 == null){
                list3.val = list2.val;
                list2 = list2.next;
            }
            else if(list2 == null){
                list3.val = list1.val;
                list1 = list1.next;
            }
            else if(list1.val < list2.val){
                list3.val = list1.val;
                list1 = list1.next;
            }
            else{
                list3.val = list2.val;
                list2 = list2.next;
            }

            if(list1 != null || list2 != null){
                list3.next = new ListNode();
                list3 = list3.next;
            }
        }

        return head;
    }
}