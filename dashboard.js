let arrayEntrise = []

let totalIncome = 0;
let totalExpense = 0;
let editIndex = null;



let budgetForm = document.getElementById("budgetForm")
const submitButton = budgetForm.querySelector('button[type="submit"]');

budgetForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    let description = document.getElementById("Description").value;
    let amount = parseFloat(document.getElementById("Amount").value);
    let type = document.getElementById("type").value;


    if(editIndex !== null){
        arrayEntrise[editIndex] = {description, amount, type};
        editIndex = null;
    }else{
        arrayEntrise.push({description, amount, type})
    }

    // call func//
    saveValueToLocalStorage()

    document.getElementById("Description").value = ''
    document.getElementById("Amount").value = ''
    document.getElementById("type").value = 'income'

    updateTotal()
    renderEntries()

    submitButton.blur();
    
});



function saveValueToLocalStorage(){
    localStorage.setItem('entries', JSON.stringify(arrayEntrise));
}

function loadEntriesFromLocalStorage(){
    let savedEntries = localStorage.getItem('entries');
    return savedEntries ? JSON.parse(savedEntries) : [];
}

function loadData(){
    arrayEntrise = loadEntriesFromLocalStorage();

    updateTotal()
    renderEntries()
}


window.onload = function() {
    loadData();
};




function updateTotal() {
    totalIncome = arrayEntrise.filter(e => e.type === 'income').reduce((sum, e) => sum + e.amount, 0);
    totalExpense = arrayEntrise.filter(e => e.type === 'expense').reduce((sum, e) => sum + e.amount, 0);
    let balance = totalIncome - totalExpense;

    localStorage.setItem('totalIncome', totalIncome)
    localStorage.setItem('totalExpense', totalExpense)
    localStorage.setItem('balance', balance)


    document.getElementById("totalIncome").textContent = `$${totalIncome.toFixed(2)}`
    document.getElementById("totalExpense").textContent = `$${totalExpense.toFixed(2)}`
    document.getElementById("balance").textContent = `$${balance.toFixed(2)}`
};

function localFormStored(){
    let storeTotalIcome = localStorage.getItem('totalIncome') || 0;
    let storeTotalExpense = localStorage.getItem('totalExpense') || 0;
    let storeBalance = localStorage.getItem('balance') || 0;

    document.getElementById("totalIncome").textContent = `$${storeTotalIcome.toFixed(2)}`
    document.getElementById("totalExpense").textContent = `$${storeTotalExpense.toFixed(2)}`
    document.getElementById("balance").textContent = `$${storeBalance.toFixed(2)}`

}




function renderEntries(){
    let entriesList = document.getElementById("trEntries")
    entriesList.innerHTML = ''

    if(arrayEntrise.length === 0){
        entriesList.innerHTML = `<tr><td colspan="5" class="text-center text-muted">No entries yet.</td></tr>`
        return
    }

    arrayEntrise.forEach((entry, index) => {
        entriesList.innerHTML += `
                    <tr class="my">
                        <td>${index + 1}</td>
                        <td>${entry.description}</td>
                        <td>${entry.type}</td>
                        <td>$${entry.amount}</td>
                        <td>
                            
                            <button class="btn bg-danger text-light " > 
                                <i class="bi bi-trash fs-6" onclick="deleteEntries(${index})"></i>
                            </button>

                            <button class="btn bg-warning text-light ">
                                <i class="bi bi-pencil-square fs-6" onclick="editEntry(${index})"></i>
                            </button>
                        </td>
                    </tr>
        `
    });

};

function deleteEntries(index){
    arrayEntrise.splice(index, 1)

    updateTotal()
    renderEntries()

}

function editEntry(index){

 let editData = arrayEntrise[index];
    document.getElementById("Description").value = editData.description
    document.getElementById("Amount").value = editData.amount
    document.getElementById("type").value = editData.type

   
    editIndex = index;
}


