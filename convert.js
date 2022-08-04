const length = document.querySelector("#length-btn")
const mass = document.querySelector("#mass-btn")
const time = document.querySelector("#time-btn")

length.classList.add("selected")
checkSelectedOperation();


length.addEventListener('click', function () {
    time.classList.remove("selected")
    mass.classList.remove("selected")
    length.classList.add("selected")
    checkSelectedOperation()
})

mass.addEventListener('click', function () {
    length.classList.remove("selected")
    time.classList.remove("selected")
    mass.classList.add("selected")
    checkSelectedOperation()
})
time.addEventListener('click', function () {
    length.classList.remove("selected")
    mass.classList.remove("selected")
    time.classList.add("selected")
    checkSelectedOperation()
})

document.querySelector('#convert').addEventListener('click', convertion)



function checkSelectedOperation() {
    if (length.classList.contains("selected")) {
        document.querySelector(".displayResult").innerHTML = "";
        document.querySelector('#convertLength').classList.remove("hide");
        document.querySelector('#convertMass').classList.add("hide");
        document.querySelector('#convertTime').classList.add("hide");
    } else if (mass.classList.contains("selected")) {
        document.querySelector(".displayResult").innerHTML = "";

        document.querySelector('#convertMass').classList.remove("hide");
        document.querySelector('#convertLength').classList.add("hide");
        document.querySelector('#convertTime').classList.add("hide");
    } else if (time.classList.contains("selected")) {
        document.querySelector(".displayResult").innerHTML = "";

        document.querySelector('#convertLength').classList.add("hide");
        document.querySelector('#convertMass').classList.add("hide");
        document.querySelector('#convertTime').classList.remove("hide");
    }
}

function convertion() {

    let input = document.querySelector('input').value;
    let convertLength = document.querySelector('#convertLength');
    let convertTime = document.querySelector('#convertTime');
    let convertMass = document.querySelector('#convertMass');
    let displayResult = document.querySelector(".displayResult");


    if (input === "") {
        displayResult.innerHTML = "";
        createResultBox("Please Enter A Number")
    } else if (length.classList.contains("selected")) {

        switch (convertLength.value) {
            case "Convertfrom":
                displayResult.innerHTML = "";
                createResultBox("Please Select The Correct Scale")
                break;

            case "centimetre":
                displayResult.innerHTML = "";
                const inMeter = input * 0.01;
                convertFromMeter(inMeter);
                break;

            case "millimeter":
                displayResult.innerHTML = "";
                const inMeter1 = input * 0.001;
                convertFromMeter(inMeter1);
                break;

            case "micrometres":
                displayResult.innerHTML = "";
                const inMeter2 = input * 1e-6;
                convertFromMeter(inMeter2);
                break;
            case "nanometre":
                displayResult.innerHTML = "";
                const inMeter3 = input * 1e-9;
                convertFromMeter(inMeter3);
                break;
            case "kilometre":
                displayResult.innerHTML = "";
                const inMeter4 = input * 1000;
                convertFromMeter(inMeter4);
                break;
            case "Mile":
                displayResult.innerHTML = "";
                const inMeter5 = input * 1609.34;
                convertFromMeter(inMeter5);
                break;
            case "Yard":
                displayResult.innerHTML = "";
                const inMeter6 = input * 0.9144;
                convertFromMeter(inMeter6);
                break;
            case "Foot":
                displayResult.innerHTML = "";
                const inMeter7 = input * 0.3048;
                convertFromMeter(inMeter7);
                break;
            case "Inch":
                displayResult.innerHTML = "";
                const inMeter8 = input * 0.0254;
                convertFromMeter(inMeter8);
                break;
            case "nauticalMile":
                displayResult.innerHTML = "";
                const inMeter9 = input * 1852;
                convertFromMeter(inMeter9);
                break;




        }
    } else if (mass.classList.contains("selected")) {
        switch (convertMass.value) {
            case "Convertfrom":
                displayResult.innerHTML = "";
                createResultBox("Please Select The Correct Scale")
                break;

            case "Kilogram":
                displayResult.innerHTML = "";
                const inGram = input * 1000;
                convertFromGram(inGram);
                break;
            case "Gram":
                displayResult.innerHTML = "";
                const inGram2 = input;
                convertFromGram(inGram2);
                break;
            case "Milligram":
                displayResult.innerHTML = "";
                const inGram3 = input * 0.001;
                convertFromGram(inGram3);
                break;
            case "Microgram":
                displayResult.innerHTML = "";
                const inGram4 = input * 1e-6;
                convertFromGram(inGram4);
                break;
            case "Pound":
                displayResult.innerHTML = "";
                const inGram5 = input * 453.592;
                convertFromGram(inGram5);
                break;
            case "Ounce":
                displayResult.innerHTML = "";
                const inGram6 = input * 28.3495;
                convertFromGram(inGram6);
                break;

        }
    } else if (time.classList.contains("selected")) {
        switch (convertTime.value) {
            case "Convertfrom":
                displayResult.innerHTML = "";
                createResultBox("Please Select The Correct Scale")
                break;

            case "Nanosecond":
                displayResult.innerHTML = "";
                const inMinute = input * 1000;
                convertFromMinute(inMinute);
                break;
            case "Microsecond":
                displayResult.innerHTML = "";
                const inMinute1 = input * 1000;
                convertFromMinute(inMinute1);
                break;
            case "Millisecond":
                displayResult.innerHTML = "";
                const inMinute2 = input * 1000;
                convertFromMinute(inMinute2);
                break;
            case "Second":
                displayResult.innerHTML = "";
                const inMinute3 = input * 1000;
                convertFromMinute(inMinute3);
                break;
            case "Minute":
                displayResult.innerHTML = "";
                const inMinute4 = input * 1000;
                convertFromMinute(inMinute4);
                break;
            case "Hour":
                displayResult.innerHTML = "";
                const inMinute5 = input * 1000;
                convertFromMinute(inMinute5);
                break;
            case "Day":
                displayResult.innerHTML = "";
                const inMinute6 = input * 1000;
                convertFromMinute(inMinute6);
                break;
            case "Week":
                displayResult.innerHTML = "";
                const inMinute7 = input * 1000;
                convertFromMinute(inMinute7);
                break;
            case "Month":
                displayResult.innerHTML = "";
                const inMinute8 = input * 1000;
                convertFromMinute(inMinute8);
                break;


        }
    }














    function convertFromMeter(inMeter) {
        createResultBox("<h1>Kilometer</h1>" + (inMeter * 0.001))
        createResultBox("<h1>Meter</h1>" + (inMeter))
        createResultBox("<h1>Centimetre</h1>" + (inMeter * 100))
        createResultBox("<h1>Millimeter </h1>" + (inMeter * 1000))
        createResultBox("<h1>micrometres</h1>" + (inMeter * 1e+6))
        createResultBox("<h1>Nanometre</h1>" + (inMeter * 1e+9))
        createResultBox("<h1>Mile</h1>" + (inMeter * 0.000621371))
        createResultBox("<h1>Yard</h1>" + (inMeter * 1.09361))
        createResultBox("<h1>Foot</h1>" + (inMeter * 3.28084))
        createResultBox("<h1>Inch</h1>" + (inMeter * 39.3701))
        createResultBox("<h1>Nautical mile</h1>" + (inMeter * 0.000539957))
    }
    //Turn Sceintific
    // .toExponential(3).replace(/e\+?/, '×10^')   

    function convertFromGram(inGram) {
        createResultBox("<h1>Kilogram</h1>" + (inGram * 0.001))
        createResultBox("<h1>Gram</h1>" + (inGram))
        createResultBox("<h1>Milligram</h1>" + (inGram * 1000))
        createResultBox("<h1>Microgram </h1>" + (inGram * 1e+6))
        createResultBox("<h1>Pound</h1>" + (inGram * 0.00220462))
        createResultBox("<h1>Ounce</h1>" + (inGram * 0.035274))

    }

    function convertFromMinute(inMinute) {
        createResultBox("<h1>Nanosecond</h1>" + (inMinute * 6e+10))
        createResultBox("<h1>Microsecond</h1>" + (inMinute * 6e+7))
        createResultBox("<h1>Millisecond</h1>" + (inMinute * 60000))
        createResultBox("<h1>Minute</h1>" + (inMinute))
        createResultBox("<h1>Second </h1>" + (inMinute * 60))
        createResultBox("<h1>Hour</h1>" + (inMinute * 0.0166667))
        createResultBox("<h1>Day</h1>" + (inMinute * 0.000694444))
        createResultBox("<h1>Week</h1>" + (inMinute * 9.9206e-5))
        createResultBox("<h1>Month</h1>" + (inMinute * 2.2831e-5))

    }

    function createResultBox(innertext) {
        const resultContainer = document.createElement("div");
        const resultText = document.createElement("p");
        const colors = ["97CC04", 'F45D01', '38CC04', '2D3ED2', 'BB2DD2', '7A9800', 'B5F401', 'FF382C', '2D7DD2', 'F4BF01', '4E2DD2', 'CCB804']

        function random_color(items) {

            return items[Math.floor(Math.random() * items.length)];

        }

        

        resultContainer.classList.add("resultbox")
        resultContainer.style.background = "#"+random_color(colors);
        resultContainer.appendChild(resultText)
        resultText.innerHTML = innertext;
        resultText.classList.add("myfate")
        document.querySelector(".displayResult").appendChild(resultContainer);
    }



}