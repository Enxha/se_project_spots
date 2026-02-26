const editBtn = document.querySelector(".profile__edit-button");
const addBtn = document.querySelector(".profile__add-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const addNewPostModal = document.querySelector("#new-post-modal");
const closeBtnProfile = editProfileModal.querySelector(".modal__close-button");
const closeBtnPost = addNewPostModal.querySelector(".modal__close-button");
const profileContent = document.querySelector("#profile-content");
const profileName = profileContent.querySelector(".profile__name");
const profileDescription = profileContent.querySelector(
  ".profile__description",
);
const inputName = editProfileModal.querySelector("#profile-name-input");
const inputDescription = editProfileModal.querySelector(
  "#profile-description-input",
);
const saveProfileForm = editProfileModal.querySelector("#profile-form");
const inputlink = addNewPostModal.querySelector("#card-image-input");
const inputCaption = addNewPostModal.querySelector("#card-caption-input");
const savePostForm = addNewPostModal.querySelector("#post-form");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  editProfileModal.classList.remove("modal_is-opened");
}
function handlePostFormSubmit(evt) {
  evt.preventDefault();
  console.log(inputlink.value);
  console.log(inputCaption.value);
  addNewPostModal.classList.remove("modal_is-opened");
}
editBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
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
saveProfileForm.addEventListener("submit", handleProfileFormSubmit);
savePostForm.addEventListener("submit", handlePostFormSubmit);
