import Notiflix from 'notiflix';

const refs = {
  firstDelayEl: document.querySelector('[name="delay"]'),
  delayStepEl: document.querySelector('[name="step"]'),
  amountEl: document.querySelector('[name="amount"]'),
  submitBtnEl: document.querySelector('button'),
};

let promisPosition = 1;

function onBtnClick (event) {
  event.preventDefault();

  setTimeout(() => {
    createPromise(promisPosition, refs.firstDelayEl.value).then(onResolveMyPromise).catch(onRejectMyPromise);
    promisPosition += 1;
    let delayResult = Number(refs.firstDelayEl.value) + Number(refs.delayStepEl.value);




    const intIdentity = setInterval(() => {

        if (promisPosition > refs.amountEl.value) {
          clearInterval(intIdentity);
        }
        else {  
          createPromise(promisPosition, delayResult).then(onResolveMyPromise).catch(onRejectMyPromise);
          promisPosition += 1;
          delayResult += Number(refs.delayStepEl.value);
        };
      },refs.delayStepEl.value);
     

  }, refs.firstDelayEl.value)
};


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
        
      } else {
      
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }  
  }
)};

function  onResolveMyPromise (resolveResultValue) {
  Notiflix.Notify.success(resolveResultValue);
  console.log(resolveResultValue);
}; 

function  onRejectMyPromise (rejectResultValue) {
  Notiflix.Notify.failure(rejectResultValue)
  console.log(rejectResultValue);
}; 








refs.submitBtnEl.addEventListener('click', onBtnClick);
