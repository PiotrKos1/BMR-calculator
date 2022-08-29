const male = document.querySelector("#male");
const female = document.querySelector("#female");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const age = document.querySelector("#age");
const activity = document.querySelector("#activity");
const calculateBtn = document.querySelector(".calculate");
const popupBtn = document.querySelector(".close-popup");
const popup = document.querySelector('.popup')


const comunicateError = (input) => {
	const formBox = input.parentElement;
	formBox.classList.add('error')
}

const heightError = () => {
	if (height.value > 250 || height.value === ''){comunicateError(height)}
	else {clearError(height); }
}

const weightError = () => {
	if (weight.value > 250 || weight.value === ''){comunicateError(weight)}
	else {clearError(weight);}
}

const ageError = () => {
	if (age.value > 150 || age.value === ''){comunicateError(age)}
	else {clearError(age);}
}

const activityError = () => {
	if (activity.value === '0'){comunicateError(activity)}
	else {clearError(activity)}
}



const clearError = (input) => {
	const formBox = input.parentElement;
	formBox.classList.remove('error')}

const calculateBMR = () => {
	if (male.checked && height.value < 250 && weight.value < 250 && age.value < 150 && activity.value !== '0') {
		const manBmr =
			[66 + 13.7 * weight.value + 5 * height.value - 6.8 * age.value] *
			activity.value;
			showPopup()
		
	} else if (female.checked && height.value < 250 && weight.value < 250 && age.value < 150 && activity.value !== '0') {
		const womanBmr =
			[665 + 9.6 * weight.value + 1.8 * height.value - 4.7 * age.value] *
			activity.value;
		showPopup();
	} 
};

const showPopup = () => {
	popup.classList.add('show-popup')

}

const closePopup = () => {
	popup.classList.remove('show-popup')
}




calculateBtn.addEventListener("click", e =>{ calculateBMR(); heightError(); weightError(); ageError(); activityError();});
popupBtn.addEventListener('click', closePopup)