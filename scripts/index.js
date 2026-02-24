const editBtn = document.querySelector(".profile__edit-button");
const addBtn = document.querySelector(".profile__add-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const addNewPostModal = document.querySelector("#new-post-modal");
const closeBtnProfile = editProfileModal.querySelector(".modal__close-button");
const closeBtnPost = addNewPostModal.querySelector(".modal__close-button");

editBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});

addBtn.addEventListener("click", function () {
  addNewPostModal.classList.add("modal_is-opened");
});

closeBtnProfile.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

closeBtnPost.addEventListener("click", function () {
  addNewPostModal.classList.remove("modal_is-opened");
});
