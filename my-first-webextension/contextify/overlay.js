function overlay(request, sender, sendResponse) {
    alert(`searching for ${request.searchText}`)
}

browser.runtime.onMessage.addListener(overlay)
