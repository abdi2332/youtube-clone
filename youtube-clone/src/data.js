export const API_KEY='AIzaSyDvYE6m0XvlbWhFt-qTJ3YxyL60Bt9HJbk'
export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/10000)+"M"
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K"
    }
    else{
        return value
    }
}