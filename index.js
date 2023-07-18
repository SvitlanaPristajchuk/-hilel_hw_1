1.
firstRandomValue = Number(Math.random().toFixed(2));
prompt(firstRandomValue);
console.log(firstRandomValue);


2.
secondRandomValue = Number((Math.random() * 10).toFixed(2));
prompt(secondRandomValue);
console.log(secondRandomValue);

3.

diapasonRandomValue = Number((Math.random() * (secondRandomValue - firstRandomValue) + firstRandomValue).toFixed(2));
prompt(diapasonRandomValue);
alert(`Random number is: ${diapasonRandomValue} 🥳`)
console.log(diapasonRandomValue);

4.
thirdRandomValue = Number((Math.random() * 100).toFixed(2));
prompt(thirdRandomValue);
console.log(thirdRandomValue);

resultSum = ((firstRandomValue + thirdRandomValue).toFixed(2));
resultSub = ((firstRandomValue - thirdRandomValue).toFixed(2));
resultMult = ((firstRandomValue * thirdRandomValue).toFixed(2));
resultDiv = ((firstRandomValue / thirdRandomValue).toFixed(2));


5.
document.write(`<table class="data">
        <thead>
            <tr>
               <th>Operation</th>
               <th>Expresion</th>
               <th>Value</th>
             </tr>
             <tr>
             <th>Sum</th>
             <th>${firstRandomValue}+${thirdRandomValue}</th>
             <th>${resultSum}</th>
           </tr>
           <tr>
           <th>Substraction</th>
           <th>${firstRandomValue}-${thirdRandomValue}</th>
           <th>${resultSub}</th>
         </tr>
         <tr>
         <th>Multiplication</th>
         <th>${firstRandomValue}*${thirdRandomValue}</th>
         <th>${resultMult}</th>
       </tr>
       <tr>
       <th>Division</th>
       <th>${firstRandomValue}/${thirdRandomValue}</th>
       <th>${resultDiv}</th>
     </tr>
        </thead>
    </table>`);

