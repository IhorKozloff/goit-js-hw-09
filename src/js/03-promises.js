import Notiflix from 'notiflix';

const refs = {
  firstDelayEl: document.querySelector('[name="delay"]'),
  delayStepEl: document.querySelector('[name="step"]'),
  amountEl: document.querySelector('[name="amount"]'),
  submitBtnEl: document.querySelector('button'),
};

const settings = {
  amount: 0,
  step: 0,
  delay: 0,
  count: 1,
};

console.log(settings);

function onBtnClick (event) {
  event.preventDefault();
  settings.amount = Number(refs.amountEl.value);
  settings.step = Number(refs.delayStepEl.value);
  settings.delay = Number(refs.firstDelayEl.value);
  settings.timeOutCount = settings.delay;

  console.log(settings);

  for (let i = 0; i < settings.amount; i += 1) {
    
      createPromise(settings.count, settings.timeOutCount).then(onResolveResult, onRejectResult);
      settings.count += 1;
      settings.timeOutCount += settings.step;
    console.log(`Цикл завершен. Ждите результатов`)
  }
};
refs.submitBtnEl.addEventListener('click', onBtnClick);


  function createPromise(promisPosition, promisDelay) {



    return new Promise((resolve, reject) => {

      const shouldResolve = Math.random() > 0.3;

      setTimeout(() => {
        
      
        if (shouldResolve) {
         resolve({ position: promisPosition, delay: promisDelay });
         
        } else {
          reject({ position: promisPosition, delay: promisDelay });
        }
      }, promisDelay);
    });
  
  };

  function onResolveResult (objDownload) {
    console.log(`✅ Fulfilled promise ${Object.values(objDownload)[0]} in ${Object.values(objDownload)[1]}ms`);
    Notiflix.Notify.success(`✅ Fulfilled promise ${Object.values(objDownload)[0]} in ${Object.values(objDownload)[1]}ms`);
  
  };

function onRejectResult (objDownload) {
  console.log(`❌ Rejected promise ${Object.values(objDownload)[0]} in ${Object.values(objDownload)[1]}ms`);
  Notiflix.Notify.failure(`❌ Rejected promise ${Object.values(objDownload)[0]} in ${Object.values(objDownload)[1]}ms`);
  };
















// let promisPosition = 1;

// function onBtnClick (event) {
//   event.preventDefault();

//   setTimeout(() => {
//     createPromise(promisPosition, refs.firstDelayEl.value).then(onResolveMyPromise).catch(onRejectMyPromise);
//     promisPosition += 1;
//     let delayResult = Number(refs.firstDelayEl.value) + Number(refs.delayStepEl.value);




//     const intIdentity = setInterval(() => {

//         if (promisPosition > refs.amountEl.value) {
//           clearInterval(intIdentity);
//         }
//         else {  
//           createPromise(promisPosition, delayResult).then(onResolveMyPromise).catch(onRejectMyPromise);
//           promisPosition += 1;
//           delayResult += Number(refs.delayStepEl.value);
//         };
//       },refs.delayStepEl.value);
     

//   }, refs.firstDelayEl.value)
// };


// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   return new Promise((resolve, reject) => {
//       if (shouldResolve) {
//         resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
        
//       } else {
      
//         reject(`❌ Rejected promise ${position} in ${delay}ms`);
//       }  
//   }
// )};

// function  onResolveMyPromise (resolveResultValue) {
//   Notiflix.Notify.success(resolveResultValue);
//   console.log(resolveResultValue);
// }; 

// function  onRejectMyPromise (rejectResultValue) {
//   Notiflix.Notify.failure(rejectResultValue)
//   console.log(rejectResultValue);
// }; 








// refs.submitBtnEl.addEventListener('click', onBtnClick);
