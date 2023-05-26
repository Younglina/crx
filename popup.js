let btns = document.getElementsByClassName("login-btn");
// 获取当前tab标签
const getCurrentTab = async () => {
 let queryOptions = {active: true, currentWindow: true};
 let [tab] = await chrome.tabs.query(queryOptions);
 return tab;
};
console.log(btns)
for(let item of btns){
	item.addEventListener("click", async () => {
		console.log(item.dataset)
		const tab = await getCurrentTab();
		await chrome.tabs.sendMessage(tab.id, item.dataset);
	});
}

