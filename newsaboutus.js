class getcontent {
    constructor(inputtext) {
        this.inputtext = inputtext;
    }
}
class getval {
    add(values) {
        let getcontentbyname = document.getElementById("getcontentbyname");
        getcontentbyname.innerHTML = values.inputtext;
    }
    getmeaning(values) {
        let getcontentbyname = document.getElementById("getcontentbyname");
        let a = values.inputtext;
        let html;

        if (/^[a-c]/.test(a)) {
            html = `ye ek no ka tapori hai <strong>${a}</strong>, fati hui jeans pehenta hai baal color karaya hai, ktm bhi hai aur dslr bhi liye hai`
            getcontentbyname.innerHTML = html
        }
        else if (/^[d-f]/.test(a)) {
            html = `<strong>${a}</strong> bhot bada kanjus marwadi hai, ek paise kharach nhi karta aur dusro se paise lete hai`
            getcontentbyname.innerHTML = html
        }
        else if (/^[g-i]/.test(a)) {
            html = `ek no faltu insan hai ye <strong>${a}</strong> kuch nhi aata, anpad insan hai bas apni mummy papa ke paise barbad kar rahe hai`
            getcontentbyname.innerHTML = html
        }
        else if (/^[j-l]/.test(a)) {
            html = `hole wali chaddi phenta hai <strong>${a}</strong> bhai, aur dusro ki maar khane ki aadat ho gayi hai apne ${a} bhai ko`
            getcontentbyname.innerHTML = html
        }
        else if (/^[m-o]/.test(a)) {
            html = `<strong>${a}</strong> kuch kaam ka nhi hai jab dekho tab chutiye jaise bahar gumta rehta hai`
            getcontentbyname.innerHTML = html
        }
        else if (/^[p-r]/.test(a)) {
            html = `<strong>${a}</strong> ye naam ka banda bohot hi karab hai , zindagi me kabhi taraki nhi kar payega`
            getcontentbyname.innerHTML = html
        }
        else if (/^[s-u]/.test(a)) {
            html = `<strong>${a}</strong> bohot hi gatiya aur nihayati insan hai jab dekho tab daat dikha ke hasta rehta hai`
            getcontentbyname.innerHTML = html
        }
        else if (/^[v-z]/.test(a)) {
            html = `<strong>${a}</strong> se aaj tak ek ladki tak nhi pati, voh sirf hijedo ko gumate hai `
            getcontentbyname.innerHTML = html
        }
        
    }
    clear(){
        document.getElementById("inputtext").value= "";       
    }
}









var submit = document.getElementById("submit")

submit.addEventListener("click", submitname)

function submitname() {
    var inputtext = document.getElementById("inputtext").value;
    let getcontentbyname = document.getElementById("getcontentbyname");
    let values = new getcontent(inputtext)
    // console.log(values)

    let Getval = new getval()
    Getval.add(values);
    Getval.getmeaning(values);
    Getval.clear();
   
}


