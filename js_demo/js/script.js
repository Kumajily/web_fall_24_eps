function askName() {
    var nameReturn = document.getElementById('ask name');
    var name = prompt('pls enter your name' , 'HERE');
    if (name == '') { 
            alert('please try again');
    } else {
        nameReturn.innerHTML = 'hello ' + name + 'nice to meat you';
    }
}

function askQuestion() {
    var q = prompt('how many pokemon do you have');
    if (q != null) {
        document.getElementById('question').innerHTML = 'Yikes you have ' + q + ' number of pokemon that is a lot '
    }

}
export function displayAResponse()
