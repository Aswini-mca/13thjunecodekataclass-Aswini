function searchTarget(nums,target){
    for(let i=0;i<nums.length;i++){
    if(nums[i]==target){
        return i
    } 
}
for(let i=0;i<nums.length;i++){
    if(nums[i]>target)
    {
        return i
    }
} 
    
}
console.log(searchTarget([1,3,5,6],5))
