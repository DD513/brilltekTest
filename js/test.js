// ### JS Test

// For any question of this document, we aren't waiting for a number or answer, but we are waiting for javascript functions.

// Make a git public repo or add @loiu92 to your private repos.

// #### Assuming we have an array of factories


const factories = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
]; 

let one = () => {
    let name = document.getElementById("1").value;
    
    const res = factories.filter(o=>o.name === name);
    document.getElementById("oneAns").innerHTML =name+"總共有:"+ res[0].employees.length + "個";
} 
let two = () => {
    let getEmployee = document.getElementById("2").value;
    let count=0;
    let ans =[];
    factories.map(o=>{
        const find = o.employees.filter(v=>v === getEmployee)
        if(find.length) count++;
    })
    ans.push({employee:getEmployee,count})
    console.log(ans);
    document.getElementById("twoAns").innerHTML =getEmployee+"總共有:"+ ans[0].count + "個";

};
let three = () =>{
    let name = document.getElementById("3").value;
    const res = factories.filter(o=>o.name === name);
    document.getElementById("threeAns").innerHTML =name + "的employee："+res[0].employees;
}
//第二題的for迴圈寫法
// for(let i=0;i<factories.length;i++){
    //     //console.log(i);
    //     for(let j=0;j<factories[i].employees.length;j++){
    //         //console.log(factories[i].employees[j]);
    //         if(getEmployee === factories[i].employees[j] ){
    //             count++;
    //         }
    //     }
    // };


// 1. Count Employees Number by Factory // => [ {name: 'BR1', count: 4}, ... ]
// 2. Count Factories Number by Employee // => [ {employee: 'John', count: 2}, ... ]
// 3. Order employees list by alphabetical order // =>   { name: "BR2", employees: ["Jessie", "John", "Karen"] }




// #### Assuming we have a different array


const employeeType = [
      {id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00"},
      {id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00"},
      {id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00"},
];

const employees = [
        {id: 1, name: "Alice", type: 2},
        {id: 2, name: "Bob", type: 3},
        {id: 3, name: "John", type: 2},
        {id: 4, name: "Karen", type: 1},
        {id: 5, name: "Miles", type: 3},
        {id: 6, name: "Henry", type: 1}
];
// 

const tasks = [
      {id: 1, title: "task01", duration: 60 }, //min
      {id: 2, title: "task02", duration: 120},
      {id: 3, title: "task03", duration: 180},
      {id: 4, title: "task04", duration: 360},
      {id: 5, title: "task05", duration: 30},
      {id: 6, title: "task06", duration: 220},
      {id: 7, title: "task07", duration: 640},
      {id: 8, title: "task08", duration: 250},
      {id: 9, title: "task09", duration: 119},
      {id: 10, title: "task10", duration: 560},
      {id: 11, title: "task11", duration: 340},
      {id: 12, title: "task12", duration: 45},
      {id: 13, title: "task13", duration: 86},
      {id: 14, title: "task14", duration: 480},
      {id: 15, title: "task15", duration: 900}
];

let four = () =>{
    let total = 0 ;
    employees.map(o=>{
        employeeType.map(v=>v.id === o.type)
        const add = employeeType.filter(v => v.id === o.type);
        if(add[0].id === 1 ) {
            total += 8;
        }else if(add[0].id === 2 ){
            total += 9;
        }else{
            total += 4;
        }
    })   
    console.log(total);
    document.getElementById("fourAns").innerHTML ="員工一天的總工作時數為:"+ total;
}

let five = () => {
    let getEmployee = document.getElementById("5").value;
    const add = employees.filter(o=> o.name === getEmployee);
    console.log(add);
    const ser = employeeType.filter(v=> v.id === add[0].type);
    console.log(ser);
    let time,end,begin;
    end= ser[0].work_end.split(':');
    begin = ser[0].work_begin.split(':');
    if(end[0]=== "00"){end[0] = "24";}
    time = parseInt(end[0])-parseInt(begin[0]);
    document.getElementById("fiveAns").innerHTML =getEmployee+"工作時數為:"+ time + "個小時";
}
let six = ()=> {
    let total = 0;
    let day;
    tasks.map(o=> {
        total += parseInt(o.duration);
    })
    console.log(total,Math.ceil(total/60/15));
    document.getElementById("sixAns").innerHTML ="至少需要"+Math.ceil(total/60/15)+"天";
}



// 4. Count total hours worked in 1 day ? // => 39
// 5. Make a function that take as parameters dayTime and return number of employee working // howManyEmployeeByTime(time) => int
// 6. How many days of work needed to done all tasks ? // => 1 day = 9:00 to 00:00 between 00:00 and 09:00 doesnt count.