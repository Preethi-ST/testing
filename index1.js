let nums = [2,2,1,1,1,2,2];
var majorityElement = function(nums) {
    let freq = {};
    nums.map((num,index) => {
        if(freq[nums[index]] === undefined){
            freq[nums[index]] =  1;
        }
        else{
            freq[nums[index]] = freq[nums[index]] + 1;
        }
    })
    let values = Object.values(freq);
    let max_value = Math.max(...values);
    let result = Object.keys(freq).filter(key => freq[key] === max_value)
    return result.join(' ');
};
console.log(majorityElement(nums));