const wrapper = document.getElementById('wrapper');

const hidenShowIcon = (e) => {
  let target = wrapper;
  target.classList.contains('active') ? target.classList.remove('active') : target.classList.add('active')
  console.log(target)
}

wrapper.addEventListener('click', hidenShowIcon);
