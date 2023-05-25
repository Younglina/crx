let btn = document.getElementById("loginButton");
// 获取当前tab标签
const getCurrentTab = async () => {
 let queryOptions = {active: true, currentWindow: true};
 let [tab] = await chrome.tabs.query(queryOptions);
 return tab;
};
 
btn.addEventListener("click", async () => {
	const tab = await getCurrentTab();
	await chrome.tabs.sendMessage(tab.id, {});
});

