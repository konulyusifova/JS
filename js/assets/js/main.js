function openModal() {
    const modal = document.querySelector(".window");
    modal.classList.remove("d-none")
}
function closeModal(){
    const modal = document.querySelector(".window");
    modal.classList.add("d-none");
}
function deleteModal() {
    const modal = document.getElementsByClassName("tr");
    for (i = 0; i < modal.length; i++) {
        modal -= modal[i].remove()
    }
}
function createStudent(){
    let nameInp = document.querySelector("input[name='ad']");
    let surnameInp = document.querySelector("input[name='soyad']");
    let people={
        name:nameInp.value,
        surname:surnameInp.value
    }
    let array=[];
    array.push(people);
    const tbody = document.querySelector("tbody");
    for (let i = 0; i < array.length; i++) {
     tbody.innerHTML += `<tr class="tr"><td>1</td><td>${array[i].name}</td><td>${array[i].surname}</td><td><button onclick="deleteModal()"><i class="las la-trash"></i></button></td></tr>`;
    }
    nameInp.value = '';
    surnameInp.value = '';
    closeModal();
}