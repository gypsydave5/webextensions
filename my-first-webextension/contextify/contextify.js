browser.contextMenus.create({
  id: 'contextify',
  contexts: ['selection']
})

browser.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === 'contextify') {
    console.log(info)
    alert('Acuris FTW!')
  }
})
