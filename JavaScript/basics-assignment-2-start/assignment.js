const task3Element = document.getElementById('task-3');

function alertHardCodedName(){
    alert('Hey!! Beautiful..<3')
}

function alertName(enterdName){
    alert(`Hey!! ${enterdName} You are Beautiful.. mY lOVE<3`);
}

function combineFullName(fName,mName,lName){
    // const fullName = fName + ' ' + mName  + ' ' + lName;
    const fullName = `${fName} ${mName} ${lName}`;
    return fullName;
}
//1 & 2
alertName('Shraddha');
//3
task3Element.addEventListener('click', alertHardCodedName);
//4 & 5
const finalCombinedName = combineFullName('Vijay','Dinanath','Chouhan');
alert('Hey!! Your full Name is: ' +  finalCombinedName);