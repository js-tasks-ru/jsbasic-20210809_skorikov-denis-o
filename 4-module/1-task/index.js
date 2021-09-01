function makeFriendsList(friends) {
  list = document.createElement("ul")
  for (item of friends) {
    list.innerHTML += `<li>${item.firstName} ${item.lastName}</li>`
  }
  return list
}
