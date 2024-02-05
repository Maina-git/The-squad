let data=[
    {
name:'Matero',
age:'20'
    },
    {
        name:"Sarah",
        age:'32'
    },
    {
        name:"Jany",
        age:'24'
    },
    {
        name:"John",
        age:'20'
    },

    {
        name:"Tim",
        age:'27'
    },
    {
        name:'Sam',
        age:'22'
    },
];


const info=document.querySelector("#info");

let details=data.map((item)=>{
    
      return '<div>' + item.name + ' '+'is'+' '+item.age+' ' +'Years old' + '</div>'
});

info.innerHTML=details.join('\n');


 


