console.log('loaderder')

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   console.log(request)
//   var evt = new CustomEvent('input', { bubbles: true, cancelable: true })
// 	const useradmin = document.querySelector("input[placeholder='请输入用户名']")
//   useradmin.value = request.name
//   useradmin.dispatchEvent(evt)
// 	const password = document.querySelector("input[placeholder='请输入密码']")
//   password.value = request.password
//   password.dispatchEvent(evt)
//   document.querySelector("button").click()
// 	sendResponse({name: 1});
// });

function loadButton(){
  let cnt = 0
  let loginForm 
  const loadInterVal = setInterval(() => {
    loginForm = document.querySelector('.login-dialog')
    cnt++
    if(cnt > 49 || loginForm){
      clearInterval(loadInterVal)
      const btns =  document.createElement('div')
      btns.style.position = "absolute"
      btns.id = "custom-btns-login"
      btns.style.top = "20px"
      btns.style.right = "20px"
      const adminBtn = document.createElement('button')
      adminBtn.innerText = 'admin'
      const useradminBtn = document.createElement('button')
      useradminBtn.innerText = 'useradmin'
      addListener(adminBtn, 'admin', '2wsxVFR_')
      addListener(useradminBtn, 'useradmin', '2wsxVFR_')
      btns.appendChild(adminBtn)
      btns.appendChild(useradminBtn)
      loginForm.parentNode.parentNode.appendChild(btns)
    }
  }, 200);
}

function addListener(ele, name, password){
  ele.addEventListener("click", async () => {
    const loginBtns = document.querySelector('#custom-btns-login')
    loginBtns.remove()
    doLogin(name, password)
  });
}

function doLogin(name, password){
  const nameEle = document.querySelector("input[placeholder='请输入用户名']")
  nameEle.value = name
  nameEle.dispatchEvent(new Event('input'))
  const passwordEle = document.querySelector("input[placeholder='请输入密码']")
  passwordEle.value = password
  passwordEle.dispatchEvent(new Event('input'))
  document.querySelector("button.ivu-btn-long").click()
}

loadButton()