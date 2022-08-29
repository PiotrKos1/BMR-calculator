const male = document.querySelector("#male");
const female = document.querySelector("#female");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const age = document.querySelector("#age");
const activity = document.querySelector("#activity");
const calculateBtn = document.querySelector(".calculate");
const popupBtn = document.querySelector(".close-popup");
const popup = document.querySelector(".popup");
const bmr = document.querySelector(".bmr");
const kcal = document.querySelector(".kcal");
const def = document.querySelector(".deficit");
const surplus = document.querySelector(".surplus");

const comunicateError = (input) => {
	const formBox = input.parentElement;
	formBox.classList.add("error");
};

const heightError = () => {
	if (height.value > 250 || height.value === "") {
		comunicateError(height);
	} else {
		clearError(height);
	}
};

const weightError = () => {
	if (weight.value > 250 || weight.value === "") {
		comunicateError(weight);
	} else {
		clearError(weight);
	}
};

const ageError = () => {
	if (age.value > 150 || age.value === "") {
		comunicateError(age);
	} else {
		clearError(age);
	}
};

const activityError = () => {
	if (activity.value === "0") {
		comunicateError(activity);
	} else {
		clearError(activity);
	}
};

const clearError = (input) => {
	const formBox = input.parentElement;
	formBox.classList.remove("error");
};

const showPopup = () => {
	if (
		(male.checked || female.checked) &&
		height.value < 250 &&
		height.value !== "" &&
		weight.value < 250 &&
		weight.value !== "" &&
		age.value < 150 &&
		age.value !== "" &&
		activity.value !== "0"
	) {
		popup.classList.add("show-popup");
	}
};

const closePopup = () => {
	popup.classList.remove("show-popup");
	height.value = "";
	weight.value = "";
	age.value = "";
	activity.value = "0";
};

const showScore = () => {
	if (
		male.checked &&
		height.value >= 1 &&
		weight.value >= 1 &&
		age.value >= 1
	) {
		bmr.textContent = [
			66 + 13.7 * weight.value + 5 * height.value - 6.8 * age.value,
		];
		kcal.textContent = Math.round(
			[66 + 13.7 * weight.value + 5 * height.value - 6.8 * age.value] *
				activity.value
		);
		def.textContent = Math.round(
			[
				[66 + 13.7 * weight.value + 5 * height.value - 6.8 * age.value] *
					activity.value,
			] - 300
		);
		surplus.textContent = Math.round(
			(66 + 13.7 * weight.value + 5 * height.value - 6.8 * age.value) *
				activity.value +
				300
		);
	} else if (
		female.checked &&
		height.value >= 1 &&
		weight.value >= 1 &&
		age.value >= 1
	) {
		bmr.textContent = [
			665 + 9.6 * weight.value + 1.8 * height.value - 4.7 * age.value,
		];
		kcal.textContent = Math.round(
			[665 + 9.6 * weight.value + 1.8 * height.value - 4.7 * age.value] *
				activity.value
		);
		def.textContent = Math.round(
			[
				[665 + 9.6 * weight.value + 1.8 * height.value - 4.7 * age.value] *
					activity.value,
			] - 300
		);
		surplus.textContent = Math.round(
			(665 + 9.6 * weight.value + 1.8 * height.value - 4.7 * age.value) *
				activity.value +
				300
		);
	}
};

calculateBtn.addEventListener("click", (e) => {
	heightError();
	weightError();
	ageError();
	activityError();
	showPopup();
	showScore();
});
popupBtn.addEventListener("click", closePopup);
