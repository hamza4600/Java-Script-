// discuss Date Object in detail
const date=new Date();
console.log(date.toISOString()) //retuen date and Time conerted to a string

const cutDate=new Date(2010,10);
console.log(cutDate.toString()) // retrn the date of 2010 10 Month 1 day

// chamge the entire date 
const qsq=new Date(2015,5,10);
console.log(qsq.toString())

// we can also set time and date also 
const zsq=new Date(2015,5,10,25,62,62,1020);
console.log(zsq.toString())

// specila date
const zaz=new Date(12,0);
console.log(zaz)

// Time string
const tim= new Date();
console.log(tim.toTimeString()) //only time 
console.log(tim.toDateString()) //only date 
console.log(tim.toUTCString()) //only Both 
console.log(tim.toLocaleDateString()) //date and Time 

// get only one  iktemin one time
const datas=new Date()
console.log(datas.getDate())
console.log(datas.getMonth())
console.log(datas.getFullYear())
console.log(datas.getHours())

// we can also setDate also 
// we can ALSO compare the Date it same return True or false 