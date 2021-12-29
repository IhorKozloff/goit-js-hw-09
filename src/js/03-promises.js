const refs = {
  firstDelayEl: document.querySelector('[name="delay"]'),
  delayStepEl: document.querySelector('[name="step"]'),
  amountEl: document.querySelector('[name="amount"]'),
  submitBtnEl: document.querySelector('button'),
};
let index = 1;

console.log(refs.firstDelayEl)
console.log(refs.delayStepEl)
console.log(refs.amountEl)
console.log(refs.submitBtnEl)


function onBtnClick () {
  intervalId = setInterval(createPromise, refs.delayStepEl.value);
}


function createPromise(position, delay) {
  if (index === refs.amountEl.value) {
    clearInterval(intervalId);
  }
  const shouldResolve = Math.random();
 console.log(shouldResolve);
 index += 1 
 console.log(index);
 console.log(refs.amountEl.value)
  // if (shouldResolve) {
  //   // Fulfill
  // } else {
  //   // Reject
  // }
}

function ifResolveAction (result) {
  console.log(result);
};

function ifRejectAction (result) {
  console.log(result);
};

// createPromise(3000).then(ifResolveAction);


refs.submitBtnEl.addEventListener('click', onBtnClick)
