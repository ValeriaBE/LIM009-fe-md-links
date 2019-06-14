export const linkStats = (arr, stats) => {

    let total = arr.length;

    let broken = arr.filter(x=>{
    return x.ok == 'fail';
    })
 
    let newLinkArr = arr.map(x=>{
    return x.href;
    })
    let unique = Array.from(new Set (newLinkArr))

    if(stats){
        return{
            Total: total,
            Broken: broken.length,
            Unique: unique.length
        }
    }else {
        return{
            Total: total,
            Unique: unique.length
        }
    }

}