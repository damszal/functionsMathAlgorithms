
// ELEMENTY ZAWARTE W ZBIORZE arr2 A NIE BĘDĄCE W ZBIORZE arr1

        // const arr1 = [0,1,2,4,5,6,7,8,9,"damian"]
        // const arr2 = [0,1,2,4,5,6,7,8,9,10,"damian", "agata"]
        // const total = [].concat(arr1,arr2);

        // const set1 = new Set(arr1)
        // const set2 = new Set(arr2)
        // const setTotal = new Set(total)
        // let output = []

        // for (const el of set2) {
        //     (set1.has(el) === false)? output.push(el) : 0
        // }

        // console.log(output)


//******************************************************************************************* */
// TABLICA 
// jest obiektem
// - delete usuwa właściwość obiektu, uzyskujesz <1 empty item>
// dodawaj i odejmuj obiekty tylko za pomoca metody splice

//****************************************************************************** 
// GENERATOR LICZB CAŁKOWITYCH W TABLICY OD 0 DO N

        const ordNum = function(n) {
                let tab = []
                for (let i = 1; i <= n; i++){ 
                        tab.push(i)
                }
                return tab
        }

// const newTab = ordNum(6)
// newTab.shift()
// console.log(ordNum(6))
// console.log(newTab)

//**************************************************************************************** */
// GENERATOR SILNI !N

        const factorial = function(f){
                const inputArray = ordNum(f);
                let output = 1;
                for( let i = 0; i<=f-1; i++ ){
                output = output * inputArray[i]
                }
                return output
        }

// console.log(factorial(10))

//**************************************************************************************** */

// Example: How many different ways can 7 people come 1st, 2nd and 3rd?
// u - number of competitioners 
// n - number of places 
function resultes(u,n) {
        return factorial(u)/factorial(u-n)
}

// console.log(resultes(3,3))

// ******************************************************************************************
//DELTA 
function delta(a,b,c) {
        return (b*b)-(4*a*c)
}
//console.log(delta(2,2,7))
//******************************************************************************************* */
// RÓWNANIE KWADRATOWE
function quadraticEquation(a,b,c){
        if (delta(a,b,c)>0){
                const x1 = (-b - Math.sqrt(delta(a,b,c)))/2*a;
                const x2 = (-b + Math.sqrt(delta(a,b,c)))/2/a;
                return `x1 to ${x1} and x2 ${x2}`
        } else if ( delta(a,b,c) == 0 ) {
                const x = -b/(2*a);
                return `x to ${x}`
        } else if ( delta(a,b,c) < 0 ){
                return false
        }
}

//console.log(quadraticEquation(1,20,4))
//**************************************************************************************** */

// CHANGE ALL VALUES IN ARRAY ON N
let tab1 = [1,2,3,4,5,6,7,8,9]

function allZero(tab,val){
        for (let i = 0; i < tab.length; i++){
                tab[i] = val;
                console.log(tab[i])
        }
}

// allZero(tab1,null)
// console.log(tab1)

//******************************************************************************************** */

// MNOŻENIE MACIEŻY 2D
// let a,b,c = [[,,],[,,],[,,]]

// a = [[1,1,1],[2,2,2],[3,3,3]]
// b = [[4,4,4],[5,5,5],[6,6,6]]

function matrix2d(a,b,c) {
        for(let i = 0; i < a.length; i++){
                for( let l = 0; l <a[i].length; l++){
                        // console.log(a[i][l])
                        let suma = 0
                        for ( let m = 0; m <b.length; m++){
                                suma = suma + (a[i][l]*b[m][l])
                        }
                        c[i][l] = suma
                        // console.log(suma)
                }
        }
}
// matrix2d(a,b,c)
// console.log(c)

// ****************************************************************************************

// NWP

function nwp(a,b){
        let nwp = 1
        for(  let i = 0; i<= Math.min(a,b); i++){
                if((a%i == 0) && (b%i == 0)) {
                        nwp = i
                }
        }
        // console.log(nwp)
}
// nwp(24,40)

//********************************************************************************************* */


function conveyer1(turnOn=false){ // is conveyer working or not ? INPUT = true/false
        return turnOn
}

function boxOnConv(laser=true){ // is box on the conveyer ? laser is true when belts run, and false when box cross the laser line 
        return laser
}

function boxOnSortEnd(placed = false) { // if box is on the endo of the sort line return true 
        return plased
}

function boxFullfillBuffer(full=false){ // if sort is full change fulll on true

}

