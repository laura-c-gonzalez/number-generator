let btn = document.getElementById('btn');
btn.addEventListener("click", generateRndArr);

function generateRndArr() {

    for (var a = [], i = 0; i < 10000; ++i) a[i] = i;

    function randomizedList(arr) {

        let tempVar, rndInt, arrLength;
        arrLength = arr.length;

        while (arrLength--) {
            rndInt = Math.floor(Math.random() * arrLength);
            arrLength -= 1;

            tempVar = arr[rndInt];
            arr[rndInt] = arr[arrLength];
            arr[arrLength] = tempVar;
        }
        return arr;
    }
    result = randomizedList(a);
    diplayArr(result);
    console.log(result);
}


function diplayArr(res) {
    
    let tr;
    document.getElementById('data').innerHTML = '';

    res.forEach(function (item, i) {

        setTimeout(function () {

            let td = document.createElement('td');
            //new row if the remainder with 50 is zero
            if (!(i % 50)) {
                document.getElementById('data').value = '';
                tr = document.createElement('tr');
                document.getElementById('data').appendChild(tr);
            }
            td.appendChild(document.createTextNode(item));
            tr.appendChild(td);
        }), 1000
    })



}

