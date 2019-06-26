export const linkStats = (arr, stats) => {
    if(stats){
        return{
            Total: total(arr),
            Broken: broken(arr),
            Unique: unique(arr)
        }
    }else {
        return{
            Total: total(arr),
            Unique: unique(arr)
        }
    }

}
export const total = (arr) => {
    let total = arr.length;
    return total;
}

export const broken = (arr) => {
     arr = arr.filter(x=>{
         return x.ok === 'fail';
    })
    return arr.length
}

export const unique = (arr) => {
    let newLinkArr = arr.map(x=>{
        return x.href;
    })
    let unique = [...new Set (newLinkArr)]
    return unique.length;
}