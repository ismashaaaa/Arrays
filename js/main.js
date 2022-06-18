/* Написати програму «успіхи». Користувач вводить 10 оцінок студента. Реалізувати меню для користувача:
    ■ Вивід оцінок (вивід вмісту масиву);
    ■ Перездача іспиту (користувач вводить номер елемента масиву й нову оцінку);
    ■ Чи виходить стипендія (стипендія виходить, якщо середній бал є не нижчим за 10.7)
========================== */

let arr = [];

    for(let i = 0; i <10; i++)
    {
        let marks = parseInt(prompt("Please enter 10 students marks! "))
        arr.push(marks);

        console.log(`Mark № ${i+1}: ${arr[i]}`);
    }
let yourAction = prompt("Acrion:\n1.Display all students marks \n2. Passing the exam\n3. Is there a scholarship");


if(yourAction == "1")
{
    for(let i = 0; i < 10; i++)
    {
        console.log(`Mark № ${i+1}: ${arr[i]}`);
    }
}
 if(yourAction == "2")
{
    let oldElement = parseInt(prompt("Select an assessment to correct:"))
    let newElement = parseInt(prompt("Assign a new value:"));
    const replace = arr.indexOf(oldElement);
    arr[replace] = newElement;
    console.log("===============================>");
    console.log(arr);
}
if(yourAction == "3")
{
    let average = 0;
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += arr[i];
        average = sum/10;
       
    }
    if (average >= 10.7){
        console.log("Congratulations, the scholarship will be!")
    }
    else if(average <10.7){
        console.log("Sorry, but there will be no scholarships...")
    }
} 

/* Написати програму, що копіює елементи 2-х масивів розміром 5 елементів кожен в один масив розміром 10 елементів у такий спосіб: спочатку 
копіюються послідовно всі елементи більші за 0, потім послідовно всі елементи рівні 0, а потім послідовно всі елементи менші за 0.
==========================
*/
let firstArray = [-1, 0, 7, 4, -3];
let secondArray = [-6, 2, 8, 9, 0];
let childrenArray = firstArray.concat(secondArray);
let myArrray = [];

childrenArray.forEach(item => {
    if(item > 0) 
    {
        myArrray.push(item);
    }
})
childrenArray.forEach(item => {
    if(item === 0)
    {
        myArrray.push(item);
    }
})
childrenArray.forEach(item => {
    if(item < 0)
    {
        myArrray.push(item);
    }
})

myArrray.forEach(item => {
    console.log(item);
})


/* Написати гру «Кубики». Користувач і комп'ютер по черзі кидають 2 кубики. Переможець той, у кого за результатами 3х кидків сума більше. 
Передбачити красивий інтерфейс гри.

Використовувати генерацію випадкових чисел */

let move;
do
{

let total_chel=0;
let total_komp=0;


let move = prompt(`Hi! Shall we play the order of throws? Press * to throw`);

let res_chel, res_komp;
function res()
{
    let kubik_1=Math.random()%6+1;
    bros(kubik_1);
    let kubik_2=Math.random()%6+1;
    bros(kubik_2);
    let result;
    result=kubik_1+kubik_2;
    console.log(`Result: ${result}`)
    return result;
}

do
{
    res_chel=res();
    console.log(`Your result: ${res_chel}`)
    res_komp=res();
    console.log(`My result: ${res_komp}`)
}
while (res_chel==res_komp);

if (res_chel>res_komp)
{
    prompt("You start first: ")
    for (let i=1; i<=3; i++)
    {
        do
        {
            prompt("Press * to throw");
        }
        while (move!='*');
        console.log("You:")
        total_chel+=res();
        console.log("I am:")
        total_komp+=res();
        console.log("The next move:")
    }
    console.log(`Your total result (the sum of points for 3 throws): ${total_chel}`);
    console.log(`My total result (the sum of points for 3 throws): ${total_komp}`);
}
else
{
    prompt("I'm start first: ")
    for (let i=1; i<=3; i++)
    {
        console.log("I am:")
        total_komp+=res();
        do
        {
           prompt("Press * to throw");
        }
        while (move!='*');
        console.log("You:")
        total_chel+=res();
        console.log("The next move:")
    }
    console.log(`Your total result (the sum of points for 3 throws): ${total_chel}`);
    console.log(`My total result (the sum of points for 3 throws): ${total_komp}`);
}

if (total_chel===total_komp)
{
    console.log("Draw")
}

else if (total_chel>total_komp)
{
    console.log("Congratulation! You have won!")
}
else if(total_chel<total_komp)
{
    console.log("Sorry, but... I have won :(")
}
}
while(move!='*');

function bros(kubik)
{
    switch (kubik)
    {
    case 1:
        console.log(`***********`);
        console.log(`*         *`);
        console.log(`*         *`);
        console.log(`*    *    *`);
        console.log(`*         *`);
        console.log(`*         *`);
        console.log(`***********`);
    break;
    case 2:
        console.log(`***********`);
        console.log(`*         *`);
        console.log(`*    *    *`);
        console.log(`*         *`);
        console.log(`*    *    *`);
        console.log(`*         *`);
        console.log(`***********`);
    break;
    case 3:
        console.log(`***********`);
        console.log(`*            *`);
        console.log(`*  *         *`);
        console.log(`*     *      *`);
        console.log(`*        *   *`);
        console.log(`*            *`);
        console.log(`***********`);
    break;
    case 4:
        console.log(`***********`);
        console.log(`*           *`);
        console.log(`*  *     *  *`);
        console.log(`*           *`);
        console.log(`*  *     *  *`);
        console.log(`*           *`);
        console.log(`***********`);
    break;
    case 5:
        console.log(`***********`);
        console.log(`*            *`);
        console.log(`*  *      *  *`);
        console.log(`*      *     *`);
        console.log(`*  *      *  *`);
        console.log(`*            *`);
        console.log(`***********`);
    break;
    case 6:
        console.log(`***********`);
        console.log(`*          *`);
        console.log(`*  *    *  *`);
        console.log(`*  *    *  *`);
        console.log(`*  *    *  *`);
        console.log(`*          *`);
        console.log(`***********`);
    break;
    }


}