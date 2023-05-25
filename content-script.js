console.log('loaderder')

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request)
  var evt = new CustomEvent('input', { bubbles: true, cancelable: true })
	const useradmin = document.querySelector("input[placeholder='请输入用户名']")
  useradmin.value ='admin'
  useradmin.dispatchEvent(evt)
	const password = document.querySelector("input[placeholder='请输入密码']")
  password.value = '2wsxVFR_'
  password.dispatchEvent(evt)
  document.querySelector("button").click()
	sendResponse({name: 1});
});