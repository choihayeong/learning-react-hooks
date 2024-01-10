# learning-react-hooks
learning React Hooks (custom react hooks)

## Using CodeSandBox
[CodeSandbox](https://codesandbox.io/p/sandbox/learning-react-hooks-88228l?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clqfz05sj0006356hxscb4wzz%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clqfz05si0002356hfk7gdmik%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clqfz05si0003356hggtj4489%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clqfz05si0005356hqzi75la4%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B62.38385347816924%252C37.61614652183076%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clqfz05si0002356hfk7gdmik%2522%253A%257B%2522id%2522%253A%2522clqfz05si0002356hfk7gdmik%2522%252C%2522tabs%2522%253A%255B%255D%257D%252C%2522clqfz05si0005356hqzi75la4%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clqfz05si0004356hcqn1jtx8%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clqfz05si0005356hqzi75la4%2522%252C%2522activeTabId%2522%253A%2522clqfz05si0004356hcqn1jtx8%2522%257D%252C%2522clqfz05si0003356hggtj4489%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clqfz05si0003356hggtj4489%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

## List : Custom Hooks 
- [x] useInput
- [x] useTabs
- [x] useTitle
- [x] useClick & useHover
- [x] useConfirm
- [x] usePreventLeave
- [x] useBeforeLeave
- [x] useFadeIn
- [x] useNetwork
- [x] useScroll
- [x] useFullscreen
- [x] useNotification
- [x] useAxios

### Reference (MDN)
- [Window: beforeunload event](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event)
- [Window: online event](https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event)
- [Window: offline event](https://developer.mozilla.org/en-US/docs/Web/API/Window/offline_event)
- [Element: requestFullscreen() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen)
- [Document: exitFullscreen() method](https://developer.mozilla.org/en-US/docs/Web/API/Document/exitFullscreen)
- [Notifications API](https://developer.mozilla.org/ko/docs/Web/API/Notifications_API)

## npm publishing
- npm 로그인 후 add organization 클릭 후 생성
- 터미널에서 `npm login`으로 로그인
- 터미널에서 해당 패키지 `npm publish --access public` 명령어로 publishing 완료
