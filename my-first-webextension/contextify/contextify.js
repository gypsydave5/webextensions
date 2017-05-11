const sendSearchText = searchText => tabs => {
    browser.tabs.sendMessage(tabs[0].id, { searchText });
}

browser.contextMenus.create({
    id: 'contextify',
    title: 'Search Acuris',
    contexts: ['selection']
})

browser.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === 'contextify') {
        browser.tabs.executeScript({ file: 'overlay.js' })

        const queries = browser.tabs.query({ active: true, currentWindow: true })
        queries.then(sendSearchText(info.selectionText))
    }
})
