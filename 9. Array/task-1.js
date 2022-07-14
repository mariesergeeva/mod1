const peopleWaiting = [
    "Кристина",
    "Олег",
    "Кирилл",
    "Мария",
    "Светлана",
    "Артем",
    "Глеб"
]
function giveParcel() {
    deletePerson = peopleWaiting.shift()
    alert(`${deletePerson} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`)
}
function leaveQueueWithoutParcel() {
    while (peopleWaiting.length > 0) {
        deletePerson = peopleWaiting.pop()
        alert(`${deletePerson} не получил(а) посылку и ушел(ла) из очереди`)
    }
}
giveParcel()
giveParcel()
giveParcel()
leaveQueueWithoutParcel()