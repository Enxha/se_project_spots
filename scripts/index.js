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
const inputImagelink = addNewPostModal.querySelector("#card-image-input");
const inputCaption = addNewPostModal.querySelector("#card-caption-input");
const savePostForm = addNewPostModal.querySelector("#post-form");
let initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    Link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    Link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    Link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    Link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    Link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  editProfileModal.classList.remove("modal_is-opened");
}
function handlePostFormSubmit(evt) {
  evt.preventDefault();
  console.log(inputImagelink.value);
  console.log(inputCaption.value);
  addNewPostModal.classList.remove("modal_is-opened");
}
function openModal(modal) {
  modal.classList.add("modal_is-opened");
}
function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editBtn.addEventListener("click", function () {
  openModal(editProfileModal);
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
});

addBtn.addEventListener("click", function () {
  openModal(addNewPostModal);
});

closeBtnProfile.addEventListener("click", function () {
  closeModal(editProfileModal);
});

closeBtnPost.addEventListener("click", function () {
  closeModal(addNewPostModal);
});

saveProfileForm.addEventListener("submit", handleProfileFormSubmit);

savePostForm.addEventListener("submit", handlePostFormSubmit);

initialCards.forEach(function (card) {
  console.log(card);
});
