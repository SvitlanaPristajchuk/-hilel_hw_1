1.
/*firstRandomValue = Number(Math.random().toFixed(2));
prompt(firstRandomValue);
console.log(firstRandomValue);*/

//1

firstValue = prompt(`Enter first number`, 1000.9898787);
firstValue = +(parseFloat(firstValue).toFixed(2));
console.log(firstValue, 'firstValue');
//2
secondValue = prompt(`Enter second number`, 30.78965);
secondValue = +(parseFloat(secondValue).toFixed(2));
console.log(secondValue, 'secondValue');

//3
diapasonRandomValue = Number((Math.random() * (secondValue - firstValue) + firstValue).toFixed(2));
//prompt(diapasonRandomValue);
alert(`Random number is: ${diapasonRandomValue} 🥳`)
console.log(diapasonRandomValue, 'diapasone');


//4.
thirdValue = prompt(`Enter third number`, 7654.891819);
thirdValue = Number(parseFloat(thirdValue).toFixed(2))
console.log(thirdValue, 'thirdValue');



resultSum = +((diapasonRandomValue + thirdValue).toFixed(2));
console.log(resultSum);
resultSub = +((diapasonRandomValue - thirdValue).toFixed(2));
console.log(resultSub)
resultMult = +((diapasonRandomValue * thirdValue).toFixed(2));
console.log(resultMult)
resultDiv = +((diapasonRandomValue / thirdValue).toFixed(2));
console.log(resultDiv)


/*5.
document.write(`<table class="data">
        <thead>
            <tr>
               <th>Operation</th>
               <th>Expresion</th>
               <th>Value</th>
             </tr>
             <tr>
             <th>Sum</th>
             <th>${diapasonRandomValue}+${thirdValue}</th>
             <th>${resultSum}</th>
           </tr>
           <tr>
           <th>Substraction</th>
           <th>${diapasonRandomValue}-${thirdValue}</th>
           <th>${resultSub}</th>
         </tr>
         <tr>
         <th>Multiplication</th>
         <th>${diapasonRandomValue}*${thirdValue}</th>
         <th>${resultMult}</th>
       </tr>
       <tr>
       <th>Division</th>
       <th>${diapasonRandomValue}/${thirdValue}</th>
       <th>${resultDiv}</th>
     </tr>
        </thead>
    </table>`);*/

    5.

document.write(`<table class="data">
    <thead>
        <tr>
            <th>Operation</th>
            <th>Expresion</th>
            <th>Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Sum</th>
            <th>${diapasonRandomValue}+${thirdValue}</th>
            <th>${resultSum}</th>
        </tr>
        <tr>
        <th>Substraction</th>
        <th>${diapasonRandomValue}-${thirdValue}</th>
        <th>${resultSub}</th>
        </tr>
        <tr>
        <th>Multiplication</th>
        <th>${diapasonRandomValue}*${thirdValue}</th>
        <th>${resultMult}</th>
    </tr>
    <tr>
    <th>Division</th>
    <th>${diapasonRandomValue}/${thirdValue}</th>
    <th>${resultDiv}</th>
    </tr>
    </tbody>
</table>`)

