function removeElement(arr,val) {
    let res=[];
    let temp=[];
    let n=arr.length;
    for(let i=0;i<n;i++){
      if(arr[i] != val){
            temp.push(arr[i])
       }
    }
    let m=temp.length;
    for(let i=0;i<n-m;i++){
              temp.push("_")
         }
         res.push(temp)
         return res
   }
   console.log(removeElement([1,2,3,3,2,4],3))
